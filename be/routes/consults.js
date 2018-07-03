var express = require('express');
var db = require('../models/db');
var router = express.Router();

router
  .get('/', function (req, res) {
    db.consultancies.find({}, function (err, consultancies) {
      if (err) return res.status(400).send(err);

      return res.status(200).send(consultancies);
    });
  })

	.get('/:id', function (req, res) {
		db.consultancies.findOne({_id: req.params.id}, function (err, consulting) {
			if (err) return res.status(400).send(err);
      		if (consulting == null) return res.status(404).send();

			return res.status(200).send(consulting);
  		});
	})

	.post('/', function (req, res) {
		var consulting = new db.consultancies(req.body);
    
		consulting.save(function (err, consulting) {
			if (err) return res.status(400).send(err);

			return res.status(201).send(consulting);
		});
	})

	.put('/main/:id', function (req, res) {
		db.consultancies.update({
			_id: req.params.id
		}, {
				$set: {
					'name': req.body.name,
					'description': req.body.description,
					'objective': req.body.objective,
					'scopes': scopes
				}
			}).exec(function (err, page) {
				if (err) return res.status(400).send(err);
				return res.status(200).send(page);
			})
	})

	// .delete('/:id', function (req, res) {
	// 	db.consultancies.remove({_id: req.params.id}, function (err, consulting) {
	// 		if (err) return res.status(400).send(err);

	// 		return res.status(200).send(consulting);
	// 	});
	// });

module.exports = router;