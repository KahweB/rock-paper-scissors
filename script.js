let playerScore = 0;
let computerScore = 0;

/*choices arrayindan random index return eder*/
function getComputerChoice(){ 
    let choices = ["rock","paper","scissors"];
    return choices[Math.floor(Math.random()*3)];
}

function eventer(){
    //buttonlarin hepsini list olarak buttons degiskenine atar
    const buttons = document.querySelectorAll(".choice");
    //butun buttonlara click event listener ekler event callbacki 
    //playerselection functiona atar
    buttons.forEach(button => {
        button.addEventListener("click", e => {
            let choice = e.target.id;
            playRound(choice,getComputerChoice());
        }); 
    });
};

//skoru kontrol eder DOM a sonucu yazar return boolean
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

/*iki secenegi karsilastir score restart*/
function playRound(playerSelection,computerSelection){
    if(playerSelection === "rock" && computerSelection === "paper"){
        computerScore++;
    }
    else if(playerSelection === "rock"&& computerSelection ==="scissors"){
        playerScore++;
    }
    else if(playerSelection === "paper"&& computerSelection ==="rock"){
        playerScore++;  
    }
    else if(playerSelection === "paper"&& computerSelection ==="scissors"){
        computerScore++;
    }
    else if(playerSelection === "scissors"&& computerSelection ==="rock"){
        computerScore++;
    }
    else if(playerSelection === "scissors"&& computerSelection ==="paper"){
        playerScore++;
    }
    else{
    }
    //burasi logic olarak sacma fakat conditionun undefined kalmasi lazim
    let condition = winnerChecker(computerScore,playerScore);
    if (condition == true || condition == false){
        scoreReset();
    }
    htmlScoreUpdater(playerScore,computerScore);
}

//anlik scoreyi DOM <p> ekler
function htmlScoreUpdater(playerScore,computerScore){
    document.getElementById("player-ScoreP").innerText = `PLAYER\n${playerScore}`;
    document.getElementById("computer-ScoreP").innerText = `COMPUTER\n${computerScore}`;
}

function scoreReset(){
    playerScore = 0;
    computerScore = 0;
}

eventer();



