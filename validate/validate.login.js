const Email = require('../mongodb/email');

module.exports.login = async (req, res) => {
	const email = req.body.email;
	const password = req.body.password;
	const emails = await Email.find();
	const checkEmail = emails.find((emaill) => { return emaill.email === email}); 
		if(!checkEmail){
			const error = 'Email không tồn tại';
			res.render('email/login', {
				error: error,
				values: req.body
			})
			return;
		}
		if(checkEmail.password !== password){
			const error = 'password không đúng';
			res.render('email/login', {
				error: error,
				values: req.body
			})
			return;
		}
		res.cookie('emailId', checkEmail.id);
		res.redirect('/muaBan/create');
};