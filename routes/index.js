var express = require('express');
var router = express.Router();

// answer은 1이 정답

const questions=[
  {
    questionId:1, // id는 보내지 않는다
    question:'이순신은 훈민정음을 창제하신 위인이시다',
    answer:1,
    images:['동그라미.png', '엑스.png']
  },
  {
    questionId:2,
    question:'독도는 누구 땅일까요?',
    answer:0,
    images:['한국.png', '일본.png']
  },{
    questionId:3,
    question:'다음중 겉절이는 무었일까?',
    answer:1,
    images:['김치.jpg', '겉절이.jpg']
  }
]

function shuffle(){
  const arr = questions.slice();
  arr.sort(() => Math.random() - 0.5)
  return arr
}

function readFile(fileName){
  fs.readFile(fileName+".jpg",function(err,data){
    
  })
}

/* GET home page. */
router.get('/', function(req, res) {
  const data=shuffle();
  res.json(data);
});

router.get('/image/:id',function(req,res){
  console.log("클라이언트 요청 ㅎㅇ");
  // console.log(req.params)

  readFile('겉절이.jpg',(err,data) => {
    if (err) {res.send()}
    res.send(data)
  })
})

module.exports = router;
