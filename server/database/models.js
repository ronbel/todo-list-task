const mongoose = require('mongoose');

const Todo = new mongoose.Schema({
    title: String,
    completed: {type: Boolean, default: false}
}, {timestamps: true, versionKey: false});

module.exports ={Todo: mongoose.model('Todo', Todo)};