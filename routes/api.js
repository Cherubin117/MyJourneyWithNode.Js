const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja');

// Get a list of ninjas from the database
router.get('/ninjas', function(req,res,next){

  res.send({type:'GET'});
});

// Add a new ninja to the database
router.post('/ninjas', function(req,res,next){

    // A new Ninja object
  Ninja.create(req.body).then(function(ninja){
    res.send(ninja);
  }).catch(next);

});

// Update a ninja to the database
router.put('/ninjas/:id', function(req,res,next){

Ninja.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){

  Ninja.findOne({_id: req.params.id}).then(function(ninja){
  res.send(ninja);
  });

});
});

// Deleting a particular ninja from the database
router.delete('/ninjas/:id', function(req,res,next){
  // Removing data from database using element's id
  Ninja.findByIdAndRemove({_id: req.params.id}).then(function(ninja){
    res.send(ninja);
  });
});

module.exports = router;
