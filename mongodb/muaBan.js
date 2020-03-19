var mongoose = require('mongoose');
  
var muaBanSchema = new mongoose.Schema({
	"address": String,
	"information": String,
	"avatar": String

});
var MuaBan = mongoose.model('MuaBan', muaBanSchema, 'MuaBan');

module.exports = MuaBan;
