
function computerPlay(){
    //rock = 0
    //paper = 1
    //scissors = 2
    let rand = Math.floor(Math.random() * 3);
    if (rand === 0){
        return "ROCK";
    }
    else if (rand === 1){
        return "PAPER";
    }
    else if (rand === 2){
        return "SCISSORS"
    }
    else {
        return "ERROR";
    }
}

function playRound(playerSelection, computerSelection){
    if (playerSelection.toUpperCase() === "ROCK"){
        if (computerSelection.toUpperCase() === "ROCK"){
            return "A Tie! Play Again"
        }
        else if (computerSelection.toUpperCase() === "PAPER"){
            return "You Lose! PAPER beats ROCK"
        }
        else if (computerSelection.toUpperCase() === "SCISSORS"){
            return "You Win! ROCK beats SCISSORS"
        }
        else{
            console.error("ERROR");
            return null;
        }
    }
    else if (playerSelection.toUpperCase() === "PAPER"){
        if (computerSelection.toUpperCase() === "ROCK"){
            return "You Win! PAPER beats ROCK"
        }
        else if (computerSelection.toUpperCase() === "PAPER"){
            return "A Tie! Play Again"
        }
        else if (computerSelection.toUpperCase() === "SCISSORS"){
            return "You Lose! SCISSORS beats PAPER"
        }
        else{
            console.error("ERROR");
            return null;
        }
    }
    else if (playerSelection.toUpperCase() === "SCISSORS"){
        if (computerSelection.toUpperCase() === "ROCK"){
            return "You Lose! ROCK beats SCISSORS"
        }
        else if (computerSelection.toUpperCase() === "PAPER"){
            return "You Win! SCISSORS beats PAPER"
        }
        else if (computerSelection.toUpperCase() === "SCISSORS"){
            return "A Tie! Play Again"
        }
        else{
            console.error("ERROR");
            return null;
        }
    }
    else{
        console.error("ERROR");
        return null;
    }
}

function game(){
    let playerWins = 0;
    let computerWins = 0;
    console.log("Welcome to ROCK PAPER SCISSORS!");
    for (let i = 0; i < 5; i++){
        let playerSelection = prompt("Please enter ROCK, PAPER, or SCISSORS: ")
        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
        if (result.charAt(4) === 'W'){
            playerWins++;
        }
        else if (result.charAt(4) === 'L'){
            computerWins++;
        }
        console.log("You     Computer");
        console.log(" " + playerWins + "    -    " + computerWins);
    }
}

game();