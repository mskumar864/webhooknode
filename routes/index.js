var express = require('express');
var router = express.Router();
var count=0;
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', count : count});

});

router.post('/register',function (req,res,next) {

   var eventName=req.body.eventName;
var summary=req.body.summary;
   count++;
console.log("eventName"+eventName);
    console.log("summary"+summary);
   res.end('Count:'+ count+" "+" summary:"+summary);


})
module.exports = router;
