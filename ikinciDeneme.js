const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
var papa = document.getElementById("papa");
var halife = document.getElementById("halife");
var score = document.querySelector(".score");
var player;
var computer;
var random;

rock.addEventListener("click",function(){
    player = "rock";
    papa.textContent = "Taş";
    random = random(0,3);
    computerTool(random);
    halife.textContent = computer;
    checkScore(player,computer);
})
paper.addEventListener("click",function(){
    player = "paper";
    papa.textContent = "Kağıt";
    random = random(0,3);
    computerTool(random);
    halife.textContent = computer;
    checkScore(player,computer);
})
scissors.addEventListener("click",function(){
    player = "scissors";
    papa.textContent = "Makas";
    random = random(0,3);
    computerTool(random);
    halife.textContent = computer;
    checkScore(player,computer);
})

function random(min,max){
    return Math.floor(Math.random()*(max-min)) + min;
}

function computerTool(random){
    if(random == 1){
       computer = "Taş";
    }
    else if(random == 2){
        computer = "Kağıt";
    }
    else{
        computer = "Makas";
    }
}

function checkScore(player,computer){
    if(player == "rock" && computer == "Makas"){
        score.textContent = "KAZANDINIZ";
    }
    else if(player == "rock" && computer == "Taş"){
        score.textContent = "BERABERLİK";
    }
    else if(player == "rock" && computer == "Kağıt"){
        score.textContent = "KAYBETTİNİZ";
    }

    if(player == "paper" && computer == "Taş"){
        score.textContent = "KAZANDINIZ";
    }
    else if(player == "paper" && computer == "Kağıt"){
        score.textContent = "BERABERLİK";
    }
    else if(player == "paper" && computer == "Makas"){
        score.textContent = "KAYBETTİNİZ";
    }

    if(player == "scissors" && computer == "Kağıt"){
        score.textContent = "KAZANDINIZ";
    }
    else if(player == "scissors" && computer == "Makas"){
        score.textContent = "BERABERLİK";
    }
    else if(player == "scissors" && computer == "Taş"){
        score.textContent = "KAYBETTİNİZ";
    }
}