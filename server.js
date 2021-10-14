const express = require("express");
const path = require("path");
const app = express();
const port = 5005;
let request = require("request");


app.use(express.json());

app.get('/test', (req, res) => {


	request('https://randomuser.me/api', (error, response, body) => {
  
	if(!error && response.statusCode === 200) {
		res.send(JSON.stringify(body));
	  };
	});
  });


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
