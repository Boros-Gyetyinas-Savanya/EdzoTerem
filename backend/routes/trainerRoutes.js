const express = require('express');
const router = express.Router();
const { postTrainer } = require('../controllers/trainerControllers');

router.post('/', postTrainer);

module.exports = router;
