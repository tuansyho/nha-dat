const express = require('express');

const controller = require('../controller/controller.createEmail');

const router = express.Router();

router.get('/', controller.index);
router.post('/', controller.createEmailPost);

module.exports = router;