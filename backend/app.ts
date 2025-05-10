import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import taskRoutes from './routes/taskRoutes';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', taskRoutes);

export default app;
