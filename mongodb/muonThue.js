var mongoose = require('mongoose');
  
var muonThueSchema = new mongoose.Schema({
	"tittle": String,
	"district": String,
	"breed": String,
	"kind": String,
	"wards": String,
	"acreage": String,
	"price": String,
	"unit": String
});
var muonThue = mongoose.model('muonThue', muonThueSchema, 'muonThue');

module.exports = muonThue;
