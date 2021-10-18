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

app.post('/api/captcha', (req, res) => {

	if(req.body.captcha === undefined || req.body.captcha === '' || req.body.captcha === null) {
		return res.json({"success" : false, "message": "Please select captcha."})
	};

	//return res.json({"WORKS": "NOOOOOOOOOOOOOOOO"});
	
// Secret KEY
    const sKey = '6Lde484cAAAAADfQX3hbk2JVHRD3wqfR157eSqCU';
// Verify URL
	const verifyURL = `https://google.com/recaptcha/api/siteverify?secret=6Lde484cAAAAADfQX3hbk2JVHRD3wqfR157eSqCU&response=${req.body.captcha}`;
// Make request
	request(verifyURL, (err, res, body) => {
		body = JSON.parse(body);
// If not successful
		if(body.success !== undefined && !body.success) {
			console.log('FAILEEED!!');
			return res.json({"success": false, "message": "Failed captcha verification."})
		};
// If successful
			console.log('success!!');
		    return res.json({"success": true, "message": "Captcha verification succesful."})
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

app.listen(3000);
