var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy
var bcrypt = require('bcrypt-nodejs')
var models = require('../db/models/index');
var User = models.User;
var session = require('express-session');

module.exports = function() {
    passport.use(new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true
        },
        function(req, email, password, callback) {
            User.findOne({
                where: {
                    email: email
                }
            }).then(function(user, err) {
                if (err) {
                    return callback(err)
                }
                if (!user) {
                    return callback(null, false, {
                        message: "Incorrect email."
                    })
                }
                if (!bcrypt.compareSync(password, user.password)) {
                    return callback(null, false, { message: 'Incorrect password.' })
                }
                else {
                req.user = {id: user.id};
                return callback(null, user);}
            })
        }
    ))

    passport.serializeUser(function(user, callback) {
        callback(null, user.id);
    })

    passport.deserializeUser(function(id, callback) {
        User.findById(id).then(function(user) {
            callback(null, user)
        })
    })

}
