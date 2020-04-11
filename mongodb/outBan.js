const mongoose = require('mongoose');
  
const outBanSchema = new mongoose.Schema({
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
const outBan = mongoose.model('outBan', outBanSchema, 'outBan');

module.exports = outBan;
