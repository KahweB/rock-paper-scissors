
/*generates random choice*/
let playerScore = 0;
let computerScore = 0;
function getComputerChoice(){ 
    let choices = ["rock","paper","scissors"];
    return choices[Math.floor(Math.random()*3)];
}
function playerSelection(choice){
    return choice
}
function eventer(){
    //buttonlarin hepsini buttons degiskenine atar
    const buttons = document.querySelectorAll(".choice");
    //butun buttonlara click event listener ekler event callbacki playerselection
    //functiona atar
    buttons.forEach(button => {
        button.addEventListener("click", e => {
            let choice = e.target.id;
            playRound(choice,getComputerChoice());
            
        }); 
    });
};
function winnerChecker(computerScore,playerScore){
    if(computerScore > playerScore && computerScore == 5){
        document.getElementById("winnerAnnounce").innerHTML = "COMPUTER WON";
        return false;
        
    }
    else if(playerScore > computerScore && playerScore == 5 ){
        document.getElementById("winnerAnnounce").innerHTML = "PLAYER WON";
        return true;
    }
}
/*plays round*/
function playRound(playerSelection,computerSelection){
    if(playerSelection === "rock" && computerSelection === "paper"){
        
        computerScore++;
        
        console.log("you choose rock computer choose paper computer got point");
    }
    else if(playerSelection === "rock"&& computerSelection ==="scissors"){
        
        playerScore++;
        
        console.log("you choose rock computer choose scissors player got point");
    }
    else if(playerSelection === "paper"&& computerSelection ==="rock"){
        
        playerScore++;
        
        console.log("you choose paper computer choose rock player got point");  
    }
    else if(playerSelection === "paper"&& computerSelection ==="scissors"){
        
        computerScore++;
        
        console.log("you choose paper computer choose scissors computer got point");
    }
    else if(playerSelection === "scissors"&& computerSelection ==="rock"){
        
        computerScore++;
        
        console.log("you choose scissors computer choose rock computer got point");
    }
    else if(playerSelection === "scissors"&& computerSelection ==="paper"){
        
        playerScore++;
        
        console.log("you choose scissors computer choose paper player got point");
    }
    else{
        console.log("tie");
    }
    let condition = winnerChecker(computerScore,playerScore);
    if (condition == true || condition == false){
        scoreReset();
    }
    htmlScoreUpdater(playerScore,computerScore);
}
function htmlScoreUpdater(playerScore,computerScore){
    document.getElementById("player-ScoreP").innerText = `PLAYER\n${playerScore}`;
    document.getElementById("computer-ScoreP").innerText = `COMPUTER\n${computerScore}`;
}
function scoreReset(){
    playerScore = 0;
    computerScore = 0;
}

eventer();



