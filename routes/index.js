// this is my route manager 
const express = require('express');
const devlus    = require('./devlus');
const user    = require('./user');

const router  = express.Router();


router.use(devlus);
router.use(user);

module.exports = router;