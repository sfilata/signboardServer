var express = require('express');
var router = express.Router();
let toJSON = require('../utils')
let data = require('../data/modelList.json')

/* GET api listing. */
router.get('/modelList', function(req, res, next) {
  res.json(toJSON(data));
});

module.exports = router;
