const mongoose = require('mongoose');

const bandSchema = mongoose.Schema({
  bandName: { type: String, required: true },
  image: { type: String, required: true },
  about: { type: String },
  location: { type: String, required: true },
  style: { type: String, required: true },
  // members: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
  members: { type: String },
  memberRequired: { type: String },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
});


bandSchema.methods.belongsTo = function bandBelongsTo(user) {
  if(typeof this.createdBy.id === 'string') return this.createdBy.id === user.id;
  return user.id === this.createdBy.toString();
};

module.exports = mongoose.model('band', bandSchema);
