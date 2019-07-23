const express = require('express');
const router  = express.Router();
const userController = require('../controllers/user')

router.get('/', userController.home );

router.get('/description', userController.description)

router.get('/profile', userController.profile)

router.get('/input',userController.input)

router.get('/savedProjects', userController.savedProjects)

router.get('/signup', userController.signup)

module.exports = router;

