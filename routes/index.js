const express = require('express');

const router = express.Router();

const controller = require('../controllers/home')
router.get('/',controller.home);
router.post('/details' , controller.details);

module.exports = router;