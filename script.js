let choices = ['Rock', 'Paper', 'Scissors'];
let compChoice;
let result,
    userChoice,
    compScore,
    userScore,
    roundCount,
    winner;

//generate random coice from computer
function computerPlay(choices){
  compChoice = choices[Math.floor(Math.random() * choices.length)];
  return compChoice;
  }
//compChoice = computerPlay(choices);

//user's choice
userChoice = 'Rock';

//play the roucnd using above values and declare winner
function playRound(userChoice, compChoice) {
  if(userChoice === compChoice) {
    result = 'Tie';
    return;
  } else if ((userChoice === 'Rock' && compChoice === 'Scissors') || (userChoice === 'Scissors' && compChoice === 'Paper') || (userChoice === 'Paper' && compChoice === 'Rock')) {
    //result = 'User wins!';
    return userScore += 1;
  } else {
    //result = 'Comp beat ya faaag :p';
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
    playRound(userChoice, compChoice);

    console.log(`comp choose ${compChoice}!`);
    console.log(`user choose ${userChoice}!`);

    console.log(`scores are comp:${compScore} user:${userScore}`);
  }
  (userScore > compScore) ? winner = 'User wins' : winner = 'comp wins';
  return winner;
} 

// console.log(`comp choose ${compChoice}!`);
// console.log(`user choose ${userChoice}!`);
console.log(game(userChoice, compChoice));