var timer
var ele=document.getElementById('timer')

(function(){
  var seconds =60;
  timer = setInterval(() => {
    ele.innerHTML= '60'-seconds;
    seconds--;
  }, 1000)
})();