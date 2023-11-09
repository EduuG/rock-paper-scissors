const homePage = document.querySelector("#home");
const container = document.querySelector("#container");
const titleBar = document.querySelector("#titlebar")
const startButton = homePage.querySelector("#start");

startButton.addEventListener("click", startGame);

function startGame() {
  homePage.remove();
  container.style.display = "flex";
  titleBar.style.display = "flex";

  game();
}


function getPlayerChoice() {
  const buttons = document.querySelectorAll(".btn");
  
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      return button.id
    });
  });
}


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
  player = playerSelection;
  computer = computerSelection;

  if (player === computer.name) return "Tied!";
  if (player === computer.defeats) return `You lose! ${computer.name} beats ${player}`;
  return `You win! ${player} beats ${computer.name}`;
}


function game() {
  let scorePlayer = 0;
  let scoreComputer = 0;

  let scorePlayerDom = document.querySelector(".score-player");
  let scoreComputerDom = document.querySelector(".score-computer");
  let roundCounterDom = document.querySelector("#round-counter")

  scorePlayerDom.innerText = scorePlayer;
  scoreComputerDom.innerText = scoreComputer;

  const buttons = document.querySelectorAll(".btn");
  let roundCount = 1;

  roundCounterDom.innerText = "Round " + roundCount;

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const round = playRound(button.id, getComputerChoice());

      if (round.includes("Tied!")) {
        scorePlayer++;
        scoreComputer++;
      }

      if (round.includes("win!")) {
        scorePlayer++;
      }

      if (round.includes("lose!")) {
        scoreComputer++;
      }
      
      roundCount++;
      if (roundCount <= 5) {
        roundCounterDom.innerText = "Round " + roundCount;
      }

      scorePlayerDom.innerText = scorePlayer;
      scoreComputerDom.innerText = scoreComputer;

      console.log(round);

      if (roundCount > 5) {
        scorePlayer === scoreComputer ? console.log("Game tied!")
        : scorePlayer < scoreComputer ? console.log("Computer wins!")
        : console.log("You win!");

        console.log("Player: " + scorePlayer);
        console.log("Computer: " + scoreComputer);

        buttons.forEach(item => {
          item.parentElement.remove();
        });
      }
    });
  });
}
