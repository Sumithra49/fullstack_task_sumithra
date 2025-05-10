import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
task: String,
});

const TaskModel = mongoose.model('Task', taskSchema, process.env.MONGO_COLLECTION);

export default TaskModel;
