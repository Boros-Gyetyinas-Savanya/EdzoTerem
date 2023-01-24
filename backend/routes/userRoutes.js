const express = require('express');
const router = express.Router();
const { postUser, getUser } = require('../controllers/userControllers');

router.get('/', getUser);
router.post('/', postUser);

module.exports = router;
