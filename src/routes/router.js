//Requiring all the dependencies
const fs = require('fs');
const path = require('path');

//Making the router form express
const router = require('express').Router();

//This will redirect to my twitter page
router.get('/twitter', function(req, res) {

  res.redirect('https://twitter.com/dev4m1');

});

//Exporting the router
module.exports = router;