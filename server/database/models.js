const mongoose = require('mongoose');

const Todo = new mongoose.Schema({
    title: String,
    completed: {type: Boolean, default: false}
}, {timestamps: true});

module.exports = mongoose.model('Todo', Todo);