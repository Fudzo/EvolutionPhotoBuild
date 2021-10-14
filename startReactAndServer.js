const express = require('express');
const path = require('path');
const app = express();
const request = require("request");
const nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
	service: 'hotmail',
	auth: {
	  user: 'evolutionphotokv@hotmail.com',
	  pass: 'thefuki88'
	}
  });

let mailOptions = {
	from: 'Nikola Furundzic',
	to: 'nfinforce@gmail.com',
	subject: 'Sending Email using Node.js',
	text: 'That was easy!'
};

app.use(express.static(path.join(__dirname, 'build')));
app.use('/', express.static(__dirname+'/server/build'));

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

app.post('/sendemail', (req, res) => {
	transporter.sendMail(mailOptions, function(error, info){
		if (error) {
		  console.log(error);
		} else {
		  console.log('Email sent: ' + info.response);
		}
	  });
	  res.send("Email sent!");
});

app.listen(3000);
