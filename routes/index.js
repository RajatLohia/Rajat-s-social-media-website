const express = require('express');

const router = express.Router();
const homeController= require('../contollers/home_controller');

router.get('/',homeController.home);

module.exports = router;
