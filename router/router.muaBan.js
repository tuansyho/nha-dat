const express = require('express');
const router = express.Router();
const multer = require('multer');


const upload = multer({ dest: '../public/uploads/'});
const controller = require('../controller/controller.muaBan');
const validate = require('../validate/validate.postBan');
const validateMua = require('../validate/validate.postMua');
const middleware = require('../middlewares/middleware.login');

router.get('/', controller.index);
router.get('/create', middleware.login, controller.create);
router.get('/createMua', middleware.login, controller.createMua);
router.get('/search', controller.search);
router.get('/:user', controller.id);
router.post('/create',validate.createPost, controller.createPost);
router.post('/createMua',validateMua.createPostMua, controller.createPostMua);
module.exports = router;