const express = require('express');

const outBan = require('../mongodb/outBan.js');
const outMua = require('../mongodb/outMua.js');
const postBan = require('../mongodb/postBan.js');
const postMua = require('../mongodb/postMua.js');


const Email = require('../mongodb/email.js');
module.exports.index = async (req, res) => {
	const outBans = await outBan.find();
	const page = parseInt(req.query.page) || 1;
	const perPage = 12;
	const start = (page - 1) * perPage;
	const end = page * perPage;
	let vals = [];
	for(let i = 1; i <= (outBans.length - 1) / perPage + 1; i++){
		vals.push(i);
	}
	const outMuas = await outMua.find();
	res.render('mua-ban/index',{
		outBans: outBans.slice(start, end),
		vals: vals,
		outMuas: outMuas
	});
};
module.exports.search = async (req, res) => {
	const q = req.query.q;
	const MuaBans = await outBan.find();
	var findMuaBan = MuaBans.filter(function(MuaBan){
			return MuaBan.information.toLowerCase().indexOf(q.toLowerCase()) != -1 || MuaBan.address.toLowerCase().indexOf(q.toLowerCase()) != -1;
		});
		res.render('mua-ban/search', {
			muaBans: findMuaBan
	});
};
module.exports.id = async (req, res) => {
	const MuaBans = await outBan.find();
	const check = MuaBans.find((muaBan) => {
		return muaBan.id === req.params.user
	});
	res.render('view/muaBanView', {
		muaBans: check
	});
}
module.exports.create = (req, res) => {
	
	res.render('mua-ban/create');
};
module.exports.createMua = (req, res) => {
	
	res.render('mua-ban/createMua');
};
module.exports.createPost = (req,res) => { 
	// req.body.avatar = req.file.path.split('\\').slice(1).join('/');
	if(req.body.breed == "Bán"){
		postBan.insertMany(req.body,() => {
		});
		res.redirect('/');	
	}
	else{
		choThue.insertMany(req.body,() => {
		});
	res.redirect('/');	
	}
};

module.exports.createPostMua = (req,res) => { 
	// req.body.avatar = req.file.path.split('\\').slice(1).join('/');
	if(req.body.breed == "Mua"){
		postMua.insertMany(req.body,() => {
		});
		res.redirect('/');	
	}
	else{
		muonThue.insertMany(req.body,() => {
		});
		res.redirect('/');	
	}
};
