let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  let options = ["rock", "paper", "scissors"];
  let randInx = Math.floor(Math.random(options) * 3);
  return options[randInx];
};

const drawGame = () => {
  msg.innerText = "Game was Draw, Play again !!";
  msg.style.backgroundColor = "black";
};

const showWinner = (userWin, userChoice, compChoice) => {
  userChoice = userChoice.toUpperCase();
  compChoice = compChoice.toUpperCase();
  if (userWin == true) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You Win!! Your ${userChoice} Beats ${compChoice}`;
    msg.style.backgroundColor = "Orange";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You Lose!! ${compChoice} Beats your ${userChoice}`;
    msg.style.backgroundColor = "Green";
  }
};

const playGame = (userChoice) => {
  //Generate computer choice
  const compChoice = genCompChoice();
  //Checking Condition
  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice == "rock") {
      // scissors , paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // scissors , rock
      userWin = compChoice === "scissors" ? false : true;
    } else {
      // rock ,paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
    genCompChoice();
  });
});
