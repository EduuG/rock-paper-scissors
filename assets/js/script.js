const homePage = document.querySelector("#home");
const container = document.querySelector("#container");
const titleBar = document.querySelector("#titlebar")
const startButton = homePage.querySelector("#start");

startButton.addEventListener("click", startGame);

function startGame() {
  homePage.remove();
  container.style.display = "flex";
  titleBar.style.display = "flex";

  const windowContainer = document.querySelector("#window");
  windowContainer.style.height = "600px";

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

  const showChoice = document.querySelector(".showChoice");

  if (document.querySelector(".showPlayerChoice") && document.querySelector(".showComputerChoice")) {
    document.querySelector(".showPlayerChoice").remove();
    document.querySelector(".showComputerChoice").remove();
  }

  let showPlayerChoice = document.createElement("p");
  showPlayerChoice.classList.add("showPlayerChoice");
  showPlayerChoice.innerText = playerSelection;
  showChoice.appendChild(showPlayerChoice);

  let showComputerChoice = document.createElement("p");
  showComputerChoice.classList.add("showComputerChoice");
  showComputerChoice.innerText = computerSelection.name;
  showChoice.appendChild(showComputerChoice);

  if (player === computer.name) return "Tied!";
  if (player === computer.defeats) return `You lose! ${computer.name} beats ${player}`;
  return `You win! ${player} beats ${computer.name}`;
}


function game() {
  let scorePlayer = 0;
  let scoreComputer = 0;

  const showChoice = document.querySelector(".showChoice")

  let scorePlayerDom = document.querySelector(".score-player");
  let scoreComputerDom = document.querySelector(".score-computer");
  let roundCounterDom = document.querySelector("#round-counter")

  const buttonsContainer = document.querySelector("#buttons");

  const rockBtn = document.createElement("button");
  const paperBtn = document.createElement("button");
  const scissorsBtn = document.createElement("button");

  const rockBtnLogo = document.createElement("i");
  const paperBtnLogo = document.createElement("i");
  const scissorsBtnLogo = document.createElement("i");

  rockBtnLogo.classList.add("fa-solid");
  paperBtnLogo.classList.add("fa-solid");
  scissorsBtnLogo.classList.add("fa-solid");

  rockBtnLogo.classList.add("fa-hand-back-fist");
  paperBtnLogo.classList.add("fa-hand");
  scissorsBtnLogo.classList.add("fa-hand-scissors");

  rockBtn.classList.add("btn");
  rockBtn.setAttribute("id", "rock");
  rockBtn.appendChild(rockBtnLogo);

  paperBtn.classList.add("btn");
  paperBtn.setAttribute("id", "paper");
  paperBtn.appendChild(paperBtnLogo);

  scissorsBtn.classList.add("btn");
  scissorsBtn.setAttribute("id", "scissor");
  scissorsBtn.appendChild(scissorsBtnLogo);

  buttonsContainer.appendChild(rockBtn);
  buttonsContainer.appendChild(paperBtn);
  buttonsContainer.appendChild(scissorsBtn);

  scorePlayerDom.innerText = scorePlayer;
  scoreComputerDom.innerText = scoreComputer;

  const buttons = document.querySelectorAll(".btn");
  let roundCount = 1;

  roundCounterDom.innerText = "Round " + roundCount;

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const round = playRound(button.id, getComputerChoice());

      showChoice.style.display = "flex";

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
          item.remove();
        });

        const restartBtn = document.createElement("button");
        restartBtn.classList.add("bigBtn");
        restartBtn.innerText = "Restart";

        restartBtn.addEventListener("click", () => {
          restartBtn.remove();
          showChoice.style.display = "none";
          game()
        })

        buttonsContainer.appendChild(restartBtn);
        
        
      }
    });
  });
}
