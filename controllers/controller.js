var express = require('express'),
 r = require('rethinkdb'),
 router = express.Router(),
 bodyParser = require('body-parser'),
 connection = null,
 User = require('./../models/User');

r.connect({ host: 'localhost', port: 28015 }, function(err, conn) {
  if(err) throw err;
  conn.use('DataStore');
  connection = conn;
});

router.use(bodyParser.urlencoded({ extended: true }));


router.post('/new', function (req, res) {
	var user = new User(req.body);
	user.save().then(function(result) {
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
