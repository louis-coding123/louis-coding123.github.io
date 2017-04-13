$(document).on("pagecreate","#rockPaperScissors",function(event){
  
//vars for images
var rock=document.getElementById("Rock");
var paper=document.getElementById("Paper");
var scissors=document.getElementById("Scissors");

//var for reset button
var reset=document.getElementById("reset");

//var for player span
var points=document.getElementById("playerScore");

//var for computer span
var compPoints=document.getElementById("compScore");

//var for scores
var score = 0;
var compScore = 0;

//var for result text that is displayed
var result = document.getElementById("result");

function getCompchoice(){
var choices=['rock','paper','scissors'];
var compChoice=choices[Math.floor(Math.random()*choices.length)]
return compChoice;
}

rock.addEventListener('click',function(){

var computerChoice = getCompchoice();

if(computerChoice === "scissors"){
score=score+1;
points.innerHTML=score;
result.innerHTML = 'You Picked Rock. Computer Picked Scissors. You Win!!';
}

else if(computerChoice === "paper") {
 compScore = compScore + 1;
 compPoints.innerHTML = compScore;
 result.innerHTML = 'You Picked Rock. Computer Picked Paper. You Lose!!'
}

else {
    result.innerHTML = 'You Picked Rock. Computer Picked Rock. Its A Tie!'
}

});


reset.addEventListener('click',function(){  
	score=0;
	points.innerHTML=score;
	compScore=0
  compPoints.innerHTML=score
  result.innerHTML = '';
});

paper.addEventListener('click',function(){
 	var computerChoice = getCompchoice();

if(computerChoice === "scissors"){
  compScore=compScore + 1;
compPoints.innerHTML=compScore;
result.innerHTML = 'You Picked Paper. Computer Picked Scissors. You Lose!!';
}

else if(computerChoice === "Paper") {

    result.innerHTML = 'You Picked Paper. Computer Picked Paper. Its A Tie!!'
}

else {
     score=score+1;
 points.innerHTML=score;
    result.innerHTML = 'You Picked Paper. Computer Picked Rock. You Win!!'
}
});

scissors.addEventListener('click',function(){
  	var computerChoice = getCompchoice();

if(computerChoice === "scissors"){

result.innerHTML = 'You Picked Scissors. Computer Picked Scissors. Its A Tie!!';
}

else if(computerChoice === "Paper") {
 score=score+1;
 points.innerHTML=score;
    result.innerHTML = 'You Picked Scissors. Computer Picked Paper. You Win!!'
}

else {
    result.innerHTML = 'You Picked Scissors. Computer Picked Rock. You Lose!!'
  compScore=compScore + 1;
compPoints.innerHTML=compScore;
}
});



});
