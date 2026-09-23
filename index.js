function getcomputerChoice() {
	let computerChoice = Math.floor(Math.random() * 3) + 1;
	
	if (computerChoice === 1) {
		console.log("Computer chose Rock");
		return "rock";
	} else if (computerChoice === 2) {
		console.log("Computer chose Paper");
		return "paper";
	} else if (computerChoice === 3) {
		console.log("Computer chose Scissors");
		return "scissors";
	} else {
		console.log("Default");
		return;
	}
}

function getHumanChoice() {
	let humanChoice = prompt("Rock, Paper, Scissors. Shoot!");
	console.log("You chose " + humanChoice);
	return humanChoice;
}

	let humanScore = 0, computerScore = 0;

	function playRound(humanChoice, computerChoice) {
		if (humanChoice.toUpperCase() === computerChoice.toUpperCase()) {
			console.log("Draw");
		} else if (humanChoice.toUpperCase() === "ROCK" && computerChoice.toUpperCase() === "PAPER") {
			console.log("You lose! Paper beats Rock.");
			computerScore++;
			console.log("Score: " + humanScore + " | " + computerScore);
		} else if (humanChoice.toUpperCase() === "ROCK" && computerChoice.toUpperCase() === "SCISSORS") {
			console.log("You win! Rock beats Scissors.");
			humanScore++;
			console.log("Score: " + humanScore + " | " + computerScore);
		} else if (humanChoice.toUpperCase() === "PAPER" && computerChoice.toUpperCase() === "ROCK") {
			console.log("You win! Paper beats Rock.");
			humanScore++;
			console.log("Score: " + humanScore + " | " + computerScore);
		} else if (humanChoice.toUpperCase() === "PAPER" && computerChoice.toUpperCase() === "SCISSORS") {
			console.log("You lose! Scissors beat Paper.");
			computerScore++;
			console.log("Score: " + humanScore + " | " + computerScore);
		} else if (humanChoice.toUpperCase() === "SCISSORS" && computerChoice.toUpperCase() === "ROCK") {
			console.log("You lose! Rock beats Scissors.");
			computerScore++;
			console.log("Score: " + humanScore + " | " + computerScore);
		} else if (humanChoice.toUpperCase() === "SCISSORS" && computerChoice.toUpperCase() === "PAPER") {
			console.log("You win! Scissors beat Paper.");
			humanScore++;
			console.log("Score: " + humanScore + " | " + computerScore);
		} else {
			console.log("Default");
		}
	}

function playGame () {
	for (let rounds = 5; rounds > 0; rounds--) {
		const humanSelection = getHumanChoice();
		const computerSelection = getcomputerChoice();

		playRound(humanSelection, computerSelection)
	}

	if (humanScore > computerScore) {
		console.log("You win!");
	} else if (humanScore < computerScore) {
		console.log("You lose!");
	} else {
		console.log("Draw!");
	}
}

playGame();
