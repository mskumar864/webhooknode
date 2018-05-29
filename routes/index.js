var express = require('express');
var router = express.Router();
var count=0;
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', count : count});

});

router.post('/register',function (req,res,next) {

   var eventName=req.body.eventDetails.eventName;

   count++;

   res.end('Count is '+ count);


})
module.exports = router;
