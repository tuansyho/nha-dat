const express = require('express');

const Email = require('../mongodb/email.js');

module.exports.index = function(req, res){
	res.render('email/createEmail');
};
module.exports.createEmailPost = function(req, res){
	Email.insertMany(req.body, function(){
	});
};