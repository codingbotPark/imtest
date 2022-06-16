var express = require('express');
var router = express.Router();

// answer은 1이 정답

const questions=[
  {
    questionId:1, // id는 보내지 않는다
    question:'이순신은 훈민정음을 창제하신 위인이시다',
    answer:1,
    images:['O.jpg', 'X.jpg']
  },
  {
    questionId:2,
    question:'독도는 누구 땅일까요?',
    answer:0,
    images:['한국.jpg', '일본.jpg']
  },{
    questionId:3,
    question:'다음중 겉절이는 무었일까?',
    answer:1,
    images:['김치.jpg', '겉절이.jpg']
  }
]

function shuffle(){
  questions.slice();

}


/* GET home page. */
router.get('/', function(req, res) {
  const data=shuffle();
  res.json(data);
});

module.exports = router;
