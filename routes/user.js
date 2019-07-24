const express = require('express');
const router  = express.Router();
const userController = require('../controllers/user')

router.get('/', userController.home );

router.get('/addproject', userController.addproject)

router.get('/profile', userController.profile)

router.get('/singleProject',userController.singleProject)

router.get('/savedProjects', userController.savedProjects)

router.get('/login', userController.login)

router.post('/login', userController.postlogin)

router.get('/signup', userController.signup)

router.post('/signup', userController.postsignup)

router.get('/main', userController.main)

router.get('/auth/github', userController.gitlogin)

module.exports = router;

