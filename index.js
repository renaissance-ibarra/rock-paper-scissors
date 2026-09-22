function getComputerChoice() {
	let randomNum = Math.floor(Math.random() * 3) + 1;

	if (randomNum === 1) {
		console.log("com chose rock");
		return "rock";
	} else if (randomNum === 2) {
		console.log("com chose paper");
		return "paper";
	} else if (randomNum === 3) {
		console.log("com chose scissors");
		return "scissors";
	} else {
		console.log("invalid number generated");
		return;
	}
}

function getHumanChoice() {
	let humanChoice = prompt("Rock, Paper, Scissors. Shoot!");
	console.log("you chose " + humanChoice);
	return humanChoice;
}

let humanScore = 0, computerScore = 0;

function playRound(humanChoice, computerChoice) {
	if (humanChoice.toUpperCase() == computerChoice.toUpperCase()) {
		console.log("It's a tie!");
	} else if (humanChoice.toUpperCase() == "ROCK" && computerChoice.toUpperCase() == "PAPER") {
		console.log("You lose! Paper beats Rock");
		computerScore++;
	} else if (humanChoice.toUpperCase() == "ROCK" && computerChoice.toUpperCase() == "SCISSORS") {
		console.log("You win! Rock beats Scissors");
		humanScore++;
	} else if (humanChoice.toUpperCase() == "PAPER" && computerChoice.toUpperCase() == "ROCK") {
		console.log("You win! Paper beats Rock");
		humanScore++;
	} else if (humanChoice.toUpperCase() == "PAPER" && computerChoice.toUpperCase() == "SCISSORS") {
		console.log("You lose! Scissors beat Paper");
		computerScore++;
	} else if (humanChoice.toUpperCase() == "SCISSORS" && computerChoice.toUpperCase() == "ROCK") {
		console.log("You lose! Rock beats Scissors");
		computerScore++;
	} else if (humanChoice.toUpperCase() == "SCISSORS" && computerChoice.toUpperCase() == "PAPER") {
		console.log("You win! Scissors beat Paper");
		humanScore++;
	}
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);