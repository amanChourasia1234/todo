import mongoose, { Schema } from 'mongoose';
const schema = mongoose.Schema;
const todoSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: String,
  },
  { timestamps: true }
);
const Todo = mongoose.model('Todo', todoSchema);
export default Todo;
