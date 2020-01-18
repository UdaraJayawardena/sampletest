var express = require('express');
var admin = require("firebase-admin");
var router = express.Router();
var _ = require('lodash');
const Encodr = require('encodr');
// var LRU = require("lru-cache"), options = { max: 1000 }
const JSONO = new Encodr("json");

//   arrr.map((item, index) => {
//     if (a_start <= item.b_start && item.b_start <= a_end) not.push(item);
//     if (a_start <= item.b_end && item.b_end <= a_end) not.push(item);
//     if (item.b_start < a_start && a_end < item.b_end) not.push(item);
//     mat.push(item);
//   })

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://samanalataxi-da602.firebaseio.com"
// })

// var registrationToken = 'eHJoMJEznW0:APA91bFDgh2D7eIgFkxQIso-ygKILjo8kyVH8cl-BfMhDLoQqirc_rKArxCVM7sYwfge7QOSNxS2GWhdrPJSBsrOGE7D2nC2HFwz78QlfycCfpAmqVFMk4GAA01aWUoI-1oWWkagjZLi';

// const payload = {
//   notification: {
//     title: 'Samanala Taxi',
//     body: 'This is a message',
//   }
// };

// const options = {
//   priority: 'high',
//   timeToLive: 60 * 60 * 24 
// };

// admin.messaging().sendToDevice(registrationToken, payload, options)
//   .then((response) => {
//     console.log(response);
//   }).catch((err) => {
//     console.log('failed');
//   })
// const value = dateRangeOverlaps(5, 10, 11, 12)
// console.log(value);

// function dateRangeOverlaps(a_start, a_end, b_start, b_end) {
//   if (a_start <= b_start && b_start <= a_end) return false; // b starts in a
//   if (a_start <= b_end && b_end <= a_end) return false; // b ends in a
//   if (b_start < a_start && a_end < b_end) return false; // a in b
//   return true;
// }

var response = [
  {
    passengersocketid: "PS1", driversocketid: ["DS1", "DS2", "DS3"]
  }, {
    passengerSocketID: "PS1",
    startLatitude: "1.5",
    startLongitude: "2.5",
    endLatitude: "3.5",
    endLongitude: "4.5",
    passengerPlaceID: "1.23456",
    passengerEndPlaceID: "2.365412"
  }
]
var n1 = 5;
var n2 = 15;
var n3 = 6;
var n4 = 18;

// function checkOverlap(lineA, lineB) {
//   return lineA.start > lineB.start && lineA.start < lineB.end || 
//          lineA.end > lineB.start && lineA.end < lineB.end ||
//          lineB.start > lineA.start && lineB.start < lineA.end || 
//          lineB.end > lineA.start && lineB.end < lineA.end;
// }

var start = 5;
var end = 10;

var arr = [
  {
    driverid: "1",
    start: 2,
    end: 4
  },
  {
    driverid: "1",
    start: 4,
    end: 9
  },
  {
    driverid: "1",
    start: 11,
    end: 14
  },
  {
    driverid: "2",
    start: 1,
    end: 3
  },
  {
    driverid: "3",
    start: 16,
    end: 20
  },
  {
    driverid: "4",
    start: 9,
    end: 12
  }

]

var una = [];
var ava = [];

// checkOverlap();
// function checkOverlap() {
//   arr.map((item, index) => {
//     ((5 > item.start && 5 < item.end ||
//       10 > item.start && 10 < item.end ||
//       item.start > 5 && item.start < 10 ||
//       item.end > 5 && item.end < 10)) ? una.push(item.driverid) : ava.push(item.driverid)

//     // (5 > item.start && 5 < item.end ||
//     //   10 > item.start && 10 < item.end ||
//     //   item.start > 5 && item.start < 10 ||
//     //   item.end > 5 && item.end < 10) ? "true" : item.driverid
//   })
// }

// var a1 = [1, 1, 2, 2, 3, 3, 4];
// var a2 = [1, 2];

// console.log(_.difference([1, 1, 2], [2, 2, 2]));

router.get('/', function (req, res, next) {
  res.json('Udara jayawardena')
});

module.exports = router;
