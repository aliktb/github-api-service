const express = require('express');
const controllers=require('./controllers');

const router = express.Router();

router.get('/user', controllers.getUser)

module.exports = router;
