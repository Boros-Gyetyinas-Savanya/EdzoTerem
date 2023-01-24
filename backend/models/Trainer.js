const mongoose = require('mongoose');

const trainerSchema = new mongoose.Schema(
  {
    nev: {
      type: String,
    },
    idopont: {
      type: Array,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('trainer', trainerSchema);
