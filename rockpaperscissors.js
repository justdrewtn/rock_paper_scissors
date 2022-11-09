//Function that gets random computer choice.
function getComputerChoice(string) {
    let rpsArray = ['Rock', 'Paper', 'Scissors'];

    return rpsArray[Math.floor(Math.random() * rpsArray.length)];
}

let computerChoice = getComputerChoice();

//Main Gameplay function.
function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        return ('You Win! Rocks obliterate scissors.');
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        return ('You Lose! Paper engulfs and smothers rock.');
    } else if (playerSelection === 'Rock' && computerSelection === 'Rock') {
        return ('Draw! Rocks are rocks.');
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        return ('You Lose! Scissors shred paper.');
    } else if (playerSelection === 'Paper' && computerSelection === 'Paper') {
        return ('Draw! Paper is paper.');
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        return ('You Win! Paper engulfs and smothers rock.');
    } else if (playerSelection === 'Scissors' && computerSelection === 'Scissors') {
        return ('Draw! Scissors are scissors.');
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        return ('You Win! Scissors shred paper.');
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        return ('You Lose! Rocks obliterate scissors.');
    }
}

//Adds event listener to buttons
const rock = document.getElementById("Rock");

rock.addEventListener("click", e => {
    let result = playRound('Rock', getComputerChoice());
    document.getElementById("Result").innerHTML = result;
    return round(result);
});

const paper = document.getElementById("Paper");

paper.addEventListener("click", e => {
    let result = playRound('Paper', getComputerChoice());
    document.getElementById("Result").innerHTML = result;
    return round(result);
});

const scissors = document.getElementById("Scissors");

scissors.addEventListener("click", e => {
    let result = playRound('Scissors', getComputerChoice());
    document.getElementById("Result").innerHTML = result;
    return round(result);
});

//establishes score
let playerScore = 0;
let computerScore = 0;

//plays round and keeps score
function round(result) {
    let oneRound = result;

    if ((oneRound === 'You Win! Rocks obliterate scissors.') || (oneRound === 'You Win! Paper engulfs and smothers rock.') ||(oneRound === 'You Win! Scissors shred paper.')) {
        playerScore++;
        document.getElementById("Total").innerHTML = 'Wins - ' + playerScore + ' Losses - ' + computerScore;
    } else if ((oneRound === 'You Lose! Paper engulfs and smothers rock.') || (oneRound === 'You Lose! Scissors shred paper.') ||(oneRound === 'You Lose! Rocks obliterate scissors.')) {
        computerScore++;
        document.getElementById("Total").innerHTML = 'Wins - ' + playerScore + ' Losses - ' + computerScore;
    }
//establishes winner and resets score
    if (playerScore === 5) {
        document.getElementById("Result").innerHTML = 'WELL LOOK AT THAT, YOU WON THE GAME!';
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        document.getElementById("Result").innerHTML = 'WELL WELL WELL, YOU LOST THE GAME!';
        playerScore = 0;
        computerScore = 0;
    } else if (playerScore === 5 && computerScore === 5) {
        document.getElementById("Result").innerHTML = 'ARGH, WE TIED!';
        playerScore = 0;
        computerScore = 0;
    }
} 