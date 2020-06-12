// Greeting
let welcoming = prompt('Welcome to my Onja journal!');
let firstChoice = prompt('Choose (1) for all the entries.');
let secondChoice = prompt('Choose(2) for adding a new entry.');
let thirdChoice = prompt('Choose(3) to quit');

console.log(greeting(firstChoice, secondChoice, thirdChoice)); 

function listOfChoice(){
  let choiceContent1 = ["The weather is good.", "The wonderful recipes"];
  let choiceContent2 = ["It is sunny day.", "It is a beautiful day"];
  let choiceContent3 = ["It is a beautiful day", "The weather is good."];
    console.log(`${choiceContent1}, ${choiceContent2}, ${choiceContent3}`);

  while(listOfChoice >= 1 && listOfChoice <= 3){
    let numberOfContentChoices = prompt('Choose (1) for all the entries.');
    if (numberOfContentChoices === 1){
      console.log(listOfChoice);
    }else if (secondChoice === 2){
      listOfChoice.push("The weather is horrendous");
    }else{
     console.log("Error");
    }
  }
}