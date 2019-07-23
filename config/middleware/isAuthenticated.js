// middleware for restricting route access
module.exports = (req, res, next) => {
    // if the user is logged in, continue to the restricted route
    if(req.user){
        return next();
    } 

    return res.redirect('/user/login');
};