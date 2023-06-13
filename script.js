let compScore=0;
let playerScore=0;
let count=0;

function getUserChoice() {
    const userChoice = prompt('Enter rock, paper or scissors');
    const userSelection = userChoice.toLowerCase();
    if (userSelection === 'rock' || userSelection === 'paper' || userSelection === 'scissors') {
        console.log(userChoice);
    }
    else { console.log('invalid user input'); }
    return userChoice;
}

function getComputerChoice(){
    const randomNumber = Math.floor(Math.random()*3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    };
}

function singleRound(computerPlay,playerSelection){
    playerSelection = getUserChoice();
    computerPlay = getComputerChoice();

    if (playerSelection === computerPlay){
        return 'It\'s a tie!';
    }
    else if (playerSelection === 'rock'){
        if (computerPlay === 'paper'){
            return 'Computer wins!';
        }
        else{
            return 'you win!';
        }
    }
    
    else if (playerSelection === 'paper'){
        if (computerPlay === 'scissors'){
            return 'Computer wins!';
        }
        else{
            return 'you win';
        }
    }
    else if (playerSelection === 'scissors'){
        if(computerPlay === 'rock'){
            return 'Computer wins!';
        }
        else {
            return 'you win!';
        }
    }

}


function game(){
    playerSelection = getUserChoice();
    computerPlay = getComputerChoice();
    do{
        let gameRound;
        gameRound = singleRound(computerPlay,playerSelection);
        if (gameRound==='Computer wins!'){
            compScore+=1;
            count+=1;
        }
        else if(gameRound==='you win!'){
            playerScore+=1;
            count+=1;
        }
        else {
            count+=1
        }
        console.log(gameRound);
    }while(count<5);
    if (compScore > playerScore){
        console.log("COMPUTER WINS!!");
    }
    else if(playerScore > compScore){
        console.log("PLAYER WINS!!");
    }
    else {
        console.log("IT's A TIE");
    }
    return count;

}



game();



       
