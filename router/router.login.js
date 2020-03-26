const express = require('express');
const router = express.Router();
const Email = require('../mongodb/email');

router.get('/', function(req, res){
	res.render('email/login');
})
router.post('/', function(req, res){
	const email = req.body.email;
	const password = req.body.password;
	Email.find().then(function(emails){
		let checkEmail = emails.find((emaill) => { return emaill.email == email}); 
		if(!checkEmail){
			const error = 'Email không tồn tại';
			res.render('email/login', {
				error: error,
				values: req.body
			})
			return;
		}
		if(checkEmail.password != password){
			const error = 'password không đúng';
			res.render('email/login', {
				error: error,
				values: req.body
			})
			return;
		}
		res.redirect('/muaBan/create');
	});
})
module.exports = router;