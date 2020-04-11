const mongoose = require('mongoose');
  
const outMuaSchema = new mongoose.Schema({
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
const outMua = mongoose.model('outMua', outMuaSchema, 'outMua');

module.exports = outMua;
