var express = require('express');
var router = express.Router();
var count=0;
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', count : count});

});

router.post('/register',function (req,res,next) {

   var eventName=req.body.event_type;
var summary=req.body.summary;
   count++;
  // console.log("id******"+ id);
    console.log("eventName**********"+eventName);
    console.log("summary*********"+summary);
    console.log("request body****"+JSON.stringify(req.body)+"Suresh")
    res.writeHead(200);
    res.end();
   //res.end('Count:'+ count+" "+" summary:"+summary);


})

router.post('/disputeregister',function (req,res,next) {

  var dispute_id=req.body.dispute_id;
var create_time=req.body.create_time;
  count++;
 // console.log("id******"+ id);
   console.log("dispute_id**********"+dispute_id);
   console.log("create_time*********"+create_time);
   console.log("request body****"+JSON.stringify(req.body)+"Suresh")
   res.writeHead(200);
   res.end();

})
module.exports = router;
