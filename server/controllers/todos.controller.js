const { Todo } = require('../database/models');

const fetchTodos = async (req, res) => {
    const {skip = 0, limit = 10} = req.query;
    const allTasks = await Todo.find({}).skip(parseInt(skip)).limit(parseInt(limit));
    res.send(allTasks);
};


const createTodo = async (req, res) => {
    const { title } = req.body;
    const newTask = new Todo();
    newTask.title = title;
    res.send(await newTask.save());
};

const updateTodo = async (req, res) => {
    const { taskId } = req.params;
    const { title, completed } = req.body;

    const updatedTask = await Todo.findByIdAndUpdate(taskId, { title, completed }, { returnOriginal: false });

    if (!updatedTask) {
        return res.sendStatus(404);
    }

    return res.send(updatedTask);
};


const deleteTodo = async (req, res) => {
    const { taskId } = req.params;
    await Todo.findByIdAndDelete(taskId);
    res.sendStatus(200);
};


module.exports = {deleteTodo,fetchTodos,createTodo,updateTodo};