require('dotenv').config() 

const express = require('express');
const routes  = require('./routes');
// const database = require('./models');
const session = require('express-session');
// const passport = require('./config/passport');

const bodyParser = require('body-parser').urlencoded({extended: false})

const port = process.env.PORT || 3000 ;

const app = express();

app.set("view engine","ejs");

app.use(express.static('./public'));
app.use(bodyParser)
app.use(routes);

database.sequelize.sync().then(function(){
    app.listen(port, function(err){
        if (err)
            console.log(err)
        console.log('Server is live on port: ' + port)
    })
});