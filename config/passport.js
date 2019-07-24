const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const db = require('../models');
var routes = require('../routes/index');
var GitHubStrategy = require('passport-github').Strategy;


// telling passport we want to use local strategy, in other words we want to use
// Username and password
// for signing in
passport.use(new LocalStrategy(
    function(usernameField, password, done) {
      db.User.findOne( { where: { usernameField: usernameField } } ).then( function(dbuser){
        // if there is no user with the provided email
        if (!dbuser) {
            return done(null, false, { message: 'Incorrect username.' } );
        }
        // if there is a user with that email but the password is wrong
        else if (!dbuser.validPassword(password)) {
            return done(null, false, { message: 'Incorrect password.' } );
        }

        // if none of the above happens, return user
        return done(null, dbuser);
      });
    }
));

// for when a user signs up
passport.use('local-signup', new LocalStrategy(
    {  passReqToCallback: true }, // allow us to use the entire request coming from our app},
    function(req, username, password, done) {
      db.user.findOne( { where: { username: username } } ).then( function(dbuser){
        // to verify that the email is not in use
        if (dbuser) {
            return done(null, false, { message: 'username is already taken.' } );
        } else  {
            // add user to my database
            db.user.create({
                username: username,
                // email: email , 
                password: password,
                name: req.body.name
            }).then(function (newUser) {
                if (!newUser){
                    return done(null, false)
                }
                if (newUser){
                    return done(null, newUser)
                }
            }).catch(function (err) {
                console.log(err);
                res.json(err);
            })    
        }
      });
    }
));

// github Oauth
passport.use(new GitHubStrategy({
    clientID: '29528129ad5c7e6e8023',
    clientSecret: '0f8e2ca5262c2632c05f3dd73f70c64345d75062',
    callbackURL: "http://127.0.0.1:3000/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ githubId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));

// to authenticate users to a cookie we must serialize the user session
passport.serializeUser(function(user, done) {
    done(null, user);
});
  
// following request need there session to be deserialize 
passport.deserializeUser(function(user, done) {
    done(null, user )
});

// exporting passport for our app to use it
module.exports = passport;