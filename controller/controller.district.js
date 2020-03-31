const MuaBan = require('../mongodb/muaBan.js');

module.exports.district1 = async (req, res) => {
	const MuaBans = await MuaBan.find();
	const muaBans = MuaBans.filter(function(MuaBan){
			return MuaBan.district === '1'
		});
		res.render('district',{
			muaBans: muaBans 
		});
};
module.exports.district2 = async (req, res) => {
	const MuaBans = await MuaBan.find();
	const muaBans = MuaBans.filter(function(MuaBan){
			return MuaBan.district === '2'
		});
		res.render('district',{
			muaBans: muaBans 
		});
};
module.exports.district3 = async (req, res) => {
	const MuaBans = await MuaBan.find();
	const muaBans = MuaBans.filter(function(MuaBan){
			return MuaBan.district === '3'
		});
		res.render('district',{
			muaBans: muaBans 
		});
};