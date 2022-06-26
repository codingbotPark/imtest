const { application } = require("express");
var express = require("express");
var multer = require('multer');
const app = require("../app");

var router = express.Router();


// answer은 1이 오른쪽

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
  },{
    questionId: 4,
    question:"다음 중 한국인 국룰인 것은?",
    answer:1,
    images:["고멘나사이.jfif","다음에밥한번.jfif"]
  },{
    questionId: 5,
    question:"한국인이 당기세요를 만났을 때 하는 일은?",
    answer:0,
    images:["밀기.png", "당기기.png"]
  },{
    questionId: 6,
    question:"'머리부터 발끝까지' 라는 말과 가장 어울리는 사진은? (출제년도 2022)",
    answer:1,
    images:["오로나민씨.png","이근.png"]
  },{
    questionId: 7,
    question:"당신은 혼자 엘리베이터를 탔다 무었부터 해야할까?",
    answer:1,
    images:["엘베열림.png","엘베닫김.png"]
  },{
    questionId: 8,
    question:"왕을 상징하는 동물은?",
    answer:0,
    images:["용.png","호랑이.png"]
  },{
    questionId: 9,
    question:"추석에는 떡국을 먹는다",
    answer:1,
    images:["동그라미.png","엑스.png"]
  },{
    questionId: 10,
    question:"단군신화에 나온 동물은 사자와 곰이다",
    answer:1,
    images:["동그라미.png","엑스.png"]
  },{
    questionId: 11,
    question:"김치는 세계 5대 건강 식품으로 뽑혔다",
    answer:0,
    images:["동그라미.png","엑스.png"]
  },{
    questionId: 12,
    question:"우리나라 고유 악기 중 거문고는 사물놀이에 사용된다",
    answer:1,
    images:["동그라미.png","엑스.png"]
  }
];

// 무작위로 돌려준다
function shuffle() {
  const arr = questions.slice();
  arr.sort(() => Math.random() - 0.5);
  return arr;
}


/* GET home page. */
router.get("/", function (req, res) {
  const data = shuffle().slice(0,10);
  res.json(data);
});


module.exports = router;
