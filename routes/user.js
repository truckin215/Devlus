const express = require('express');
const router  = express.Router();
const userController = require('../controllers/user')

router.get('/', userController.home );

router.get('/description', userController.description)

module.exports = router;

