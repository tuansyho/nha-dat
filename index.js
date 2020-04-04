const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');


const muaBan = require('./router/router.muaBan');
const district = require('./router/router.district');
const email = require('./router/router.createEmail');
const login = require('./router/router.login');

const MuaBan = require('./mongodb/muaBan.js');

const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static('public'));

app.set('view engine', 'pug');


app.get('/', (req, res)=>{
	MuaBan.find().then((muaBans) => {
		res.render('index',{
			muaBans: muaBans.slice(0,8)
		});
	})
})
app.use('/muaBan', muaBan);
app.use('/district', district);
app.use('/createEmail', email);
app.use('/login', login);
mongoose.connect('mongodb://localhost/muaBan', {useNewUrlParser: true});

app.listen(port, function(){
	console.log('Example app listening on port' +' '+ port); 
});

