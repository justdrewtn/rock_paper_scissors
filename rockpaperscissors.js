function getComputerChoice(string) {
    let rpsArray = ['Rock', 'Paper', 'Scissors'];

    return rpsArray[Math.floor(Math.random() * rpsArray.length)];
}

//define playerSelection
const playerSelection = capitalize(prompt('Rock, Paper, Scissors MOTHERFUCKER LETS GO!'));
//make playerSelection case insensitive
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
//    console.log(capitalize(string));
}
//define computerSelection
const computerSelection = getComputerChoice();
//play playerSelection with computerSelection one round
function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        return ('You Win! Rocks obliterate scissors.');
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        return ('You Lose! Paper engulfs and smothers rock.');
    } else if (playerSelection === 'Rock' && computerSelection === 'Rock') {
        return ('Draw! Rocks are rocks.');
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        return ('You Lose! Scissors cut the fuck out of paper.');
    } else if (playerSelection === 'Paper' && computerSelection === 'Paper') {
        return ('Draw! Paper is paper.');
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        return ('You Win! Paper engulfs and smothers rock.');
    } else if (playerSelection === 'Scissors' && computerSelection === 'Scissors') {
        return ('Draw! Scissors are scissors.');
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        return ('You Win! Scissors cut the fuck out of paper.');
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        return ('You lose! Rocks obliterate scissors.');
    }
}
console.log(playRound(playerSelection, computerSelection));
//play 5 
function game() {

}