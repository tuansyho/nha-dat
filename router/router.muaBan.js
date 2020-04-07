const express = require('express');
const router = express.Router();
const multer = require('multer');

const MuaBan = require('../mongodb/muaBan');

const upload = multer({ dest: '../public/uploads/'});
const controller = require('../controller/controller.muaBan');
const validate = require('../validate/validate.muaBan');
const middleware = require('../middlewares/middleware.login');

router.get('/', controller.index);
router.get('/create', middleware.login, controller.create);
router.get('/search', controller.search);
router.get('/:user', controller.id);
router.post('/create',validate.createPost, controller.createPost);
module.exports = router;