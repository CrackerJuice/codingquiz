var currentQuestion = 0; 
var time =question.length * 15; //can change number of questions later?
var clockId;
var timerEl =document.getElementById('time')
var startButton =document.getElementById('start')
var questionEl =document.getElementById('questions');
var answersEl =document.getElementById('choices');
var endButton =document.getElementById('end');
var mainPage =document.getElementById('opening-page');

mainPage.setAttribute(opening-page);
clockId = setInterval(clockTick, 1000); 
timerEl.textContent=time;
//function changeColor(newColor) { add for later buttons -mdn article
  //  const elem = document.getElementById('text');
    //elem.style.color = newColor;
//}