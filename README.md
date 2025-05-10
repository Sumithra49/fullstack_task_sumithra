# fullstack_task_sumithra
# 📝 Full Stack To-Do List (Real-Time with Redis, MongoDB, and WebSockets)



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
![image](https://github.com/user-attachments/assets/3d0242b8-c121-41f4-a2fe-a30eb2fb7334)
![image](https://github.com/user-attachments/assets/168c7b2c-fbfb-4a71-b4df-cc34ca832419)


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
[GitHub](https://github.com/yourusername)

---


