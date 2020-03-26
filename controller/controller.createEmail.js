const express = require('express');

const Email = require('../mongodb/email.js');

module.exports.index = function(req, res){
	res.render('email/createEmail');
};
module.exports.createEmailPost = function(req, res){
	var errors = [];
	if(!req.body.email)
	{
		errors.push('Bạn cần nhập email');
	}
	if(!req.body.password)
	{
		errors.push('Bạn cần nhập password');
	}
	if(req.body.password !== req.body.passwordAgain)
	{
		errors.push('Mật khẩu nhập lại của bạn không khớp');
	}
	if(errors.length)
	{
		res.render('email/createEmail',{
			errors: errors,
			values: req.body
		});
		return;
	}
	Email.insertMany(req.body, function(){
	});
};