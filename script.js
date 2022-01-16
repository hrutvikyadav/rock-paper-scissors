let choices = ['Rock', 'Paper', 'Scissors'];
let compChoice;
let result,
    userChoice;

//generate random coice from computer
function computerPlay(choices){
  compChoice = choices[Math.floor(Math.random() * choices.length)];
  return compChoice;
  }
compChoice = computerPlay(choices);

//user's choice
userChoice = 'Rock';

//play the roucnd using above values and declare winner
function playRound(userChoice, compChoice) {
  if(userChoice === compChoice) {
    result = 'Tie';
    return result;
  } else return 'hooray!';
}

console.log(playRound(userChoice, compChoice));