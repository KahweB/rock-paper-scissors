/*generates random choice*/
function getComputerChoice(){ 
    let choices = ["rock","paper","scissors"];
    return choices[Math.floor(Math.random()*3)];
}
let playerScore = 0;
let computerScore = 0;
/*plays round*/
function playRound(playerSelection,computerSelection){
    if(playerSelection === "rock" && computerSelection === "paper"){
        console.log("you lost");
        computerScore++;
    }
    else if(playerSelection === "rock"&& computerSelection ==="scissors"){
        console.log("you win");
        playerScore++;
    }
    else if(playerSelection === "paper"&& computerSelection ==="rock"){
        console.log("you win");
        playerScore++;
    }
    else if(playerSelection === "paper"&& computerSelection ==="scissors"){
        console.log("you lost");
        computerScore++;
    }
    else if(playerSelection === "scissors"&& computerSelection ==="rock"){
        console.log("you lost");
        computerScore++;
    }
    else if(playerSelection === "scissors"&& computerSelection ==="paper"){
        console.log("you win");
        playerScore++;
    }
    else{
        console.log("its a tie");
    }
}

function game(){
    for (let i = 0; i<5; i++){
        let computerChoice = getComputerChoice();
        let playerChoice = prompt("enter choice");
        
        playRound(computerChoice,playerChoice);
    }
    if (computerScore < playerScore){
        console.log("YOU ARE THE WINNER");
    }
    else if(computerScore > playerScore){
        console.log("YOU ARE A LOSER");
    }
    else{
        console.log("TIE");
    }
    
}
game();

