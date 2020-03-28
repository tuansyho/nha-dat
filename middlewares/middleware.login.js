var email = require('../mongodb/email');

module.exports.login = (req, res, next) =>{
	if(!req.cookies.emailId){
		res.redirect('/login');
		return;
	}
	email.find().then((emails) => {
		let check = emails.find((emaill) =>{
			return emaill == req.cookies.emailId
		});
		if(!check){
			res.redirect('/login');
			return;		
		}
	});
	next();
}
