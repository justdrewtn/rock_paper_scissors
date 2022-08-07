function getComputerChoice() {
    let textArray = ['Rock', 'Paper', 'Scissors'];

    let choice = textArray[Math.floor(Math.random() * textArray.length)];
    console.log(choice);
}

//define playerSelection
let playerSelection = capitalize(prompt())
//make playerSelection case insensitive
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
    console.log(capitalize(string))
}
//define computerSelection
let computerSelection = getComputerChoice()
//play playerSelection with computerSelection
function playRound(playerSelection, computerSelection) {
    return 
}
//should have 9 outcomes
if playRound(Rock, Scissors) {
    console.log("You Win! Rock beats Scissors!")
}