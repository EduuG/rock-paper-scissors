function getComputerChoice() {
  const rock = {
    name: "rock",
    defeats: "scissors"
  }

  const paper = {
    name: "paper",
    defeats: "rock"
  }

  const scissors = {
    name: "scissors",
    defeats: "paper"
  }

  let choice = Math.floor(Math.random() * 3 + 1);

  switch (choice) {
    case 1: return rock;
    case 2: return paper;
    case 3: return scissors;
  }
}

function playRound(playerSelection, computerSelection) {
  const possibilities = ["rock", "paper", "scissors"];
  player = playerSelection.toLowerCase();
  computer = computerSelection;

  if (possibilities.includes(player)) {
    if (player === computer.name) return "Tied!";
    if (player === computer.defeats) return `You lose! ${computer.name} beats ${player}`;
    return `You win! ${player} beats ${computer.name}`;
  }

  return false
}

function game() {
  let scorePlayer = 0;
  let scoreComputer = 0;


  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Rock, paper or scissors?");

    let game = playRound(playerSelection, getComputerChoice());

    switch (game) {
      case false: continue;
      case game.includes("Tied!"): {
        scorePlayer += 1;
        scoreComputer += 1;
        break;
      }
      case game.includes("win!"): {
        scorePlayer += 1;
        break;
      }
      case game.includes("lose!"): {
        scoreComputer += 1;
      }
    }

    console.log(game);
    console.log("Player: " + scorePlayer);
    console.log("Computer: " + scoreComputer);
  }
}

game();
