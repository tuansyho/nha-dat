var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');



var muaBan = require('./router/router.muaBan');

var MuaBan = require('./mongodb/muaBan.js');

var port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.set('view engine', 'pug');


app.get('/', function(req, res){
	MuaBan.find().then(function(muaBans){
		res.render('index',{
			muaBans: muaBans
		})
	})
})
app.get('muaBan/search',function(req, res){
	var q = req.query.q;
	MuaBan.find().then(function(MuaBans){
		var findMuaBan = MuaBans.filter(function(MuaBan){
			return MuaBan.information.indexOf(q) != -1 || MuaBan.address.indexOf(q) != -1;
		});
		res.render('mua-ban/index', {
			muaBans: findMuaBan
	});
	});

});
app.use('/muaBan', muaBan);
mongoose.connect('mongodb://localhost/muaBan', {useNewUrlParser: true});

app.listen(port, function(){
	console.log('Example app listening on port' +' '+ port); 
})

