const express = require("express");
const logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require("path");
const routes = require('./routes');
//const config = require('config');
require ('dotenv').config();

const app = express();

const PORT = process.env.PORT || 8080;


// Send every request to the React app
// Define any API routes before this runs

app.use(logger('dev'));

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true, createIndexes: true }));

//Heroku Deploy
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://travelynx1:Mytravelynx1@ds029811.mlab.com:29811/heroku_kmkkd2vt', 
//   { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true  });



const db = process.env.mongoURI;
console.log(process.env.mongoURI);

mongoose.connect(db, 
    { 
      useCreateIndex: true, 
      useNewUrlParser: true, 
      useUnifiedTopology: true  
    });

// Routes
app.use(routes);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });
}


app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
