const { application } = require("express");
var express = require("express");
var multer = require('multer');
const app = require("../app");

var router = express.Router();


// answer은 1이 정답

const questions = [
  {
    questionId: 1, // id는 보내지 않는다
    question: "이순신은 훈민정음을 창제하신 위인이시다",
    answer: 1,
    images: ["동그라미.png", "엑스.png"],
  },
  {
    questionId: 2,
    question: "독도는 누구 땅일까요?",
    answer: 0,
    images: ["한국.png", "일본.png"],
  },
  {
    questionId: 3,
    question: "다음중 겉절이는 무었일까?",
    answer: 1,
    images: ["김치.jpg", "겉절이.jpg"],
  },
];

// 무작위로 돌려준다
function shuffle() {
  const arr = questions.slice();
  arr.sort(() => Math.random() - 0.5);
  return arr;
}


/* GET home page. */
router.get("/", function (req, res) {
  const data = shuffle();
  res.json(data);
});


module.exports = router;
