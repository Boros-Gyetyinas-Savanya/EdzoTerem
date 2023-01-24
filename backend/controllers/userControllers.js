const User = require('../models/User');
const Trainer = require('../models/Trainer');

exports.getUser = async (req, res) => {
  try {
    const spori = await User.findOne({ nev: 'spori' });
    console.log(spori.edzo);
    const edzo = await Trainer.findById(spori.edzo);
    console.log(edzo);
    res.json({ spori: spori.nev, edzo: edzo.nev, idopont: edzo.idopont });
  } catch (error) {
    res.json({ msg: error.message });
  }
};

exports.postUser = async (req, res) => {
  const adatok = req.body;
  try {
    const newUser = new User(adatok);
    await newUser.save();
    res.json({ msg: 'Sportolnivágyók feltöltése!' });
  } catch (error) {
    res.json({ msg: error.message });
  }
};
