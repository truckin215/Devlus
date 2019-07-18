// links express server, by requiring package
const express = require('express');
// calling express and storing its value in a variable 
const app = express();
// routing any traffic going to the root url and sending back a response
app.get('/', function(request, response){
    response.send("Hello World!!!! we are live!");
});
// adding pages, by routing any traffic thats going to /James then sending back a response
app.get("/James", function(req,res){
    res.send("yo your in my about me page.")
});
// set port
app.listen(3000);
// testing if server is running
console.log("server is live and on port 3000");