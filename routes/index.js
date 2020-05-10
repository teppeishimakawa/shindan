var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',
 {
  title: 'うつ病チェックを簡易抑うつ症状尺度(QIDS -J)',
  score:""
 });
});




//express4.16.0以降はbody-parser標準搭載
router.use(express.json())
router.use(express.urlencoded({ extended: true }));


var A1_4ayy=[];
var A6_9ayy=[];
var A15_16ayy=[];

router.post("/", (req, res) =>
{

  A1_4ayy.push(req.body.A1,req.body.A2,req.body.A3,req.body.A4);
  A6_9ayy.push(req.body.A6,req.body.A7,req.body.A8,req.body.A9);
  A15_16ayy.push(req.body.A15,req.body.A16);


console.log(A1_4ayy,A6_9ayy,A15_16ayy);

//accumulator:ひとつ前の要素
var A1_4max = A1_4ayy.reduce(function (accumulator, currentValue, currentIndex, array)
{
    return Math.max(accumulator, currentValue);
});

var A6_9max = A6_9ayy.reduce(function (accumulator, currentValue, currentIndex, array)
{
    return Math.max(accumulator, currentValue);
});

var A15_16max = A15_16ayy.reduce(function (accumulator, currentValue, currentIndex, array)
{
    return Math.max(accumulator, currentValue);
});


console.log(A1_4max,A6_9max,A15_16max);


var total=A1_4max + A6_9max + A15_16max + parseInt(req.body.A5) + parseInt(req.body.A10) + parseInt(req.body.A11) + parseInt(req.body.A12) + parseInt(req.body.A13) + parseInt(req.body.A14);
console.log(total);


  res.render('index',
  {
   title: 'うつ病チェックを簡易抑うつ症状尺度(QIDS -J)',
   score: 'あなたのスコアは' + total + '点でした'
  });
});


module.exports = router;
