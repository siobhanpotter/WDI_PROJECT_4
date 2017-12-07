const mongoose = require('mongoose');

const bandSchema = mongoose.Schema({
  username: { type: String, required: true },//username
  image: { type: String, required: true },
  about: { type: String },
  // members: { type: {} },//name:intrument required: true
  //search by the parameters below
  location: { type: String, required: true },
  style: { type: Array, required: true }
});

module.exports = mongoose.model('band', bandSchema);
