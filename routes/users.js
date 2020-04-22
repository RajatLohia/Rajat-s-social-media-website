const express = require('express');
const router = express.Router();

const usersController= require('../contollers/users_controllers');

router.get('/profile',usersController.profile);

module.exports= router;