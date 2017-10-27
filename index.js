const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//Set up an express up
const app = express();

// Connect to Mongo Database
mongoose.connect('mongodb://localhost/ninjago', { useMongoClient: true });
mongoose.Promise = global.Promise;

// Body-parser - Request Data Access
app.use(bodyParser.json());

// Initialize routes
app.use('/api',require('./routes/api'));

// Error Handling

app.use(function(err,req,res,next){
  //console.log(err);
  res.status(422).send({error : err.message});
});

//Listening for request

app.listen(process.env.port || 4000, function(){

  console.log("Now listening for requests ");

});
