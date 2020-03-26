const express = require('express');
const router = express.Router();
const multer = require('multer');

const upload = multer({ dest: '../public/uploads/'});
const controller = require('../controller/controller.muaBan');

router.get('/', controller.index);
router.get('/create',function(req, res){
	res.render('mua-ban/create');
});
router.get('/search', controller.search);
router.get('/:id', controller.id);
router.post('/create', upload.single('avatar'), controller.createPost);
module.exports = router;