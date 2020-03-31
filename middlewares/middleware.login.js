var Email = require('../mongodb/email');

module.exports.login = async (req, res, next) =>{
	if(!req.cookies.emailId){
		res.redirect('/login');
		return;
	}
	const emails = await Email.find();
	const check = emails.find((email)=>{
		return email.id === req.cookies.emailId
	});
	if(!check){
		res.redirect('/login');
		return;
	}
	next();
}
