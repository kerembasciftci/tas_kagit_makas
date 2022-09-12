var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");
var rival = document.querySelector(".rival");
var timer = document.querySelector(".timer");
var player;
var computer;
var win = document.getElementById("win");

rock.addEventListener("click",()=>getTool(rock));
paper.addEventListener("click",()=>getTool(paper));
scissors.addEventListener("click",()=>getTool(scissors));

function random(min,max){
return Math.floor(Math.random()*(max-min+1)) + min;
}

function getTool(item){
    if(item == rock){
        player = "rock";
    }
    else if(item == paper){
        player = "paper";
    }
    else if(item == scissors){
        player = "scissors";
    }
    function rivalTool();
}

function rivalTool(){
    let rivalTool = random(1,3);
    if(rivalTool == 1){
        computer = "rock";
    }
    else if(rivalTool==2){
        computer = "paper";
    }
    else{
        computer="scissors";
    }
    checkScore();
}
function checkScore(computer){
    if(player == "paper" && computer == "rock"){
        win.textContent = "HELLO WORLD";
    }
}