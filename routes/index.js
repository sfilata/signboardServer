var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

/* GET home page. */
router.get('/', function(req, res, next) {
  mongoose.connect('mongodb://139.9.172.252:27017/liveDB');

  const conn = mongoose.connection;
  conn.on('connected', (err) => {
    if (err) throw err
    console.log('The connection is successfully established');
  })
  // res.render('index', { title: 'Express' });
});

module.exports = router;
