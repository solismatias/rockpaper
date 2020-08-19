
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("userScore");
const computerScore_span = document.getElementById("computerScore");
const scoreBoard_div = document.querySelector(".score-board-container");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById ("choice-rock");
const paper_div = document.getElementById("choice-paper");
const scissor_div = document.getElementById("choice-scissor");

function getComputerChoice() {
    const choices = [ 'choice-rock', 'choice-paper', 'choice-scissor'];
    const randomNumber = Math.floor(Math.random() * 3 );
    return choices [randomNumber];
}

function convertToWord(letter) {
    if (letter === "choice-rock") return " Rock";
    if (letter === "choice-paper") return " Paper";
    return "Scissors";
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)} You Win!`;
    document.getElementById(userChoice).classList.add('green-glow')
    setTimeout(() =>  document.getElementById(userChoice).classList.remove('green-glow'), 1500);
}
function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(computerChoice)} beats ${convertToWord(userChoice)} You Lose!`;
    document.getElementById(userChoice).classList.add('red-glow')
    setTimeout(() =>  document.getElementById(userChoice).classList.remove('red-glow'), 1500);
}

function draw(userChoice, computerChoice) {
    result_p.innerHTML ="DRAW!" ;
    document.getElementById(userChoice).classList.add('red-glow')
    setTimeout(() =>  document.getElementById(userChoice).classList.remove('red-glow'), 1500);
}


function game(userChoice) {
    const ComputerChoice = getComputerChoice ();
    switch (userChoice + ComputerChoice) {
        case "choice-rockchoice-paper":
        case "choice-paperchoice-rock":
        case "choice-scissorchoice-paper":
            win(userChoice, ComputerChoice);
            break;
        case "choice-rockchoice-paper":
        case "choice-paperchoice-scissor":
        case "choice-scissorchoice-rock":
            lose(userChoice, ComputerChoice);
            break;
        case "choice-rockchoice-rock":
        case "choice-paperchoice-paper":
        case "choice-scissorchoice-scissor":
            draw(userChoice, ComputerChoice);
            break;
    }
}



function main() {
    rock_div.addEventListener('click', function() {
        game("choice-rock");
    })
    paper_div.addEventListener('click', function() {
        game("choice-paper");
    })
    scissor_div.addEventListener('click', function() {
        game("choice-scissor");
    })
}
main ();

