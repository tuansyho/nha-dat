var express = require('express');
var router = express.Router();
var multer = require('multer');

var MuaBan = require('../mongodb/muaBan.js');
var upload = multer({ dest: './public/uploads/'});


router.get('/', function(req, res){
	MuaBan.find().then(function(muaBans){
		var page = parseInt(req.query.page) || 1;
		var perPage = 12;
		var start = (page - 1) * perPage;
		var end = page * perPage;
		var vals = [];
		for(var i = 1; i <= (muaBans.length - 1) / perPage + 1; i++){
			vals.push(i);
		}
		res.render('mua-ban/index',{
			muaBans: muaBans.slice(start, end),
			vals: vals
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
		res.render('mua-ban/search', {
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
	var errors = [];
	if(req.body.district === 'Chọn Quận'){
		errors.push('Bạn chưa chọn Quận');
	}
	if(!req.body.address)
	{
		errors.push('Bạn chưa điền địa chỉ ');
	}
	if(!req.body.information)
	{
		errors.push('Bạn chưa điền thông tin ');
	}
	if(!req.file)
	{
		errors.push('Bạn chưa chọn ảnh');
	}
	if(errors.length){
		res.render('mua-ban/create',{
			errors: errors
		});
		return;
	}
	req.body.avatar = req.file.path.split('\\').slice(1).join('/');
	MuaBan.insertMany(req.body, function(){
	});
	res.redirect('/muaBan');
});

module.exports = router;