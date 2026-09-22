function getComputerChoice() {
	let randomNum = Math.floor(Math.random() * 3) + 1;

	if (randomNum === 1) {
		console.log("com chooses rock");
		return "rock";
	} else if (randomNum === 2) {
		console.log("com chooses paper");
		return "paper";
	} else if (randomNum === 3) {
		console.log("com chooses scissors");
		return "scissors";
	} else {
		console.log("invalid number generated");
		return;
	}
}

function getHumanChoice() {
	let humanChoice = prompt("Rock, Paper, Scissors. Shoot!");
	console.log("you chose " + humanChoice);
}