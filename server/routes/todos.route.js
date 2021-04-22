const router = require('express').Router();
const { body } = require('express-validator');
const validate = require('../middlewares/validation-error.middleware');
const { deleteTodo, fetchTodos, createTodo, updateTodo } = require('../controllers/todos.controller');

router.get('/', fetchTodos);
router.post('/new', body('title').isString().notEmpty(), validate, createTodo);
router.put('/:taskId/edit', body('title').isString().notEmpty(), body('completed').isBoolean(), validate, updateTodo);
router.delete('/:taskId/delete', deleteTodo);



module.exports = router;