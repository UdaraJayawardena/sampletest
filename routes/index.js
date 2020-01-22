var express = require('express');
var router = express.Router();
var axios = require('axios');

router.get('/', function (req, res, next) {
  axios.get('https://jsonplaceholder.typicode.com/posts').then((ress) => {
    console.log(ress.data)
  })
});

router.get('/test', (req, res) => {
  res.json('This is a Test Message')
})

module.exports = router;
