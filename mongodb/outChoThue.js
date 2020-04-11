var mongoose = require('mongoose');
  
var outChoThueSchema = new mongoose.Schema({
	"tittle": String,
	"district": String,
	"breed": String,
	"kind": String,
	"wards": String,
	"acreage": String,
	"price": String,
	"unit": String
});
var outChoThue = mongoose.model('outChoThue', outChoThueSchema, 'outChoThue');

module.exports = outChoThue;
