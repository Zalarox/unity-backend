var express = require('express'),
 r = require('rethinkdb'),
 router = express.Router(),
 bodyParser = require('body-parser'),
 jwt = require('jsonwebtoken'),
 connection = null,
 config = require('./../config'),
 User = require('./../models/User'),
 ShapeTrackerData = require('./../models/ShapeTrackerData'),
 ColourData = require('./../models/ColourData'),
 ClothesData = require('./../models/ClothesData');

r.connect({ host: 'localhost', port: 28015 }, function(err, conn) {
  if(err) throw err;
  conn.use('DataStore');
  connection = conn;
});

router.use(bodyParser.urlencoded({ extended: true }));


// Authentication service 
router.post('/gettoken', function(req, res) {
	if(req.body.name === "Siddhant" && req.body.password === "password123") {

		var payload = { name: req.body.name, password: req.body.password };

		var token = jwt.sign(payload, config.secret, { 
				expiresIn: '24h'
			});

		res.send(token);
	}

	res.json({
		success: false,
		token: null
	});
});

// Middleware
// router.use(function(req, res, next) {

// 	var token = req.body.token || req.query.token || req.headers['x-access-token'];

// 	if (token) {
// 		jwt.verify(token, config.secret, function(err, decoded) {      
// 		  if (err) {
// 		    return res.json({ success: false, message: 'Failed to authenticate token.' });    
// 		  } else {
// 		    req.decoded = decoded;    
// 		    next();
// 		  }
// 		});

// 	} 
// 	else {
// 		return res.status(403).send({ 
// 		    success: false, 
// 		    message: 'No token provided.' 
// 		});
// 	}
// });

router.post('/newclothingdata', function (req, res) {
	var clothes = new ClothesData(req.body);
	clothes.save().then(function(result) {
		res.status(200).send(JSON.stringify(result));
	})
	.error(function(error) {
		res.status(500).send({error: error.message});
	});
});

router.post('/colourcombination', function (req, res) {
	var colours = new ColourData(req.body);
	colours.save().then(function(result) {
		res.status(200).send(JSON.stringify(result));
	})
	.error(function(error) {
		res.status(500).send({error: error.message});
	});
});

router.get('/colourcombination/:name', function(req, res) {
	ColourData.filter({name: req.params.name}).run().then(function(result) {
		console.log("result is " + JSON.stringify(result));
		res.status(200).send(JSON.stringify(result));
	})
	.error(function(error) {
		res.status(500).send({error: error.message});
	});
});

router.post('/newshapedata', function (req, res) {
	var shape = new ShapeTrackerData(req.body);
	shape.save().then(function(result) {
		res.status(200).send(JSON.stringify(result));
	})
	.error(function(error) {
		res.status(500).send({error: error.message});
	});
});

router.post('/newbuilderdata', function (req, res) {
	var builder = new BuilderData(req.body);
	builder.save().then(function(result) {
		res.status(200).send(JSON.stringify(result));
	})
	.error(function(error) {
		res.status(500).send({error: error.message});
	});
});

router.get('/entry/:id', function (req, res) {

});

router.get('/entries', function(req, res) {
	User.run().then(function(result) {
        res.send(JSON.stringify(result));
	}).error(function(error) {
		res.status(500).send({error: error.message});
	});
});

module.exports = router;
