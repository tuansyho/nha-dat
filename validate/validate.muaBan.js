module.exports.createPost = (req, res, next) => {
	var errors = [];
	if(req.body.district === 'Chọn Quận'){
		errors.push('Bạn chưa chọn Quận');
	}
	if(!req.body.address)
	{
		errors.push('Bạn chưa điền địa chỉ ');
	}
	if(!req.body.information)
	{
		errors.push('Bạn chưa điền thông tin ');
	}
	if(!req.file)
	{
		errors.push('Bạn chưa chọn ảnh');
	}
	if(errors.length){
		res.render('mua-ban/create',{
			errors: errors
		});
		return;
	}
	next();
}