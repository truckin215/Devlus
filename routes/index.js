// this is my route manager 
const express = require('express');
const user    = require('./user');

const router  = express.Router();

router.use(user);

module.exports = router;