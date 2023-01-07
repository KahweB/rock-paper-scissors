/*generates random choice*/
function getComputerChoice(){ 
    let choices = ["rock","paper","scissors"];
    return choices[Math.floor(Math.random()*3)];
}
/*plays round*/
function playRound(playerSelection,computerSelection){
    if(playerSelection === "rock" && computerSelection === "paper"){
        console.log("you lost");
    }
    else if(playerSelection === "rock"&& computerSelection ==="scissors"){
        console.log("you win");
    }
    else if(playerSelection === "paper"&& computerSelection ==="rock"){
        console.log("you win");
    }
    else if(playerSelection === "paper"&& computerSelection ==="scissors"){
        console.log("you lost");
    }
    else if(playerSelection === "scissors"&& computerSelection ==="rock"){
        console.log("you lost");
    }
    else if(playerSelection === "scissors"&& computerSelection ==="paper"){
        console.log("you win");
    }
    else{
        console.log("its a tie");
    }
}

