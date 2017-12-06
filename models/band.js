const mongoose = require('mongoose');

const bandSchema = mongoose.Schema({
  name: { type: String, required: true },//username
  image: { type: String, required: true },
  description: { type: String, required: true},
  members: { type: {} },//name:intrument required: true
  //search by the parameters below
  location: { type: String, required: true },
  style: { type: Array, required: true },
  type: { type: String }//band or musician
});

module.exports = mongoose.model('band', bandSchema);
