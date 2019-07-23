
// GET home page at /
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

// get description page at /description
exports.description = (req,res) => {
    res.render('description')
}
// GET profile page at /profile
exports.profile = (req,res) => {
    res.render('profile')
}
// GET input page at /input
exports.input = (req,res) => {
    res.render('input')
}
// GET savedProjects page at /savedProjects
exports.savedProjects = (req,res) => {
    res.render('savedProjects')
}
// GET signup page at /signup
exports.signup = (req,res) => {
    res.render('signup')
}