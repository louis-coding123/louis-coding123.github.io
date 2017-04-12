$(document).on("pagecreate","#rockPaperScissors",function(event){
  

var rock=document.getElementById("Rock");
var paper=document.getElementById("Paper");
var scissors=document.getElementById("Scissors");
var reset=document.getElementById("reset");

var points=document.getElementById("playerScore");
var score = 0;

rock.addEventListener('click',function(){
  	score=score+1;
  	points.innerHTML=score;
});


reset.addEventListener('click',function(){  
	score=0;
	points.innerHTML=score;
});

paper.addEventListener('click',function(){
 	score=score+1;
  	points.innerHTML=score;
});

scissors.addEventListener('click',function(){
  	score=score+1;
  	points.innerHTML=score;
});



});
