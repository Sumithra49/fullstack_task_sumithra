import { io } from 'socket.io-client';

export const socket = io('https://fullstack-task-sumithra.onrender.com');
socket.on('connect', () => {
  console.log('✅ Connected to socket server');
});