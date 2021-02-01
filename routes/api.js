var express = require('express');
let path = require('path');
var router = express.Router();
const toJSON = require('../utils')
const MongoClient = require('mongodb').MongoClient;
var fs = require('fs');

/** For Local Debugging */
var userData = JSON.parse(fs.readFileSync('config.json'));

/* GET api listing. */
router.get('/modelList/:name', function(req, res, next) {
  const { user, password, ip, port } = userData;
  MongoClient.connect(`mongodb://${user}:${password}@${ip}:${port}/liveDB?authSource=user-data`, function (err, client) {
    if (err) throw err

    var db = client.db('liveDB')

    db.collection('modelList').find({name: req.params.name}).toArray((err, result) => {
      if (err) throw err

      console.log(result)
      res.json(toJSON(result));
    })
  })
});

router.get('/model/:fileName', function(req, res, next) {
  
  const option = {
    root: path.join(__dirname, '../public/images/'),
    dotfiles: 'allow',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  };
  console.log(option)

  const fileName = req.params.fileName;
  res.sendFile(fileName, option, function (err) {
    if (err) {
      next(err)
    } else {
      console.log('Sent:', fileName)
    }
  })
});

module.exports = router;
