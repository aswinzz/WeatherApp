var express = require('express');
var router = express.Router();
var weather = require('weather-js');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
	var city = req.param('city');
	var degree = req.param('degree');
	weather.find({search: city, degreeType: degree}, function(err, result) {
  if(err) console.log(err);
  res.render('result', { result:result,city: city,degree:degree });
  console.log(result);
});
  
});

module.exports = router;
