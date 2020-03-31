const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

//To use .env file on localserver
require('dotenv').config();

//Sql data 
const db= require("./models"); 

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Authentication middleware here
const session = require("express-session");
const passport = require("./config/passport");

// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "Jamie is the best... but that's not a secret", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
const routes = require("./routes");
app.use(routes);


// Sync databeace and stand up server
db.sequelize.sync({ force: true }).then(function(){
  app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
}); 

