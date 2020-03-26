const express = require('express');

const controller = require('../controller/controller.district');

const router = express.Router();

router.get('/1', controller.district1);
router.get('/2', controller.district2);
router.get('/3', controller.district3);

module.exports = router;