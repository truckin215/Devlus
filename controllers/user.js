const passport = require('../config/passport');

// GET user/signup
exports.register = (req, res) => {
    res.render('register');
}
// GET /user/login
exports.userLogin = (req, res) => {
    res.render('login');
}
// GET /profile
exports.userProfile = (req, res) => {
    res.render('profile', {currentUser:req.user});
}

// GET for /logout
exports.userLogout = (req, res) => {
    req.logout();
    res.redirect('/user/login');
}

// POST /user/signup
exports.signup = passport.authenticate('local-signup', {
    successRedirect: '/profile',
    failureRedirect: '/user/signup' 
});

// POST user/login
exports.userSignin = passport.authenticate('local', { 
    successRedirect: '/profile',
    failureRedirect: '/user/login' 
});

