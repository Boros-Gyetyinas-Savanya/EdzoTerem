require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

// routes
app.use('/trainer', require('./routes/trainerRoutes'));
app.use('/user', require('./routes/userRoutes'));

mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URI, (err) => {
  if (err) {
    console.log('Valami nem jó az adatbázissal!');
    return;
  }

  console.log('Sikeres csatlakozás!');

  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
});
