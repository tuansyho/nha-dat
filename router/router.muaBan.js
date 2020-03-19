var express = require('express');
var router = express.Router();
var multer = require('multer');

var MuaBan = require('../mongodb/muaBan.js');
var upload = multer({ dest: './public/uploads/'});


router.get('/', function(req, res){
	MuaBan.find().then(function(muaBans){
		res.render('mua-ban/index',{
			muaBans: muaBans
		});
});
});
router.get('/create',function(req, res){
	res.render('mua-ban/create');
});
router.get('/search',function(req, res){
	var q = req.query.q;
	MuaBan.find().then(function(MuaBans){
		var findMuaBan = MuaBans.filter(function(MuaBan){
			return MuaBan.information.indexOf(q) != -1 || MuaBan.address.indexOf(q) != -1;
		});
		res.render('mua-ban/index', {
			muaBans: findMuaBan
	});
	});
});
router.get('/:id',function(req, res){
	MuaBan.find().then(function(MuaBans){
		var MuaBans = MuaBans.find(function(Muaban){
			return req.params.id === Muaban.id;
		});
		res.render('view/muaBanView',{
			muaBans: MuaBans});
	});

});
router.post('/create', upload.single('avatar'), function(req,res){
	req.body.avatar = req.file.path.split('\\').slice(1).join('/');
	MuaBan.insertMany(req.body, function(){
	});
	res.redirect('/muaBan');
});

module.exports = router;