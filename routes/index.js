var express = require('express');
var router = express.Router();
var axios = require('axios');

router.get('/', function (req, res, next) {
  axios.get('https://jsonplaceholder.typicode.com/posts').then((ress) => {
    res.json(ress.data);
  })
});

router.post('/userRegistration', (req, res) => {
  const body = req.body;
  console.log(body);

  axios.post('https://api.ideamart.io/subscription/send', {
    "applicationId": body.applicationId,
    "password": body.password,
    "version": body.version,
    "action": body.action,
    "subscriberId": body.subscriberId
  }, {
    headers: {
      "content-type": "application/json",
      "accept": "application/json"
    }
  }).then(resss => {
    res.json(resss.data);
  })

})

router.post('/OTPRequest', (req, res) => {
  const body = req.body;
  console.log(body);

  axios.post('http://core.sdp:7000/subscription/otp/request', {
    headers: {
      "content-type": "application/json",
      "accept": "application/json"
    }
  }, {
    "applicationId": body.applicationId,
    "password": body.password,
    "subscriberId": body.subscriberId,
    "applicationHash": body.applicationHash,
    "applicationMetaData":
    {
      "client": body.client,
      "device": body.device,
      "os": body.os,
      "appCode": body.appCode
    }
  }
  ).then(resss => {
    res.json(resss.data);
  })
})

router.get('/test', (req, res) => {
  res.json('This is a Test Message')
})

module.exports = router;
