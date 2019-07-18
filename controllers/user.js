
// GET home page at /
exports.home = (req, res) => {
    res.render('home');
}

// get description page at /description
exports.description = (req,res) => {
    res.render('description')
}

exports.profile = (req,res) => {
    res.render('profiles')
}

exports.input = (req,res) => {
    res.render('input')
}

exports.savedProjects = (req,res) => {
    res.render('savedProjects')
}