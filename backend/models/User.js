const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    nev: {
      type: String,
    },
    edzo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'trainer',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('user', userSchema);
