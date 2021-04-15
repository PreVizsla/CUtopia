const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const fs = require('fs');
const path = require('path');
const User = require('../models/User');

const pathToKey = path.join(__dirname, '..', 'id_rsa_pub.pem');

const PUB_KEY = fs.readFileSync(pathToKey, 'utf8');

const options = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(), 
    secretOrKey: PUB_KEY,
    algorithms: ["RS256"]
}

module.exports = (passport) => {
    passport.use(
        new JwtStrategy(options, (jwt_payload, done) => {
            User.findOne({ _id: jwt_payload.sub }, function (err, user) {
                // This flow look familiar?  It is the same as when we implemented
                // the `passport-local` strategy
                if (err) {
                  return done(err, false);
                }
                if (user) {
                  // Since we are here, the JWT is valid and our user is valid, so we are authorized!
                  return done(null, user);
                } else {
                  return done(null, false);
                }
            });
        })
    )
}
