const mongoose = require('mongoose');

const bandSchema = mongoose.Schema({
  bandName: { type: String, required: true },
  image: { type: String, required: true },
  about: { type: String },
  location: { type: String, required: true },
  style: { type: Array, required: true },
  members: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('band', bandSchema);
