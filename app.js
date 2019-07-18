require('dotenv').config() 

const express = require('express');
const routes  = require('./routes');
const session = require('express-session');
const bodyParser = require('body-parser').urlencoded({extended: false})

const app = express();

app.set("view engine","ejs");

app.use(express.static('./public'));
app.use(bodyParser)
app.use(routes);

app.listen(3000)
console.log('we are live on port 3000')