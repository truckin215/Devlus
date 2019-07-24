const passport = require('../config/passport');

// // GET home page at /
exports.home = (req, res) => {
    req.context.db.Projects.findAll({
        attributes: ['id', 'projectName']
    }).then(function(results){
        console.log(results)
        // rendering tasks view and passing taskToDo data
        res.render('home', {project: results});
    }).catch(function(err){
        console.log(err);
        res.json(err);
    });
}

// get description page at /addproject
exports.addproject = (req,res) => {
    res.render('addproject')
}
// GET profile page at /profile
exports.profile = (req,res) => {
    res.render('profile')
}
// GET input page at /singleProject
exports.singleProject = (req,res) => {
    res.render('singleProject')
}
// GET savedProjects page at /savedProjects
exports.savedProjects = (req,res) => {
    res.render('savedProjects')
}
// GET signup page at /signup
exports.signup = (req,res) => {
    res.render('signup')
}

// POST /user/signup
// exports.signup = passport.authenticate('local-signup', {
//     successRedirect: '/profile',
//     failureRedirect: '/signup' 
// });