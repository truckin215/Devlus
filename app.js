// require('dotenv').config() 

const express = require('express');
const routes  = require('./routes');
const database = require('./models');
const session = require('express-session');
const passport = require('./config/passport');
const bodyParser = require('body-parser').urlencoded({extended: false})


const app = express();

const port = process.env.PORT || 3000 ;

// adding context to our request
app.use( (req, res, next ) => {
    req.context = { db: database }
    next();
} )

app.set("view engine","ejs");

app.use(express.static('./public'));
app.use(session({ secret: "I love veros cohort 2", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser)
app.use(routes);


database.sequelize.sync().then(function(){
    app.listen(port, function(err){
        if (err)
            console.log(err)
        console.log('Server is live on port: ' + port)
    })
});