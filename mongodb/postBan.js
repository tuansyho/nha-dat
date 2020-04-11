var mongoose = require('mongoose');
  
var postBanSchema = new mongoose.Schema({
	"tittle": String,
	"district": String,
	"breed": String,
	"kind": String,
	"wards": String,
	"acreage": String,
	"price": String,
	"unit": String,
	"streetCity":String
});
var postBan = mongoose.model('postBan', postBanSchema, 'postBan');

module.exports = postBan;
