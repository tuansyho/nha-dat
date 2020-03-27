module.exports.email = function(req, res, next){
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
	next();
}