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
    while (true) {
      const playerSelection = prompt("Rock, paper or scissors?");
      const round = playRound(playerSelection, getComputerChoice());

      if (!round) continue;

      if (round.includes("Tied!")) {
        scorePlayer += 1;
        scoreComputer += 1;
      }

      if (round.includes("win!")) {
        scorePlayer += 1;
      }

      if (round.includes("lose!")) {
        scoreComputer += 1;
      }
      
      console.log(round);
      break;
    }
  }

  scorePlayer === scoreComputer ? console.log("Game tied!")
  : scorePlayer < scoreComputer ? console.log("Computer wins!")
  : console.log("You win!");

  console.log("Player: " + scorePlayer);
  console.log("Computer: " + scoreComputer);
}

// game();
