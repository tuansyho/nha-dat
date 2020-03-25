var express = require('express');
var Email = require('../mongodb/email.js');

var router = express.Router();

router.get('/',function(req, res){
	res.render('email/createEmail');
});
router.post('/',function(req, res){
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
			errors: errors
		});
		return;
	}
	Email.insertMany(req.body, function(){
	});
});

module.exports = router;