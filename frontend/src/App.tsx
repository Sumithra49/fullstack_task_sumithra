import axios from 'axios';
import { useEffect, useState } from 'react';
import icon from "../src/pic/icon.png";
import Line from "../src/pic/Line 4.png";
import plusCircle from "../src/pic/plus-circle 1.png";
import './App.css';
import { socket } from './socket';

interface Task {
  _id?: string;
  task: string;
  __v?: number;
}

const App = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    fetchTasks();

    
    socket.on('tasksUpdated', (newTask: Task) => {
      console.log('📥 New task from socket:', newTask);
      setTasks(prev => [...prev, newTask]);
    });

    return () => {
      socket.off('tasksUpdated');
    };
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await axios.get('http://localhost:4000/api/tasks/fetchAllTasks');
      setTasks(res.data);
    } catch (err) {
      console.error('Error fetching tasks:', err);
    }
  };

  const handleAdd = async () => {
    if (task.trim()) {
      try {
      
        socket.emit('add', { task });

        setTask('');
      } catch (err) {
        console.error('Error sending task:', err);
      }
    }
  };

  return (
    <div className="app-container">
      <div className="todo-box">
        <div className='icon-title-container'>
          <div className='icon-img'>
            <img src={icon} alt="icon" className='todo-icon' />
          </div>
          <p className="title">To-Do List</p>
        </div>

        <div className="input-button-wrapper">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="input"
            placeholder="New Task..."
          />
          <button onClick={handleAdd} className="btn">
            <img src={plusCircle} alt="Plus" className="btn-plus-img" />
            <span className="btn-name">Add</span>
          </button>
        </div>

        <div className="list">Lists</div>
        <img src={Line} alt="Line" className="line-h" />
        <div className="task-container">
          <ul className="space-y-2">
            {tasks.map((t, idx) => (
              <div key={t._id || idx}>
                <li className="task">{t.task}</li>
                <img src={Line} alt="Line" className="line" />
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
