cosnt db = require("./models");

db.Projects.create({
    UserID: 1 ,
    projectName: "Code Skools",
    description: "Creating a platform to teach how to code",
    devCount: 10,
    location: "miami",
    payment: true,
    length:,
    image:"http://codeskools.com/wp-content/uploads/2019/03/logo.png",
    startdate: "December",
    close: false
})