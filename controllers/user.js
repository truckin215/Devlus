const passport = require('../config/passport');

// GET home page at /
exports.home = (req, res) => {
    res.render('home');
}

// get description page at /description
exports.description = (req,res) => {
    res.render('description')
}
