const mongoose = require('mongoose');

const requestSchema = mongoose.Schema({
  message: { type: String },
  sender: { type: mongoose.Schema.ObjectId, ref: 'User' },
  reciever: { type: mongoose.Schema.ObjectId, ref: 'User' },
  band: { type: mongoose.Schema.ObjectId, ref: 'Band'},
  status: { type: String, default: 'pending' }
});

requestSchema.pre('save', function(next) {

  if(this.status !== 'accepted') return next();

  this.model('Band')
    .findById(this.band)
    .exec()
    .then(band => {
      band.members.push(this.sender);
      return band.save();
    })
    .then(band => next(null, band))
    .catch(next);
});

module.exports = mongoose.model('Request', requestSchema);
