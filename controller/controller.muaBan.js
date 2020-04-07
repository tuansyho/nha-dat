const express = require('express');

const MuaBan = require('../mongodb/muaBan.js');
const postBan = require('../mongodb/postBan.js');
const postMua = require('../mongodb/postMua.js');


const Email = require('../mongodb/email.js');
module.exports.index = async (req, res) => {
	const muaBans = await MuaBan.find();
	const page = parseInt(req.query.page) || 1;
	const perPage = 12;
	const start = (page - 1) * perPage;
	const end = page * perPage;
	let vals = [];
	for(let i = 1; i <= (muaBans.length - 1) / perPage + 1; i++){
		vals.push(i);
	}
	res.render('mua-ban/index',{
		muaBans: muaBans.slice(start, end),
		vals: vals
	});
};
module.exports.search = async (req, res) => {
	const q = req.query.q;
	const MuaBans = await MuaBan.find();
	var findMuaBan = MuaBans.filter(function(MuaBan){
			return MuaBan.information.toLowerCase().indexOf(q.toLowerCase()) != -1 || MuaBan.address.toLowerCase().indexOf(q.toLowerCase()) != -1;
		});
		res.render('mua-ban/search', {
			muaBans: findMuaBan
	});
};
module.exports.id = async (req, res) => {
	const MuaBans = await MuaBan.find();
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
module.exports.createPost = (req,res) => { 
	// req.body.avatar = req.file.path.split('\\').slice(1).join('/');
	if(!req.body.tittle1){
		postBan.insertMany(req.body,() => {
		});
		res.redirect('/');	
	}
	else{
		postMua.insertMany(req.body,() => {
		});
		res.redirect('/');	
	}
};
