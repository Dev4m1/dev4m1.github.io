const groutes = require('express').Router();

groutes.get('/github', function(req, res) {

  res.redirect('https://github.com/dev4m1');

});

module.exports = groutes;