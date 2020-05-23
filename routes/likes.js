const express = require('express');
 
const router = express.Router();
const likesController= require('../contollers/likes_controller');

router.post('/toggle', likesController.toggleLike);

module.exports= router;