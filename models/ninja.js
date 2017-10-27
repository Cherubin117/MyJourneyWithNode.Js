const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create ninja schema and model

const NinjaSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name field is required.']
  },
  rank: {
    type: String
  },
  available: {
    type: Boolean,
    default: false
  }
  // Add in Geo Location

});

// Creating a ninja table in the database
const Ninja = mongoose.model('ninja', NinjaSchema);

module.exports = Ninja;
