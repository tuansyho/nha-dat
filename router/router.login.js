const express = require('express');

const controller = require('../controller/controller.login');
const validate = require('../validate/validate.login');
const router = express.Router();


router.get('/', controller.index);
router.post('/', validate.login);
module.exports = router;