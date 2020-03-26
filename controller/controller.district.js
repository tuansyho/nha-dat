const MuaBan = require('../mongodb/muaBan.js');

module.exports.district1 = function(req, res){
	MuaBan.find().then(function(MuaBans){
		var muaBans = MuaBans.filter(function(MuaBan){
			return MuaBan.district === '1'
		});
		res.render('district',{
			muaBans: muaBans 
		});
	});
};
module.exports.district2 = function(req, res){
	MuaBan.find().then(function(MuaBans){
		var muaBans = MuaBans.filter(function(MuaBan){
			return MuaBan.district === '2'
		});
		res.render('district',{
			muaBans: muaBans 
		});
	});
}
module.exports.district3 = function(req, res){
	MuaBan.find().then(function(MuaBans){
		var muaBans = MuaBans.filter(function(MuaBan){
			return MuaBan.district === '3'
		});
		res.render('district',{
			muaBans: muaBans 
		});
	});
}