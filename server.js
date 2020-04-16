const express = require("express");
const logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require("path");
const routes = require('./routes');
const config = require('config');

const app = express();
app.use(logger('dev'));

const PORT = process.env.PORT || 8080;

const db = config.get('mongoURI');

mongoose.connect(db, 
    { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true  });
    
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, 'client','build','index.html'));
  });
}

// Send every request to the React app
// Define any API routes before this runs

app.use(logger('dev'));

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true, createIndexes: true }));



// Routes
app.use('/', routes);



app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
