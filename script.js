let choices = ['Rock', 'Paper', 'Scissors'];
let compChoice,
    userChoice,
    compScore = 0,
    userScore = 0,
    roundCount,
    winner='';

//generate random choice from computer
function computerPlay(choices){
  compChoice = choices[Math.floor(Math.random() * choices.length)];
  return compChoice;
  }

//play the roucnd using above values and declare winner
function playRound(userChoice, compChoice) {
  console.log(`userchoice is ${userChoice}, compchoice is ${compChoice}`);

  //conditions to decide winner and update score
  if(userChoice.toLowerCase() === compChoice.toLowerCase()) {
    //console.log('tie');
    result.textContent = `TIE.. Scores are User:${userScore}  Comp:${compScore}`;
  } else if ((userChoice.toLowerCase() === 'rock' && compChoice.toLowerCase() === 'scissors') || (userChoice.toLowerCase() === 'scissors' && compChoice.toLowerCase() === 'paper') || (userChoice.toLowerCase() === 'paper' && compChoice.toLowerCase() === 'rock')) {
    //console.log('user wins');//userScore += 1;
    userScore += 1;
    result.textContent = `User wins.. Scores are User:${userScore}  Comp:${compScore}`;
  } else {
    //console.log('comp wins');//compScore += 1;
    compScore +=1;
    result.textContent = `Comp wins.. Scores are User:${userScore}  Comp:${compScore}`;
  }
  //final score-
  if(userScore===5 || compScore===5) {
    (userScore===5) ? winner = 'USER' : winner = 'Comp';
    result.textContent = `Game Over.. Scores are User:${userScore}  Comp:${compScore} | ${winner} wins!!`;
    return;
  }
}

const result = document.querySelector('.result');
const buttons = document.querySelectorAll('button');
//console.log(buttons);
buttons.forEach(button => {
  //listen to click events and determine user choice
  button.addEventListener('click', (e) =>{
    userChoice = e.target.className;
    compChoice = computerPlay(choices);
    
    //stop if winner is declared
    if(winner !== '') return;
    //playgame
    playRound(userChoice, compChoice);
    //console.log(typeof e.target.className);
  });  
});