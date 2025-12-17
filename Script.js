let span = document.querySelector("span");
let textArea = document.querySelector(".text");
let input = document.querySelector(".typing");
let wpmScore = document.querySelector(".score");
let mistakes = document.querySelector(".mistakes");
let accuracyScore = document.querySelector(".accuracyRate");
let button = document.querySelector("button");

let timer = 60;
let timerStart = false;
let paragraphs = [
  "Learning JavaScript takes practice and patience. The more you write code, the better you understand logic, events, and problem solving skills over time.",

  "Typing fast is not about speed only, it is about accuracy. When you focus on correct letters, your speed improves naturally with regular practice.",

  "Technology is changing the world every day. Students who learn skills like programming, design, and problem solving have a strong future ahead.",

  "Success does not come overnight. Small efforts done daily can create big results. Consistency is more important than motivation.",

  "A good developer always learns from mistakes. Debugging code improves thinking skills and helps you become confident in writing programs."
];

button.addEventListener("click",()=>{
  textArea.style.display = "block"
let randomPara = Math.floor(Math.random() * paragraphs.length)

randomPara = paragraphs[randomPara]
 textArea.textContent = randomPara
});

let interval = null 
let mistakeCount = 0;

let prevLength = 0;
let resultArr = [];
input.addEventListener("input",(e)=>{
  if(!timerStart){
  timerStart = true
  
  interval = setInterval(()=>{
    timer-- 
    span.textContent = timer
  
  if(timer === 0){
    clearInterval(interval)
    span.textContent = "Timer is up"
    input.disabled = true
    
let allChar = input.value.length 
let wpmSpeed = Math.round(allChar / 5) 
wpmScore.textContent = wpmSpeed 

let correct = allChar - mistakeCount
let accurate = (correct / allChar) * 100 
let final = Math.floor(accurate)
if(final >= 100){
accuracyScore.textContent = "100%";
}
else if(final  <= 0){
  accuracyScore.textContent = "0%";
}
else{
  accuracyScore.textContent = final + "%";
}
  }
  },1000);
   }
  
  let value = input.value 
  let content = textArea.textContent 
  let currLength = value.length 
  

  if (currLength < prevLength) {
    let lastResult = resultArr.pop();
    if (lastResult === false) {
      mistakeCount--;
      mistakes.textContent = mistakeCount;
    }
  }

  
  if (currLength > prevLength) {
    let index = currLength - 1;

    if (value[index] === content[index]) {
      resultArr.push(true);
    } else {
      resultArr.push(false);
      mistakeCount++;
      mistakes.textContent = mistakeCount;
    }
  }

  prevLength = currLength;
});

