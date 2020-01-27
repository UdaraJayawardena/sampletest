var express = require('express');
var router = express.Router();
var axios = require('axios');
var https = require('https');
var querystring = require('querystring');
var qs = require('qs');
var request = require('request');

router.post('/sendOTP', (req, res) => {

  var post_options = {
    uri: 'https://api.dialog.lk/subscription/otp/request',
    method: 'POST',
    json: {
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
  };

  var post_req = request.post(post_options, (err, res) => {
    console.log(res.body);
  })
})

router.post('/subNotify', (req, res) => {
  var post_options = {
    uri: 'https://api.ideamart.io/subscription/getStatus',
    method: 'POST',
    json: {
      "applicationId": "APP_054681",
      "password": "dd9a5d699c263e82827c378ee08c3f7f",
      "subscriberId": "tel:94784662138"
    }
  };

  var post_req = request.post(post_options, (err, res) => {
    console.log(res.body);
  })
})


router.get('/', function (req, res, next) {
  axios.get('https://jsonplaceholder.typicode.com/posts').then((ress) => {
    res.json(ress.data);
  })
});

// router.post('/OTPRequest', (req, res) => {
//   const body = req.body;

//   axios.post('https://api.dialog.lk/subscription/otp/request', {
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     }
//   }, {
//     applicationId: "APP_054681",
//     password: "dd9a5d699c263e82827c378ee08c3f7f",
//     subscriberId: " tel:94784662138",
//     applicationMetaData: {
//       client: "MOBILEAPP",
//       device: "Samsung S10",
//       os: "android9",
//       appCode: "https://play.google.com/store/apps/details?id=lk.dialog.megarunlor"
//     }
//   }).then(resss => {
//     res.json(resss.data);
//   })
// })

router.get('/test', (req, res) => {
  res.json('This is a Test Message')
})


module.exports = router;
