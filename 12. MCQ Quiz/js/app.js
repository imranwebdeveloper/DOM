const questionData = [
  {
    question: "How old is Florin?",
    a: "10",
    b: "17",
    c: "26",
    d: "110",
    correct: "c",
  },
  {
    question: "What is the most used Programing Language in 2020",
    a: "Java",
    b: "C",
    c: "Python",
    d: "javaScripts",
    correct: "d",
  },
  {
    question: "Who is the President of US",
    a: "Florin Pop",
    b: "Donal Trump",
    c: "Iven Saldano",
    d: "Mihai",
    correct: "b",
  },
  {
    question: "What dose HTML Stand for?",
    a: "HyperText MarkUp Language",
    b: " Cascading Style Sheet",
    c: "Iven Saldano",
    d: "Jasn Object Notation",
    correct: "a",
  },
  {
    question: "What year was javaScript Launched",
    a: "2010",
    b: " 2019",
    c: "2018",
    d: "None of the above",
    correct: "d",
  },
  {
    question: "What year was javaScript Launched",
    a: "2000",
    b: " 2001",
    c: "2010",
    d: "None of the above",
    correct: "d",
  },
  {
    question: "My name is ______",
    a: "Imran",
    b: "Habib",
    c: "Mintu",
    d: "SofiQ",
    correct: "a",
  },
];

let currentData = 0;
let score = 0;
// let answer = undefined;
const a = document.querySelector(".a");
const b = document.querySelector(".b");
const c = document.querySelector(".c");
const d = document.querySelector(".d");
const scoreD = document.querySelector(".score");
const queastion = document.querySelector(".question");
const mybtn = document.querySelector(".mybtn");
const answerEls = document.querySelectorAll(".answer");
// console.log(mybtn);

window.addEventListener("DOMContentLoader", loaddata());

function loaddata() {
  checkedfault();
  const currentQuizData = questionData[currentData];
  // console.log(currentQuizData.correct);
  queastion.innerHTML = currentQuizData.question;
  a.innerText = currentQuizData.a;
  b.innerText = currentQuizData.b;
  c.innerText = currentQuizData.c;
  d.innerText = currentQuizData.d;
  scoreD.innerText = score;
}
function getSelected() {
  let answerL = undefined;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answerL = answerEl.id;
    }
  });
  return answerL;
}
mybtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === questionData[currentData].correct) {
      score++;
    }
    currentData++;
    if (currentData < questionData.length) {
      loaddata();
    } else {
      alert(`You Answered ${score}`);
    }
  }
});

function checkedfault() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}
