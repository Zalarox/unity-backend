var express = require('express'),
 r = require('rethinkdb'),
 router = express.Router(),
 bodyParser = require('body-parser'),
 connection = require('db')


router.use(bodyParser.urlencoded({ extended: true }));


router.post('new/', function (req, res) {
	r.table('').insert({
		name: req.body.name,
		score: req.body.score
	})
	.run(connection, function(err, result) {
	    if (err)
	    	res.send(500).send("Internal server error occurred.");

	    res.send(200).send(result);
		console.log(JSON.stringify(result, null, 2));
	});
});

router.get('entry/:id', function (req, res) {

});

module.exports = router;
