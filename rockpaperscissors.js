function getComputerChoice(string) {
    let rpsArray = ['Rock', 'Paper', 'Scissors'];

    return rpsArray[Math.floor(Math.random() * rpsArray.length)];
}

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

window.onload=function(){
    const rock = document.getElementById("Rock");

    rock.addEventListener("click", e => {
        console.log(playRound('Rock', getComputerChoice()));
    });

    const paper = document.getElementById("Paper");

    paper.addEventListener("click", e => {
        console.log(playRound('Paper', getComputerChoice()));
    });

    const scissors = document.getElementById("Scissors");

    scissors.addEventListener("click", e => {
        console.log(playRound('Scissors', getComputerChoice()));
    });
}


/*function game() {
    let playerScore = 0;
    let computerScore = 0;
    
    for (let i = 0; i < 5; i++) {
        let oneRound = playRound(getPlayerChoice(), getComputerChoice());
        console.log(oneRound);
        if ((oneRound === 'You Win! Rocks obliterate scissors.') || (oneRound === 'You Win! Paper engulfs and smothers rock.') ||(oneRound === 'You Win! Scissors shred paper.')) {
            playerScore++;
        } else if ((oneRound === 'You Lose! Paper engulfs and smothers rock.') || (oneRound === 'You Lose! Scissors shred paper.') ||(oneRound === 'You Lose! Rocks obliterate scissors.')) {
            computerScore++;
        } 
    }
    console.log('Wins - ' + playerScore);
    console.log('Losses - ' + computerScore);

    if (playerScore > computerScore) {
        console.log('WELL LOOK AT THAT, YOU WON!');
    } else if (computerScore > playerScore) {
        console.log('WELL WELL WELL, YOU LOST!');
    } else if (playerScore = computerScore) {
        console.log('ARGH, WE TIED!');
    }
}*/
