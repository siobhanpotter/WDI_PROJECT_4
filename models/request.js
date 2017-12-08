const mongoose = require('mongoose');

const requestSchema = mongoose.Schema({
  message: { type: String },
  sender_id: { type: mongoose.Schema.ObjectId, ref: 'User' },
  reciever_id: { type: String, required: true },//??
  status: { type: Boolean },//?? could it be set to false -if accepted changed to true?
  band: { type: mongoose.Schema.ObjectId, ref: 'Band'}//??
});

module.exports = mongoose.model('request', requestSchema);
