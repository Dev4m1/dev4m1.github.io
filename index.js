//Requiring the packages needed
const express = require('express');
const fs = require('fs');
const router = require('./src/routes/router.js');
const groutes = require('./src/routes/github.js');
const path = require('path');
const did = require('date.id');

//Making the app
const app = express();

//Setting the public folder
app.use(express.static(__dirname + '/src/public/'));

//Using the router
app.use(groutes);

app.use(router);

app.get('/github/:repo', function(req, res) {

  res.redirect('https://github.com/dev4m1/' + req.param('repo'));

});

app.get('/login', function(req, res) {

	res.sendFile(path.join(__dirname + '/src/public/login.html'));

});

//Making the event which will get trigger when the server starts
app.listen(process.env.PORT || 3000, function() {

  console.log('Server is running');

});
