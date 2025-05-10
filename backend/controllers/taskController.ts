import { Request, Response } from 'express';
import redisClient from '../config/redis'; // Assuming Redis client is initialized in this file
import TaskModel from '../models/taskModel';

// Fetch all tasks (from both MongoDB and Redis)

export const fetchAllTasks = async (_: Request, res: Response) => {
  try {
    const redisKey = `FULLSTACK_TASK_Sumithra`;

    // Try fetching from Redis
    const cache = await redisClient.get(redisKey);
    let redisTasks = cache ? JSON.parse(cache) : [];

    // ✅ Clean up: Remove invalid entries (e.g., strings, objects without task field)
    redisTasks = redisTasks.filter(
      (item: any) => typeof item === 'object' && item.task
    );

    // 🔄 If Redis had bad data and is now empty or changed, re-seed with MongoDB
    if (redisTasks.length === 0) {
      const mongoTasks = await TaskModel.find();
      await redisClient.set(redisKey, JSON.stringify(mongoTasks));
      return res.status(200).json(mongoTasks);
    }

    // ✅ Update Redis with cleaned data
    await redisClient.set(redisKey, JSON.stringify(redisTasks));

    // Return cleaned data
    return res.status(200).json(redisTasks);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch tasks' });
  }
};

// Create a new task
export const createTask = async (req: Request, res: Response) => {
  try {
    const { task } = req.body; // `task` is the only field in the schema

    // Create a new task instance
    const newTask = new TaskModel({ task });
    // Save the task to MongoDB
    await newTask.save();

    // Fetch the updated list of tasks from Redis
    const redisKey = `FULLSTACK_TASK_Sumithra`;
    const cache = await redisClient.get(redisKey);
    const redisTasks = cache ? JSON.parse(cache) : [];

    // Add the new task to Redis cache
    redisTasks.push(newTask);
    await redisClient.set(redisKey, JSON.stringify(redisTasks));

    // Respond with the newly created task
    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create task' });
  }
};

// Update a task by its ID
export const updateTask = async (req: Request, res: Response) => {
  try {
    const { taskId } = req.params;
    const { task } = req.body; // Update only the `task` field

    // Update task in MongoDB
    const updatedTask = await TaskModel.findByIdAndUpdate(
      taskId,
      { task },
      { new: true }
    );

    if (!updatedTask) {
      return res.status(404).json({ error: 'Task not found' });
    }

    // Update the task in Redis cache
    const redisKey = `FULLSTACK_TASK_Sumithra`;
    const cache = await redisClient.get(redisKey);
    const redisTasks = cache ? JSON.parse(cache) : [];

    const taskIndex = redisTasks.findIndex((task: any) => task._id.toString() === taskId);
    
    if (taskIndex > -1) {
      // Replace the updated task in Redis
      redisTasks[taskIndex] = updatedTask;
      await redisClient.set(redisKey, JSON.stringify(redisTasks));
    }

    res.status(200).json(updatedTask);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update task' });
  }
};

// Delete a task by its ID
export const deleteTask = async (req: Request, res: Response) => {
  try {
    const { taskId } = req.params;

    // Delete task from MongoDB
    const deletedTask = await TaskModel.findByIdAndDelete(taskId);

    if (!deletedTask) {
      return res.status(404).json({ error: 'Task not found' });
    }

    // Remove task from the Redis cache
    const redisKey = `FULLSTACK_TASK_Sumithra`;
    const cache = await redisClient.get(redisKey);
    const redisTasks = cache ? JSON.parse(cache) : [];
    
    const updatedRedisTasks = redisTasks.filter((task: any) => task._id.toString() !== taskId);

    await redisClient.set(redisKey, JSON.stringify(updatedRedisTasks));

    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete task' });
  }
};
