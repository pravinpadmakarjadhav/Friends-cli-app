// input 
var myVar = require('readline-sync');
var chalk = require('chalk');

var Username = myVar.question(chalk.cyanBright("Hi! What is your name?\n"));
console.log(chalk.cyanBright("Welcome " +Username + 
"\nTo the friends quiz demo app \n" ));
// Question bank
var questionBank=[  {
    question:"How many seasons of Friends are there?",
    answer:"Ten"
  }, {
    question:"How many times did Ross get divorced??",
    answer:"Three"
  },
  {
    question:"What is Janice's catchphrase?",
    answer:"oh my god"
  },
  {
    question:"What is the name of Phoebe's most iconic song?",
    answer:"smelly cat"
  },
  {
    question:"What does Ross say whenever he's accused of cheating on Rachel?",
    answer:"we were on a break"
  }]
//// Function to check Answer

function checkAnswer(question , answer){
  var userAnswer = myVar.question(chalk.yellowBright(question));
    if(userAnswer == answer){
    console.log(chalk.green("Correct."));
    score ++;
    }

    else{
    console.log(chalk.red("Wrong."));
    }
}


var score = 0;
for(var i = 0; i<questionBank.length; i++){
    current = questionBank[i];
    checkAnswer(current.question,current.answer);
  }
  console.log(chalk.yellowBright("Total = " + score + " out of " 
+ questionBank.length));

console.log(chalk.redBright("\n---------END----------"));