
const questionFormEl =document.getElementById("questionForm");
const questionEl =document.getElementById("question");
const scoreEl = document.getElementById("score");

let storedAnswer;
let score = localStorage.getItem("score");

const randomNumber = (max,min) =>{
 return Math.floor(Math.random()*(max - min +1) +min);

}
// console.log("number" ,randomNumber(1,10))

const generateQuestion = () =>{

  const randomNumber1 =randomNumber(1,10);
  const randomNumber2 =randomNumber(1,10);
  const questionType =randomNumber(0,5)
  
  
  let firstNumber;
  let secondNumber;
  if(randomNumber1 > randomNumber2 && questionType>2){
    firstNumber = randomNumber1;
    secondNumber = randomNumber2;
  }
  else{
    firstNumber = randomNumber2;
    secondNumber = randomNumber1;
  }
  
  
 
  let question;
  let answer;
  switch (questionType) {
    case 1:
      question = `Q. What is ${firstNumber} multiply by ${secondNumber} ?`;
      answer = firstNumber * secondNumber;
      break;
    case 2:
      question = `Q. What is ${firstNumber} Add to ${secondNumber} ?`;
      answer = firstNumber + secondNumber;
     break;
    case 3:
      question = `Q. What is ${firstNumber} Divided By ${secondNumber} ?`;
      answer = firstNumber / secondNumber;
      break;
    case 4:
      question = `Q. What is ${firstNumber} Subtract from ${secondNumber} ?`;
      answer = firstNumber - secondNumber;
      break;
    default:
      question = `Q. What is ${firstNumber} Subtract from ${secondNumber} ?`;
      answer = firstNumber - secondNumber;
      break;
  }
  // console.log(answer,question)
  return {answer,question}
  
 
}

const showQuestion = () => {
  const {question,answer} = generateQuestion();
  // console.log(question)
  questionEl.innerHTML = question;
  scoreEl.innerText = score;
 storedAnswer =answer;
//  console.log(storedAnswer)
}

showQuestion()

const checkAnswer = (event) => {
 event.preventDefault();
 const formData = new FormData(questionFormEl);
 const userAnswer = +formData.get("answer")
//  console.log(userAnswer)
 if(userAnswer === storedAnswer){
 score += 1;
 Toastify({
  text: `Your are wrong and your score is ${score}`,
  className: "info",
  gravity: "bottom",
  position:"center",
  style: {
    background: "linear-gradient(to right, #00b09b, #96c93d)",
  }
}).showToast();
 }
 else{
  score -= 1;
  Toastify({
    text: `Your are wrong and your score is ${score}`,
    className: "info",
    gravity: "bottom",
    position:"center",
    style: {
      background: "linear-gradient(to right, #e33217, #ff001e)",
    }
  }).showToast();
 }


 scoreEl.innerText = score;
 localStorage.setItem("score",score);
 event.target.reset();
 showQuestion();
//  console.log('userAnswer',userAnswer)
}


