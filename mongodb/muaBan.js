var mongoose = require('mongoose');
  
var muaBanSchema = new mongoose.Schema({
	"tittle": String,
	"district": String,
	"breed": String,
	"kind": String,
	"wards": String,
	"acreage": String,
	"price": String,
	"unit": String
});
var MuaBan = mongoose.model('MuaBan', muaBanSchema, 'MuaBan');

module.exports = MuaBan;
