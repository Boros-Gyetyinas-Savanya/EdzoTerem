const Trainer = require('../models/Trainer');

exports.postTrainer = async (req, res) => {
  const adatok = req.body;
  let tomb = adatok.idopont.split(',');
  const newTrainer = new Trainer({ nev: adatok.nev, idopont: tomb });
  await newTrainer.save();
  res.json({ msg: 'Edzők feltöltése!' });
};
