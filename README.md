# fullstack_task_sumithra
# 📝 Full Stack To-Do List (Real-Time with Redis, MongoDB, and WebSockets)

A full-stack real-time to-do list app built with:
- **Node.js (TypeScript)** backend
- **Socket.IO for WebSockets**
- **Redis** for caching tasks
- **MongoDB** for long-term storage
- **React (TypeScript)** frontend
- **Styled using CSS / Tailwind CSS (optional)**

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
├── backend/
│   ├── sockets/taskSocket.ts
│   ├── models/taskModel.ts
│   ├── config/redis.ts
│   ├── routes/taskRoutes.ts
│   ├── controllers/taskController.ts
│   ├── utils/types.ts
│   └── server.ts
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── TaskItem.tsx
│   │   ├── App.tsx
│   │   └── socket.ts
├── README.md
└── package.json
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

---

## 📊 MongoDB & Redis Details

### MongoDB
- **DB URL**: `mongodb+srv://assignment_user:HCgEj5zv8Hxwa4xO@testcluster.6f94f5o.mongodb.net/`
- **Database**: `assignment`
- **Collection**: `assignment_sumithra`

### Redis
- **Host**: `redis-12675.c212.ap-south-1-1.ec2.cloud.redislabs.com`
- **Port**: `12675`
- **Username**: `default`
- **Password**: `dssYpBnYQrl01GbCGVhVq2e4dYvUrKJB`

---

## 🎨 Figma Design

Reference Design:  
[Figma Link](https://www.figma.com/proto/x3I0bqXvZeMQ34gAfLUogk/Note-App?node-id=0%3A3&page-id=0%3A1&scaling=scale-down)

### Design Guidelines:
- Pixel-perfect UI
- Responsive layout (desktop/tablet/mobile)
- Reusable components
- Optional: Tailwind CSS for fast styling

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
[GitHub](https://github.com/yourusername)

---

## 📦 To Submit

- Zip the `fullstack-task-sumithra/` folder **OR**
- Push to GitHub and share the repo link
