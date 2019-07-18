// Makes routes work
const express = require('express');
const user    = require('./user');

const router  = express.Router();

router.use(user);

module.exports = router;