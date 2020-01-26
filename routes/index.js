var express = require('express');
var router = express.Router();
var axios = require('axios');
var https = require('https');
var querystring = require('querystring');
var qs = require('qs');


router.post('/OTP', (req, res) => {

  var post_data = qs.stringify(
    {
      applicationId: "APP_054681",
      password: "dd9a5d699c263e82827c378ee08c3f7f",
      subscriberId: "tel:94784662138",
      applicationMetaData: {
        client: "MOBILEAPP",
        device: "Samsung S10",
        os: "android9",
        appCode: "https://play.google.com/store/apps/details?id=lk.dialog.megarunlor"
      }
    }
  );

  // 'Content-Length': Buffer.byteLength(post_data.length)

  var post_options = {
    host: 'api.dialog.lk',
    port: '443',
    path: '/subscription/otp/request',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "Accept": "application/json"
    },
    body: post_data
  };

  var post_req = https.request(post_options, function (res) {
    console.log(res.statusCode);
    res.on('data', (chunk) => {
      console.log(chunk);
    });
  });

  post_req.write(post_data);
  post_req.end();

})




router.get('/', function (req, res, next) {
  axios.get('https://jsonplaceholder.typicode.com/posts').then((ress) => {
    res.json(ress.data);
  })
});

router.post('/OTPRequest', (req, res) => {
  const body = req.body;

  axios.post('https://api.dialog.lk/subscription/otp/request', {
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  }, {
    applicationId: "APP_054681",
    password: "dd9a5d699c263e82827c378ee08c3f7f",
    subscriberId: " tel:94784662138",
    applicationMetaData: {
      client: "MOBILEAPP",
      device: "Samsung S10",
      os: "android9",
      appCode: "https://play.google.com/store/apps/details?id=lk.dialog.megarunlor"
    }
  }).then(resss => {
    res.json(resss.data);
  })
})

router.post('/smsSend', (req, res) => {
  const body = req.body;

  axios.post('https://api.dialog.lk/sms/send', {
    "message": body.message,
    "destinationAddresses": body.destinationAddresses,
    "password": body.password,
    "applicationId": body.applicationId
  }).then(resss => {
    res.json(resss.data);
  })
})

router.get('/test', (req, res) => {
  res.json('This is a Test Message')
})


module.exports = router;
