
import express from 'express';
import { createTask, deleteTask, fetchAllTasks, updateTask } from '../controllers/taskController';

const router = express.Router();


router.get('/fetchAllTasks', fetchAllTasks);


router.post('/createTask', createTask);


router.put('/updateTask/:taskId', updateTask);


router.delete('/deleteTask/:taskId', deleteTask);

export default router;
