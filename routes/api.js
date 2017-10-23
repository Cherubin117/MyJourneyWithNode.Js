const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja');

// Get a list of ninjas from the database
router.get('/ninjas', function(req,res){
  res.send({type:'GET'});
});

// Add a new ninja to the database
router.post('/ninjas', function(req,res){

  // A new Ninja object
  Ninja.create(req.body).then(function(ninja){
    res.send(ninja);
  });

});

// Update a ninja to the database
router.put('/ninjas/:id', function(req,res){
  res.send({type:'PUT'});
});

// Deleting a particular ninja from the database
router.delete('/ninjas/:id', function(req,res){
  res.send({type:'DELETE'});
});

module.exports = router;
