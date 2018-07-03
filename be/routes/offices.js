var express = require('express');
var db = require('../models/db');
var router = express.Router();


router
  .get('/', function (req, res) {
    db.offices.find({}, function (err, offices) {
      if (err) return res.status(400).send(err);
      return res.status(200).send(offices);
    });
  })
  .get('/:id', function (req, res) {
    // console.log(req.params);
    db.offices.findOne({ _id: req.params.id }, function (err, office) {
      if (err) return res.status(400).send(err);
      if (office == null) return res.status(404).send();
      return res.status(200).send(office);
    });
  })
  .post('/add', function (req, res) {
    console.log(req.body);
    var office = new db.offices(req.body);
    office.save(function (err, office) {
      if (err) { return res.status(400).send(err); }
      return res.status(200).send(office);
    });
  })
  .put('/', function (req, res) {
    console.log(req.body);
    db.offices.update({
      _id: req.body._id
    }, {
        $set: {
          'name': req.body.name,
          'ubicacion': req.body.ubicacion,
          'lat': req.body.lat,
          'lng': req.body.lng,
          'phones': req.body.phones,
        }
      }).exec(function (err, office) {
        if (err) return res.status(400).send(err);
        console.log(office);
        return res.status(200).send(office);
      })
  })
  ;

module.exports = router; 