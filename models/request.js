const mongoose = require('mongoose');

const requestSchema = mongoose.Schema({
  message: { type: String },
  sender: { type: mongoose.Schema.ObjectId, ref: 'User' },
  reciever: { type: mongoose.Schema.ObjectId, ref: 'User' },
  band: { type: mongoose.Schema.ObjectId, ref: 'Band'},
  status: { type: String, default: 'pending' }
});

module.exports = mongoose.model('Request', requestSchema);
