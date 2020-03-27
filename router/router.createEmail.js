const express = require('express');

const controller = require('../controller/controller.createEmail');
const validate = require('../validate/validate.createEmail');

const router = express.Router();

router.get('/', controller.index);
router.post('/', validate.email, controller.createEmailPost);

module.exports = router;