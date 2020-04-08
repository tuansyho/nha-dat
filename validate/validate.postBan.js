module.exports.createPost = (req, res, next) => {
	var errors = [];
	if(!req.body.tittle & !req.body.tittle1)
	{
		errors.push('| tiêu đè  |');
	}
	if(!req.body.wards)
	{
		errors.push('| Xã/Phường |');
	}
	if(!req.body.streetCity)
	{
		errors.push('| Đường phố |');
	}
	if(!req.body.acreage)
	{
		errors.push('| Diện tích |');
	}
	if(!req.body.price)
	{
		errors.push('| Giá |');
	}
	if(!req.body.unit)
	{
		errors.push('| Đơn vị');
	}
	if(errors.length){
		res.render('mua-ban/create',{
			errors: errors,
			value: req.body
		});
		return;
	}
	next();
}