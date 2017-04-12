$(document).on("pagecreate","#rockPaperScissors",function(event){
  

var rock=document.getElementById("Rock");
var paper=document.getElementById("Paper");
var scissors=document.getElementById("Scissors");
var reset=document.getElementById("reset");
var choices=document.getElementById("")
var points=document.getElementById("playerScore");
var score = 0;
var result = document.getElementById("result");

rock.addEventListener('click',function(){
  	score=score+1;
  	points.innerHTML=score;
  	result.innerHTML = 'You Picked Rock. Computer Picked ... You Lost/Won';
});


reset.addEventListener('click',function(){  
	score=0;
	points.innerHTML=score;
	result.innerHTML = '';
});

paper.addEventListener('click',function(){
 	score=score+1;
  	points.innerHTML=score;
  	result.innerHTML = 'You Picked Paper. Computer Picked ... You Lost/Won';
});

scissors.addEventListener('click',function(){
  	score=score+1;
  	points.innerHTML=score;
  	result.innerHTML = 'You Picked Scissors. Computer Picked ... You Lost/Won';
});



});
