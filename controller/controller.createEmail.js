const express = require('express');

const Email = require('../mongodb/email.js');

module.exports.index = (req, res) => {
	res.render('email/createEmail');
};
module.exports.createEmailPost = (req, res) => {
	Email.insertMany(req.body, () => {
		res.render('email/login');
	});
};