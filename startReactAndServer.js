const express = require('express');
const path = require('path');
const app = express();
let request = require("request");


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

app.listen(3000);