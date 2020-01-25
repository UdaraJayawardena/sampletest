var express = require('express');
var router = express.Router();
var axios = require('axios');
var https = require('https');
var querystring = require('querystring');
var qs = require('qs');



OTPRequest();

// var options = {
//   host: 'http://localhost',
//   port: '3030',
//   path: 'https://api.dialog.lk/subscription/otp/request',
//   method: 'POST'
// };

function OTPRequest() {

  var post_data = qs.stringify(
    {
      "applicationId": "APP_054681",
      "password": "dd9a5d699c263e82827c378ee08c3f7f",
      "subscriberId": " tel:94784662138",
      "applicationMetaData": {
        "client": "MOBILEAPP",
        "device": "Samsung S10",
        "os": "android9",
        "appCode": "https://play.google.com/store/apps/details?id=lk.dialog.megarunlor"
      }
    }
  );

  console.log(post_data)

  var post_options = {
    host: '52.220.190.37',
    port: '5050',
    path: 'https://api.dialog.lk/subscription/otp/request',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "Accept": "application/json",
      'Content-Length': post_data.length
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


}


router.get('/', function (req, res, next) {
  axios.get('https://jsonplaceholder.typicode.com/posts').then((ress) => {
    res.json(ress.data);
  })
});

// http.get(options, function (res) {
//   var obj = {
//     "applicationId": " APP_054681",
//     "password": "dd9a5d699c263e82827c378ee08c3f7f",
//     "subscriberId": " tel:94784662138",
//     "applicationMetaData": {
//       "client": "MOBILEAPP",
//       "device": "Samsung S10",
//       "os": "android8",
//       "appCode": "https://play.google.com/store/apps/details?id=lk.dialog.megarunlor"
//     }
//   }

//   axios.post('https://api.dialog.lk/subscription/otp/request', obj).then(resss => {
//     res.json(resss.data);
//   })

// });

// {
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json"
//   }
// },

router.post('/OTPRequest', (req, res) => {
  const body = req.body;

  axios.post('https://api.dialog.lk/subscription/otp/request', {
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  }, {
    "applicationId": "APP_054681",
    "password": "dd9a5d699c263e82827c378ee08c3f7f",
    "subscriberId": " tel:94784662138",
    "applicationMetaData": {
      "client": "MOBILEAPP",
      "device": "Samsung S10",
      "os": "android9",
      "appCode": "https://play.google.com/store/apps/details?id=lk.dialog.megarunlor"
    }
  }).then(resss => {
    res.json(resss.data);
  })
})

router.get('/smsSend', (req, res) => {
  const body = req.body;

  axios.post('https://api.ideamart.io/sms/send', {
    headers: {
      "content-type": "application/json",
      "accept": "application/json"
    }
  }, {
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
