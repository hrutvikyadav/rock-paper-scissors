let choices = ['Rock', 'Paper', 'Scissors'];
let compChoice,
    userChoice,
    compScore,
    userScore,
    roundCount,
    winner;

//generate random choice from computer
function computerPlay(choices){
  compChoice = choices[Math.floor(Math.random() * choices.length)];
  return compChoice;
  }

//play the roucnd using above values and declare winner
function playRound(userChoice, compChoice) {
  //debug case insensitivity
  let u = typeof userChoice;
  let c = typeof compChoice
  console.log(`userchoice is ${u}, compchoice is ${c}`);

  //conditions to decide winner and update score
  if(userChoice.toLowerCase() === compChoice.toLowerCase()) {
    return;
  } else if ((userChoice.toLowerCase() === 'rock' && compChoice.toLowerCase() === 'scissors') || (userChoice.toLowerCase() === 'scissors' && compChoice.toLowerCase() === 'paper') || (userChoice.toLowerCase() === 'paper' && compChoice.toLowerCase() === 'rock')) {
    return userScore += 1;
  } else {
    return compScore += 1;
  }
}

//play 5 rounds, keep track of scores and log the winner
function game(userChoice, compChoice) {
  roundCount = 5;
  compScore = 0;
  userScore = 0;
  for(let i = 0; i < roundCount; i++){
    compChoice = computerPlay(choices);
    //user's choice
    userChoice = prompt('Enter your choice');
    playRound(userChoice, compChoice);

    console.log(`comp choose ${compChoice}!`);
    console.log(`user choose ${userChoice}!`);
    console.log(typeof userChoice);//debug case insensitivity

    console.log(`scores are comp:${compScore} user:${userScore}`);
  }
  //deal with ties
  if (userScore === compScore) return 'It\'s a tie!!!!!!';
  (userScore > compScore) ? winner = 'User wins' : winner = 'comp wins';
  return winner;
} 

// console.log(`comp choose ${compChoice}!`);
// console.log(`user choose ${userChoice}!`);
console.log(game(userChoice, compChoice));