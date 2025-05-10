import { Server } from 'socket.io';
import redisClient from '../config/redis';
import TaskModel from '../models/taskModel';
import { Task } from '../utils/types';



export const setupSocket = (io: Server) => {
  io.on('connection', (socket) => {
    console.log('🟢 Client connected');

    socket.on('add', async (task: Task) => {
      const redisKey = `FULLSTACK_TASK_Sumithra`; // Replace with your name
      const current = await redisClient.get(redisKey);
      const tasks: Task[] = current ? JSON.parse(current) : [];

      tasks.push(task);

      if (tasks.length > 50) {
        await TaskModel.insertMany(tasks);
        await redisClient.del(redisKey);
        console.log('📤 Moved tasks to MongoDB');
      } else {
        await redisClient.set(redisKey, JSON.stringify(tasks));
      }

      io.emit('tasksUpdated', task);
    });

    socket.on('disconnect', () => {
      console.log('🔴 Client disconnected');
    });
  });
};
