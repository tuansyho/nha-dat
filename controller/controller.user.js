const express = require('express');

const Email = require('../mongodb/email.js');

module.exports.index = async(req, res) => {
	const emails = await Email.find();
	const emaill = emails.find( email => {
		return email.id == req.cookies.emailId;
	});
	res.render('users/user',{
		email: emaill
	});
}