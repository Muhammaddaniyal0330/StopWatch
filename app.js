var min = 0;
var sec = 0;
var msec = 0;
var interval;

var minheading = document.getElementById ("min");

var secheading = document.getElementById ("sec");



function  timer (){
  msec++;
  document.getElementById("msec").innerHTML = msec;
   if (msec >= 10){
     sec++
     msec=0;
     document.getElementById("sec").innerHTML = sec;
    
   }

}

function start(){
  interval = setInterval (timer,100);
}


function Stop(){
   clearInterval(interval);
}


function Reset (){
   min = 0;
   sec = 0;
   msec = 0;
   document.getElementById("sec").innerHTML = sec;
   document.getElementById("min").innerHTML = min;
   document.getElementById("msec").innerHTML = msec;
   Stop();
}

