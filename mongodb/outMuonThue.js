var mongoose = require('mongoose');
  
var outMuonThueSchema = new mongoose.Schema({
	"tittle": String,
	"district": String,
	"breed": String,
	"kind": String,
	"wards": String,
	"acreage": String,
	"price": String,
	"unit": String
});
var outMuonThue = mongoose.model('outMuonThue', outMuonThueSchema, 'outMuonThue');

module.exports = outMuonThue;
