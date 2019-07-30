const db = require("./models");

db.Projects.create({
    UserID: 1 ,
    projectName: "Code Skools",
    description: "Creating a platform to teach how to code",
    devCount: 10,
    location: "miami",
    payment: true,
    length:"3 months",
    image:"http://codeskools.com/wp-content/uploads/2019/03/logo.png",
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
    image:"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
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
    image:"https://www.google.com/search?q=ubuntu&safe=strict&tbm=isch&source=iu&ictx=1&fir=WeuoXrWWGfhc2M%253A%252CQce3Y1oruAAVjM%252C%252Fm%252F03x5qm&vet=1&usg=AI4_-kS6j0SJ6b0zhWETHjCccdKqyRFreg&sa=X&ved=2ahUKEwjH18aL4dzjAhXMo1kKHXEBAwkQ_B0wG3oECAUQAw#imgrc=WeuoXrWWGfhc2M:",
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
    image:"https://files.slack.com/files-pri/TK8FV149J-FLY651KM5/efabb370-4e67-41e1-8e39-a144569bf0af_200x200.png",
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
    image:"https://www.google.com/search?q=slack&safe=strict&tbm=isch&source=iu&ictx=1&fir=Z2UT29elyDdqLM%253A%252CAIU54fSVhd9JLM%252C_&vet=1&usg=AI4_-kRmVRsjS4nUIjaYcYdfrdUX-4Umnw&sa=X&ved=2ahUKEwjd2Zib4dzjAhUJvlkKHS7BD3cQ_h0wKHoECAMQBQ#imgrc=Z2UT29elyDdqLM:",
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
    image:"https://files.slack.com/files-pri/TK8FV149J-FLP3FG3DF/totel.png",
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
    image:"https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjd2Zib4dzjAhUJvlkKHS7BD3cQPAgH",
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
    image:"https://www.google.com/search?q=microsoft&safe=strict&tbm=isch&source=iu&ictx=1&fir=x_k_n-CTqGOxlM%253A%252CX5CbM-ZIIVwCtM%252C%252Fm%252F04sv4&vet=1&usg=AI4_-kTMI5Ewhw3U0zqXLU-9aRuqKJNYwQ&sa=X&ved=2ahUKEwiYnJG54dzjAhWqtlkKHRdTCiIQ_B0wIHoECAEQAw#imgrc=x_k_n-CTqGOxlM:",
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
    image:"https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwi71IvO4dzjAhVuuVkKHbU1AQoQjRx6BAgBEAU&url=%2Furl%3Fsa%3Di%26source%3Dimages%26cd%3D%26ved%3D%26url%3Dhttps%253A%252F%252Fen.wikipedia.org%252Fwiki%252FDell%26psig%3DAOvVaw3MpFqAUnS6d0xSHVAWkw6Z%26ust%3D1564580205303283&psig=AOvVaw3MpFqAUnS6d0xSHVAWkw6Z&ust=1564580205303283",
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
    image:"https://www.google.com/search?q=apple&safe=strict&tbm=isch&source=iu&ictx=1&fir=-TtEc9M5pE7LPM%253A%252CobY4_sHHUHwJ8M%252C%252Fm%252F0k8z&vet=1&usg=AI4_-kQHHlT2SjacFVof_nLZyONbdGrIXA&sa=X&ved=2ahUKEwj64a_j4dzjAhVJs1kKHX37Ba4Q_B0wKXoECAUQAw#imgrc=-TtEc9M5pE7LPM:",
    startdate: "April 1st",
    close: false
})