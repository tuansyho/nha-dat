var mongoose = require('mongoose');
  
var outBanSchema = new mongoose.Schema({
	"tittle": String,
	"district": String,
	"breed": String,
	"kind": String,
	"wards": String,
	"acreage": String,
	"price": String,
	"unit": String
});
var outBan = mongoose.model('outBan', outBanSchema, 'outBan');

module.exports = outBan;
