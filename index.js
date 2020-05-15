const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');


const muaBan = require('./router/router.muaBan');
const district = require('./router/router.district');
const email = require('./router/router.createEmail');
const login = require('./router/router.login');
const choThue = require('./router/router.choThue');
const user = require('./router/router.user');




const outBan = require('./mongodb/outBan.js');


const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static('public'));

app.set('view engine', 'pug');


app.get('/', (req, res)=>{
	outBan.find().then((outBan) => {
		res.render('index',{
			outBans: outBan.slice(0,8)
		});
	})
})
app.use('/muaBan', muaBan);
app.use('/district', district);
app.use('/createEmail', email);
app.use('/login', login);
app.use('/choThue', choThue);
app.use('/user', user);

// mongoose.connect('mongodb+srv://tuansyho:tuansyho@cluster0-6ftlw.gcp.mongodb.net/test?retryWrites=true&w=majority',
//  { useNewUrlParser: true, useUnifiedTopology: true}, () => {
//  	console.log('connection db');
//  });

mongoose.connect('mongodb://localhost/muaBan', { useNewUrlParser: true, useUnifiedTopology: true});
	
app.listen(port, function(){
	console.log('Example app listening on port' +' '+ port); 
});

