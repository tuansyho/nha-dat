const express = require('express');

const choThue = require('../mongodb/outChoThue.js');
const muonThue = require('../mongodb/outMuonThue.js');

module.exports.index = async (req, res) => {
	const choThues = await choThue.find();
	const page = parseInt(req.query.page) || 1;
	const perPage = 12;
	const start = (page - 1) * perPage;
	const end = page * perPage;
	let vals = [];
	for(let i = 1; i <= (choThues.length - 1) / perPage + 1; i++){
		vals.push(i);
	}
	const muonThues = await muonThue.find();
	res.render('choThue/choThue',{
		outChoThues: choThues.slice(start, end),
		vals: vals,
		outMuonThues: muonThues
	});
};