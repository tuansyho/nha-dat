const express = require('express');

const MuaBan = require('../mongodb/muaBan.js');

const Email = require('../mongodb/email.js');
module.exports.index = function(req, res){
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
};
module.exports.search = function(req, res){
	var q = req.query.q;
	MuaBan.find().then(function(MuaBans){
		var findMuaBan = MuaBans.filter(function(MuaBan){
			return MuaBan.information.indexOf(q) != -1 || MuaBan.address.indexOf(q) != -1;
		});
		res.render('mua-ban/search', {
			muaBans: findMuaBan
	});
	});
};
module.exports.create = function(req, res){
	
	res.render('mua-ban/create');
};
module.exports.createPost = function(req,res){ 
	req.body.avatar = req.file.path.split('\\').slice(1).join('/');
	MuaBan.insertMany(req.body, function(){
	});
};
