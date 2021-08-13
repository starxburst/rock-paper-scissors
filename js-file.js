function computerPlay() {
    let randomNumber = Math.floor(Math.random()*3);
    if (randomNumber == 0) {
    return `rock`;
    }
    else if (randomNumber == 1) {
    return `paper`;
    }
    else {
    return `scissors`;
    }
}

function playRound(playerSelection, computerSelection){
    if (playerSelection == `rock` && computerSelection == `paper`){
        computerScore++;
        return `You lose! Paper beats Rock`;
    }

    if (playerSelection == `rock` && computerSelection == `scissors`){
        playerScore++;
        return `You win! Rock beats Scissors`;
    }

    if (playerSelection == `paper` && computerSelection == `rock`){
        playerScore++;
        return `You win! Paper beats Rock`;
    }

    if (playerSelection == `paper` && computerSelection == `scissors`){
        computerScore++;
        return `You lose! Scissors beats Paper`;
    }

    if (playerSelection == `scissors` && computerSelection == `paper`){
        playerScore++;
        return `You win! Scissors beats Paper`;
    }

    if (playerSelection == `scissors` && computerSelection == `rock`){
        computerScore++;
        return `You lose! Scissors beats Rock`;
    }

    if (playerSelection == computerSelection){
        return `Noone wins`;
    }

}

function game(){
    for (let i=0; i < 5; i++) {
        playerSelection = prompt("What is your choice");
        computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
}


let computerSelection = computerPlay();
let playerScore = 0;
let computerScore = 0;
let result = '';

const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors');
const div = document.querySelector(`div`);
const btn = document.querySelectorAll(`button`);

btnRock.addEventListener('click', function(e) {
    computerSelection = computerPlay();
    result = playRound(e.target.id, computerSelection);
    console.log(`${e.target.id}  ${computerSelection}  ${playerScore}  ${computerScore}`);
    if (playerScore >= 5) {
        div.textContent = `You Wins!`;
        btn.forEach(btn => {
            btn.setAttribute(`disabled`, `true`);
        })
    } else if (computerScore >= 5) {
        div.textContent = `You Lose!`;
        btn.forEach(btn => {
            btn.setAttribute(`disabled`, `true`);
        })
    } else
    div.textContent=`${result}   Your choice: ${e.target.id}. Computer choice: ${computerSelection}. Your scores: ${playerScore}. Computer scores: ${computerScore}.`;
});

btnPaper.addEventListener('click', function(e) {
    computerSelection = computerPlay();
    result = playRound(e.target.id, computerSelection);
    console.log(`${e.target.id}  ${computerSelection}  ${playerScore}  ${computerScore}`);
    if (playerScore >= 5) {
        div.textContent = `You Wins!`;
        btn.forEach(btn => {
            btn.setAttribute(`disabled`, `true`);
        })
    } else if (computerScore >= 5) {
        div.textContent = `You Lose!`;
        btn.forEach(btn => {
            btn.setAttribute(`disabled`, `true`);
        })
    } else
    div.textContent=`${result}   Your choice: ${e.target.id}. Computer choice: ${computerSelection}. Your scores: ${playerScore}. Computer scores: ${computerScore}.`;
});

btnScissors.addEventListener('click', function(e) {
    computerSelection = computerPlay();
    result = playRound(e.target.id, computerSelection);
    console.log(`${e.target.id}  ${computerSelection}  ${playerScore}  ${computerScore}`);
    if (playerScore >= 5) {
        div.textContent = `You Wins!`;
        btn.forEach(btn => {
            btn.setAttribute(`disabled`, `true`);
        })
    } else if (computerScore >= 5) {
        div.textContent = `You Lose!`;
        btn.forEach(btn => {
            btn.setAttribute(`disabled`, `true`);
        })
    } else
    div.textContent=`${result}   Your choice: ${e.target.id}. Computer choice: ${computerSelection}. Your scores: ${playerScore}. Computer scores: ${computerScore}.`;
});