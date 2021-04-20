const app = require('express')();
const morgan = require('morgan');
const bodyParser = require('body-parser');



app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));





module.exports = app;