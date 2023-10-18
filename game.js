function getComputerChoice() {
  let getRandom = Math.floor(Math.random() * 3) + 1;

  if (getRandom === 1) {
    return "ROCK";
  } else if (getRandom === 2) {
    return "PAPER";
  } else if (getRandom === 3) {
    return "SCISSORS";
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toUpperCase();
  let message = "";
  let playerWin = false;
  let computerWin = false;
  let invalid = false;

  if (playerSelection === computerSelection) {
    message = "Empate!"
    playerWin = true;
    computerWin = true;

  } else {
      if (playerSelection === "ROCK") {
        if (computerSelection === "PAPER") {
          computerWin = true;
          message = "Perdeu! Papel ganha de pedra!";
      } else {
          playerWin = true;
          message = "Ganhou! Pedra ganha de tesoura!";
      }

    } else if (playerSelection === "PAPER") {
        if (computerSelection === "ROCK") {
          playerWin = true;
          message = "Ganhou! Papel ganha de pedra!";
      } else {
          computerWin = true;
          message = "Perdeu! Tesoura ganha de papel!";
      }

    } else if (playerSelection === "SCISSORS") {
        if (computerSelection === "ROCK") {
          computerWin = true;
          message = "Perdeu! Pedra ganha de tesoura!";
      } else {
          playerWin = true;
          message = "Ganhou! Tesoura ganha de papel!";
      }

    } else {
        message = "Opção inválida! Tente novamente."
        invalid = true;
    }
  }

  return [message, playerWin, computerWin, invalid];

} // não mexer

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for(i = 0; i < 5; i++) {
    while(true) {
      let playerSelection = prompt("Rock, paper or scissors?");
      let computerSelection = getComputerChoice();

      let play = playRound(playerSelection, computerSelection);

      console.log(play[0]);

      if(play[1] === true && play[3] === false) {
        playerScore += 1;
        break;
      }

      if(play[2] === true && play[3] === false) {
        computerScore += 1;
        break;
      }

      if(play[3] === true) {
        continue;
      }
    }
  } // não mexer  

  if(playerScore === computerScore) {
    console.log("Vocês empataram!");
    console.log(`Você: ${playerScore}`);
    console.log(`Computador: ${computerScore}`);
  } else {
      if (playerScore > computerScore) {
        console.log("Você ganhou!");
        console.log(`Você: ${playerScore}`);
        console.log(`Computador: ${computerScore}`);
    } else {
        console.log("Você perdeu!");
        console.log(`Você: ${playerScore}`);
        console.log(`Computador: ${computerScore}`);
    }
  }
}

game();
