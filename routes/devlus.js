const express = require('express');
const router  = express.Router();
const todoController = require('../controllers/todo');

// ############### ROUTES ##############

// // Get for tasks: returns all tasks
// router.get( '/', todoController.allTodos );

// // Post for tasks: posting a task
// router.post( '/tasks', todoController.addTask );

// // Delete for task: deleting specify task
// router.delete( "/tasks/:id", todoController.removeTask );

module.exports = router;