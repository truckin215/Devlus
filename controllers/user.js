const express = require('express');
const passport = require('../config/passport');
const db = require('../models');
const app = express();

// // GET home page at /main
// exports.main = (req, res) => {
//     req.context.db.Projects.findAll({
//         attributes: ['id', 'projectName']
//     }).then(function(results){
//         console.log(results)
//         // rendering tasks view and passing taskToDo data
//         res.render('home', {project: results});
//     }).catch(function(err){
//         console.log(err);
//         res.json(err);
//     });
// }

// get description page at /addproject
exports.addproject = (req,res) => {
    res.render('addproject')
}
// GET profile page at /profile
exports.profile = (req,res) => {
    console.log(req.user)
    res.render('profile', {currentUser: req.user})
}
// GET input page at /singleProject
exports.singleProject = (req,res) => {
    exports.main = (req,res) => {
        req.context.db.Projects.findAll({
            attributes: ['id', 'projectName', 'image', 'location', 'description']
        }).then(function(results){
            res.render('singleProject', {projects: results})}
        )
    }
}
// GET savedProjects page at /savedProjects
exports.savedProjects = (req,res) => {
    exports.main = (req,res) => {
        req.context.db.userfavorites.findAll({
            attributes: ['id', 'projectName', 'image', 'location', 'description']
        }).then(function(results){
            res.render('savedProjects', {favorites: results})}
        )
    }
}
// GET . signin
exports.login = (req,res) => {
    res.render('login')
}

// GET /signup
exports.signup = (req,res) => {
    res.render('signup')
}

// GET /main
exports.main = (req,res) => {
    req.context.db.Projects.findAll({
        attributes: ['id', 'projectName', 'image', 'location', 'description']
    }).then(function(results){
        console.log(results.dataValues)
        res.render('main', {projects: results})}   
    )
}
;


// Git Oauth
exports.gitlogin = passport.authenticate('github');

exports.gitCallback = passport.authenticate('github', { failureRedirect: '/login',
successRedirect: '/profile',} );



// POST /signup
exports.postsignup = passport.authenticate('local-signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup' 
});

// POST user/login
exports.postlogin = passport.authenticate('local', { 
    successRedirect: '/profile',
    failureRedirect: '/login' 
});

// POST postProject
exports.postProject = (req, res) => {
    console.log("here")
    req.context.db.Projects.create({
        UserID:  req.user.id,
        projectName: req.body.projectName ,
        description: req.body.description ,
        location: req.body.location

    }).then(function(){
        res.redirect('/main');
    }).catch(function(err){
        console.log(err);
        res.json(err);
    });
}
