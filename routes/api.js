var express = require('express');
var router = express.Router();
const toJSON = require('../utils')
const data = require('../data/modelList.json')
const MongoClient = require('mongodb').MongoClient;

/* GET api listing. */
router.get('/modelList', function(req, res, next) {
  MongoClient.connect('mongodb://neil:13579@139.9.172.252:27017/liveDB?authSource=user-data', function (err, client) {
    if (err) throw err

    var db = client.db('liveDB')

    db.collection('modelList').find().toArray((err, result) => {
      if (err) throw err

      console.log(result)
      res.json(toJSON(result));
    })
  })
});

module.exports = router;
