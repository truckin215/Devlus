const db = require("./models");

db.Projects.create({
    UserID: 1 ,
    projectName: "Code Skools",
    description: "Creating a platform to teach how to code",
    devCount: 10,
    location: "miami",
    payment: true,
    length:"Three mmonths",
    image:"/codeskools",
    startdate: "December",
    close: false
})

db.Projects.create({
    UserID: 1 ,
    projectName: "Devlus",
    description: "Creating a platform to connect Programmers in a meet-up form",
    devCount: 12,
    location: "Vero",
    payment: true,
    length:"Forever",
    image:"/Devlus",
    startdate: "July 31st",
    close: false
})

db.Projects.create({
    UserID: 1 ,
    projectName: "Ubuntu",
    description: "Creating a platform, for code users",
    devCount: 20,
    location: "London",
    payment: true,
    length:"14 years",
    image:"/Ubuntu",
    startdate: "October 20, 2004",
    close: false
})

db.Projects.create({
    UserID: 1 ,
    projectName: "Jungle",
    description: "Making a platform to hunt for your own personal job",
    devCount: 8,
    location: "FL",
    payment: true,
    length:"8 months",
    image:"/Jungle",
    startdate: "August 20th",
    close: false
})

db.Projects.create({
    UserID: 1 ,
    projectName: "Slack",
    description: "Slack is an American cloud-based set of proprietary team collaboration software tools and online services, developed by Slack Technologies. ",
    devCount: 600,
    location: "CA",
    payment: true,
    length:"7 years ",
    image:"/Slack",
    startdate: "August 2013",
    close: false
})

db.Projects.create({
    UserID: 1 ,
    projectName: "Totel",
    description: "An application that gives you a survey, then gives suggested ideas for you",
    devCount: 20,
    location: "VA",
    payment: true,
    length:" 3 weeks",
    image:"/Totel",
    startdate: " August 15th",
    close: false
})

db.Projects.create({
    UserID: 1 ,
    projectName: "Google",
    description: "Making the search engine used everywhere",
    devCount: 500,
    location: "CA",
    payment: true,
    length:"30 years",
    image:"/Google",
    startdate: "September 4, 1998",
    close: false
})

db.Projects.create({
    UserID: 1 ,
    projectName: "Microsoft",
    description: "Microsoft develops, manufactures, licenses, supports and sells computer software, consumer electronics, personal computers, and related services.",
    devCount: 300,
    location: "WA",
    payment: true,
    length:"22 years",
    image:"/Microsoft",
    startdate: "October 1st",
    close: false
})

db.Projects.create({
    UserID: 1 ,
    projectName: "Dell",
    description: "Dell provides technology solutions, services & support.",
    devCount: 222,
    location: "TX",
    payment: true,
    length:"12 years",
    image:"/Dell",
    startdate: "May 12th",
    close: false
})

db.Projects.create({
    UserID: 1 ,
    projectName: "Apple",
    description: "Apple Inc. is an American multinational technology company .",
    devCount: 700,
    location: "CA",
    payment: true,
    length:"50 years",
    image:"/Apple",
    startdate: "April 1st",
    close: false
})
