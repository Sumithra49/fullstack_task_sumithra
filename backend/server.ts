import { createServer } from 'http';
import { Server } from 'socket.io';
import app from './app';
import { connectDB } from './config/db';
import redisClient from './config/redis';
import taskRoutes from './routes/taskRoutes';
import { setupSocket } from './sockets/taskSocket';


const PORT = process.env.PORT || 4000;
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: { origin: '*' }
});

setupSocket(io);
connectDB();
redisClient.connect().catch(console.error);
app.use('/api/tasks', taskRoutes);
  
httpServer.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
