const app = require('express')();
require('express-async-errors');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const todosRouter = require('./routes/todos.route');


app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/api/todos', todosRouter);


module.exports = app;