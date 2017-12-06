const mongoose = require('mongoose');

const bandSchema = mongoose.Schema({
  bandName: { type: String, required: true },
  image: { type: String, required: true },
  location: { type: String, required: true },
  style: { type: String, required: true },
  description: { type: String, required: true},
  members: { type: {}, required: true }//name:intrument
});

module.exports = mongoose.model('band', bandSchema);
