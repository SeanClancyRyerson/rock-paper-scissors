
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
    //lose -1
    //tie 0
    //win 1
    if (playerSelection.toUpperCase() === "ROCK"){
        if (computerSelection.toUpperCase() === "ROCK"){
            return 0;
        }
        else if (computerSelection.toUpperCase() === "PAPER"){
            return -1;
        }
        else if (computerSelection.toUpperCase() === "SCISSORS"){
            return 1;
        }
        else{
            console.error("ERROR");
            return null;
        }
    }
    else if (playerSelection.toUpperCase() === "PAPER"){
        if (computerSelection.toUpperCase() === "ROCK"){
            return 1;
        }
        else if (computerSelection.toUpperCase() === "PAPER"){
            return 0;
        }
        else if (computerSelection.toUpperCase() === "SCISSORS"){
            return -1;
        }
        else{
            console.error("ERROR");
            return null;
        }
    }
    else if (playerSelection.toUpperCase() === "SCISSORS"){
        if (computerSelection.toUpperCase() === "ROCK"){
            return -1;
        }
        else if (computerSelection.toUpperCase() === "PAPER"){
            return 1;
        }
        else if (computerSelection.toUpperCase() === "SCISSORS"){
            return 0;
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

function checkResult(result) {
    if (result === -1){
        displayResult("You lose!");
    }
    else if (result === 0){
        displayResult("You tied!");
    }
    else if (result === 1){
        displayResult("You win!");
    }
    else {
        console.error("ERROR");
    }
}

function displayResult(result){
    const res = document.createElement('div');
    res.textContent = result;

    const cont = document.querySelector('#container');
    cont.appendChild(res);
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let result = playRound(button.id, computerPlay());
        checkResult(result);
    });
});



/*
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
*/
