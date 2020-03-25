var mongoose = require('mongoose');

var emailSchema = new mongoose.Schema({
	"email": String,
	"password": String
});
var Email = mongoose.model('email', emailSchema, 'email');

module.exports = Email;
