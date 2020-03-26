const express = require('express');

const controller = require('../controller/controller.login');
const router = express.Router();


router.get('/', controller.index);
router.post('/', controller.loginPost);
module.exports = router;