var express = require('express');
var router = express.Router();
const fs = require('fs');
const json_data = require('../assets/data/assets.json');


/* GET json records listing. */
router.get('/', function(req, res, next) {
  res.send(json_data);
});

module.exports = router;
