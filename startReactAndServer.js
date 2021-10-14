const express = require('express');
const path = require('path');
const app = express();
const email = 'evolutionphotokv@hotmail.com'
let request = require("request");
const nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
	service: 'hotmail',
	auth: {
	  user: email,
	  pass: 'thefuki88'
	}
  });


app.use(express.json()); 
app.use(express.static(path.join(__dirname, 'build')));
app.use('/', express.static(__dirname+'/server/build'))


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.get('/test', (req, res) => {
	request('https://randomuser.me/api', (error, response, body) => {
  
	if(!error && response.statusCode === 200) {
		res.send(JSON.stringify(body));
	  };
	});
  });

app.post('/api/sendEmail', (req, res) => {

	const mailOptions = {
		from: email,
		to: 'nfinforce@gmail.com',
		subject: `Novi email od ${req.body.ime}`,
		text: req.body.poruka,
		replyTo: req.body.email
	};

	transporter.sendMail(mailOptions, function(error, info){
		if (error) {
		  console.log(error);
		} else {
		  console.log('Email sent: ' + info.response);
		}
	  });
	  res.send("Email sent!");
});

app.listen(5005);
