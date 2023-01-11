
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
        console.log("computer win");
        return false;
        
    }
    else if(playerScore > computerScore && playerScore == 5 ){
        console.log("player win");
        return true;
    }
    
}
/*plays round*/
function playRound(playerSelection,computerSelection){
    
    
    if(playerSelection === "rock" && computerSelection === "paper"){
        
        computerScore++;
        console.log("you choose rock computer choose paper computer got point");
        winnerChecker(computerScore,playerScore)
        
    }
    else if(playerSelection === "rock"&& computerSelection ==="scissors"){
        
        playerScore++;
        console.log("you choose rock computer choose scissors player got point");
        winnerChecker(computerScore,playerScore);
    }
    else if(playerSelection === "paper"&& computerSelection ==="rock"){
        
        playerScore++;
        console.log("you choose rock computer choose paper computer got point");
        winnerChecker(computerScore,playerScore);
    }
    else if(playerSelection === "paper"&& computerSelection ==="scissors"){
        
        computerScore++;
        console.log("computer");
        winnerChecker(computerScore,playerScore);
    }
    else if(playerSelection === "scissors"&& computerSelection ==="rock"){
        
        computerScore++;
        console.log("computer");
        winnerChecker(computerScore,playerScore);
    }
    else if(playerSelection === "scissors"&& computerSelection ==="paper"){
        
        playerScore++;
        console.log("player");
        winnerChecker(computerScore,playerScore);
    }
    else{
        console.log("tie");
    }
    
}
eventer();


