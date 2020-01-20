var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.json('Default Message')
});

router.get('/test', (req, res) => {
  res.json('This is a Test Message')
})

module.exports = router;
