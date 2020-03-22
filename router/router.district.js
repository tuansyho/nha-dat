var express = require('express');

var router = express.Router();

var MuaBan = require('../mongodb/muaBan.js');

router.get('/1',function(req, res){
	MuaBan.find().then(function(MuaBans){
		var muaBans = MuaBans.filter(function(MuaBan){
			return MuaBan.district === '1'
		});
		res.render('district',{
			muaBans: muaBans 
		});
	});
});
router.get('/2',function(req, res){
	MuaBan.find().then(function(MuaBans){
		var muaBans = MuaBans.filter(function(MuaBan){
			return MuaBan.district === '2'
		});
		res.render('district',{
			muaBans: muaBans 
		});
	});
});
router.get('/3',function(req, res){
	MuaBan.find().then(function(MuaBans){
		var muaBans = MuaBans.filter(function(MuaBan){
			return MuaBan.district === '3'
		});
		res.render('district',{
			muaBans: muaBans 
		});
	});
});
module.exports = router;