# fullstack_task_sumithra
# 📝 Full Stack To-Do List (Real-Time with Redis, MongoDB, and WebSockets)
A full-stack to-do list application built with Node.js, Redis, MongoDB, and React.js. The app uses WebSockets (Socket.io) to allow real-time task addition, stores tasks in Redis, and moves them to MongoDB when the list exceeds 50 items. The frontend is built with React.js and is fully responsive, ensuring a seamless user experience across all devices.

# Deployed Link
## Backend:https://fullstack-task-sumithra.onrender.com
## front end:https://fullstack-task-sumithra.vercel.app/


---

## 🔧 Tech Stack

### Backend
- **Node.js + TypeScript**
- **Socket.IO**
- **Redis (Cloud RedisLabs)**
- **MongoDB (MongoDB Atlas)**
- **Express**

### Frontend
- **React.js (TypeScript)**
- **CSS**
- **Axios for API calls**
- **Socket.IO Client**

---

## 📦 Project Structure

```
fullstack-task-sumithra/

![image](https://github.com/user-attachments/assets/10fe3929-9e42-4f22-a3fb-132ac06248cb)




```

---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/yourusername/fullstack-task-sumithra.git
cd fullstack-task-sumithra
```

---

## ⚙️ Backend Setup

### Install Dependencies

```bash
cd backend
npm install
```

### Configure Environment

```env
# .env
PORT=
REDIS_HOST=
REDIS_PORT=
REDIS_USERNAME=
REDIS_PASSWORD=
MONGO_URI=
```

### Start Backend Server

```bash
npm run dev
```

---

## 🌐 Frontend Setup

### Install Dependencies

```bash
cd frontend
npm install
```

### Start React App

```bash
npm start
```

---

## 📡 WebSocket Functionality

- **Connect** to socket on client load
- **Send "add"** event with task data on adding a new task
- **Cache task** in Redis under key: `FULLSTACK_TASK_Sumithra`
- **Flush to MongoDB** when task count exceeds 50

---

## 🧠 API Endpoints

### `GET /api/tasks/fetchAllTasks`
- Returns all tasks from MongoDB collection `assignment_sumithra`





## 🎨 Figma Design

Reference Design:  
[Figma Link](https://www.figma.com/proto/x3I0bqXvZeMQ34gAfLUogk/Note-App?node-id=0%3A3&page-id=0%3A1&scaling=scale-down)

### Design Guidelines:
- Pixel-perfect UI
- Responsive layout (desktop/tablet/mobile)
- Reusable components


---

## ✅ Features

- [x] Add new tasks via WebSocket
- [x] Real-time updates
- [x] Redis cache for recent tasks
- [x] MongoDB backup when tasks > 50
- [x] REST API to fetch all tasks
- [x] Responsive frontend UI

---

## 👨‍💻 Author

**Sumithra**  
[GitHub](https://github.com/Sumithra49)

---
## Screenshot
![image](https://github.com/user-attachments/assets/fb556fcb-a038-42d1-a350-082f55365e24)




