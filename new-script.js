let userScore = 0;
let computerScore = 0;
let count = 5;
let userScore_span = document.getElementById("user-score");
let computerScore_span = document.getElementById("computer-score");
let scoreBoard_div = document.querySelector(".score-board");
let result_p = document.querySelector(".result > p");
let rock_div = document.getElementById("rock");
let paper_div = document.getElementById("paper");
let scissors_div = document.getElementById("scissors");
let winner = document.getElementById("action-message");

function getComputerChoice(){
    let choices = ['Rock', 'Paper', 'Scissors'];
    let randomeNumber = Math.floor(Math.random()*3);
    return choices[randomeNumber];

}

function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = userChoice + " beats " + computerChoice + ". User wins! ;)" ;
    return userScore;
}
function lose(userChoice, computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = computerChoice + " beats " + userChoice + ". Computer wins. :(" ;
    return computerScore;
}

function draw() {
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = " draw ";
}

function game(userChoice){
    let computerChoice = getComputerChoice();
    switch(userChoice + computerChoice) {
        case "RockScissors":
        case "PaperRock":
        case "sp":
            win(userChoice, computerChoice);
            if(userScore === 5){
                winner.innerHTML = "You won! 🥳";
                result_p.innerHTML = "Refresh to play another game."
                endGame();
            }
            break;
        case "RockPaper":
        case "PaperScissors":
        case "ScissorsRock":
            lose(userChoice, computerChoice);
            if(computerScore === 5){
                winner.innerHTML = "You lost! 😢";
                result_p.innerHTML = "Refresh to play another game."
                endGame();

            }
            break;
        case "RockRock":
        case "PaperPaper":
        case "ScissorsScissors":
            draw();
            break;
    }
}

game();

function endGame(){
    rock_div.remove();
    paper_div.remove();
    scissors_div.remove();
}

function main () {
    rock_div.addEventListener('click', function(){
        game("Rock");
    })
    paper_div.addEventListener('click', function(){
        game("Paper");
    })
    scissors_div.addEventListener('click', function(){
        game("Scissors");
    })
}

main();

console.log(userScore);