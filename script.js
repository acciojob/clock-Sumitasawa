//your JS code here. If required.

let timerDisplay=document.getElementById("timer");

let curretDate=new Date();

setInterval(function () {
	curretDate=new Date();
	timerDisplay.innerHTML=curretDate.toLocaleString();
},1000)