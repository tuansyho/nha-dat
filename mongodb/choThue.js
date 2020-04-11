var mongoose = require('mongoose');
  
var choThueSchema = new mongoose.Schema({
	"tittle": String,
	"district": String,
	"breed": String,
	"kind": String,
	"wards": String,
	"acreage": String,
	"price": String,
	"unit": String
});
var choThue = mongoose.model('choThue', choThueSchema, 'choThue');

module.exports = choThue;
