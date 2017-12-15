const mongoose = require('mongoose');

const bandSchema = mongoose.Schema({
  bandName: { type: String, required: true },
  image: { type: String, required: true },
  about: { type: String },
  style: { type: String, required: true },
  members: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
  location: { lat: Number, lng: Number },
  formatted_address: { type: String, required: true },
  memberRequired: { type: String },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
});


module.exports = mongoose.model('Band', bandSchema);
