var passport = require("passport");

var AccountRoute = function(app){
  var redirects = {
      successRedirect: '/',
      failureRedirect: '/',
      failureFlash: false
  };

    app.post('/account/login', passport.authenticate('local', redirects));
};

module.exports = AccountRoute;