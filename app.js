require('dotenv').config() 

const express = require('express');
const routes  = require('./routes');
const session = require('express-session');
const bodyParser = require('body-parser').urlencoded({extended: false})
// const database = require('./models');


const app = express();

// const port = process.env.PORT || 3000 ;

app.set("view engine","ejs");

app.use(express.static('./public'));
app.use(bodyParser)
app.use(routes);


// database.sequelize.sync().then(function(){
//     app.listen(port, function(err){
//         if (err)
//             console.log(err)
//         console.log('Server is live on port: ' + port)
//     })
// });
app.listen(3000)
console.log('live on port 3000')