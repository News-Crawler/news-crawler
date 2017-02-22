const passport = require('passport');
const mongoose = require('mongoose');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local').Strategy;
const jwt = require('jsonwebtoken');
const User = mongoose.model('User');

const secretOrKey = process.env.SECRET || 'neverCheckInTheSecret';

const passAuth = strategy => passport.authenticate(strategy, { session: false });

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeader(),
  secretOrKey,
};

const auth = () => {
  passport.use(new JwtStrategy(jwtOptions, function(payload, done) {
    User.findOne({ 'id': payload.id }, function(err, user) {
      if (err) { return done(err, false); }
      if (user) { return done(null, user); }
      return done(null, false);
    });
  }));
  passport.use(new LocalStrategy(User.authenticate()));
  return {
    initialize: () => passport.initialize(),
    authenticate: () => passAuth('jwt'),
    generateToken: userInfo => jwt.sign(userInfo, secretOrKey, { expiresIn: '1d' }),
    checkPassword: () => passAuth('local'),
  };
}

module.exports = auth;
