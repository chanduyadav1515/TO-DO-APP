const express = require('express');

const router = express.Router();

const controller = require('../controllers/home')
// router for home page
router.get('/',controller.home);
// router for details 
router.post('/details' , controller.details);
// router for delete 
router.get('/delete-contact',controller.delete);
module.exports = router;