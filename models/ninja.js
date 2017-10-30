const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Section 1 - GeoJson (Geolocation)

const GeoSchema = new Schema({
  type: {
    type: String,
    default: "Point"
  },
  coordinates: {
    // Index - 2D Sphere GeoLocation Parameter
    type: [Number],
    index: "2dsphere"
  }
});

// Section 2 - Schema And Model

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
  },
  geometry: GeoSchema
  // Add in Geo Location

});

// Creating a ninja table in the database
const Ninja = mongoose.model('ninja', NinjaSchema);

module.exports = Ninja;
