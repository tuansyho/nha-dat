var mongoose = require('mongoose');
  
var postMuaSchema = new mongoose.Schema({
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
var postMua = mongoose.model('postMua', postMuaSchema, 'postMua');

module.exports = postMua;
