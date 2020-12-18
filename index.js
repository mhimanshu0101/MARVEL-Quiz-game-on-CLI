const chalk = require('chalk');
var readlineSync = require('readline-sync');

var score = 0;
// objects to keep highest scores data
var highScores = [
  {
    name: "Himanshu",
    score: 12 
  },
  {
    name: "Pooja",
    score: 10
  }
]

// friendly print function
function print(data){
  console.log(chalk.yellow.bold(data));
}

function play(question, answer){
  // correct answer response, to avoid index issue for array keeping size same.
  var rightResponse = [
    "Good One",
    "Right, Keep Going",
    "Nice",
    "Superb",
    "Awesome"
  ];
  // wrong answer response
  var wrongResponse = [
    "Incorrect",
    "Try another one",
    "Oops",
    "Wrong",
    "Bad"
  ];
  // Generate random response seletion
  var randomRightIndex = Math.floor(Math.random()*rightResponse.length);
  // var randomWrongResponse = Math.floor(Math.random()*wrongResponse.length);

  // Display question to user screen
  console.log(chalk.red(question))
  console.log('To quit type "exit" anytime.')
  var answered = '';
  var correct_options = ['A', 'B', 'C', 'D', 'EXIT'];

  // checks to verify correct option seletion
  while(!(correct_options.includes(answered.toUpperCase()))){
    answered = readlineSync.question('Select correct option: ');
  }

  // Exit the game
  if (answered.toUpperCase() === 'EXIT'){
    console.log(chalk.bgRed('GAME OVER !'))
    process.exit(0)
  }

  // process answer
  if (answered.toUpperCase() === answer.toUpperCase()){
      score++;
      console.log(chalk.green(rightResponse[randomRightIndex]));
  } else {
    console.log(chalk.green(wrongResponse[randomRightIndex]));
  }
  console.log('Current Score: '+ score);
}

print('Hey I am Jade! ')
print('This is MARVEL CLI Quiz game and I am your host, Who will be asking few easy questions.')
print('Welcome '+readlineSync.question('May I have your name? '))

var questionArray = [
  {
    question:`Who made Captain America’s shield? 
    a: Howard Stark
    b: Sherlock Holmes
    c: Tony Stark
    d: Mjolnir
    `,
    answer: "a"
  },
  {
    question: `Unlike the comics, who created Ultron in Avengers: Age of Ultron? 
    a: Edward Norton
    b: Mjolnir
    c: Don Cheadle
    d: Iron Man
    `,
    answer: "d"
  },
  {
    question: `Which beloved comic book writer has cameoed in every Marvel film up to Avengers: Endgame? 
    a: The Avengers
    b: Stan Lee
    c: Star-Lord
    d: Goose
    `,
    answer: "b"
  },
  {
    question: `Before he was Captain America, which member of the Fantastic Four did Chris Evans play? 
    a: S.H.I.E.L.D
    b: The Winter Soldier
    c: Quantum Realm
    d: The Human Torch
    `,
    answer: "d"
  },
  {
    question: `What is Captain America’s shield made out of?
    a: Meteroid
    b: Uranium
    c: Thorium
    d: Vibranium
    `,
    answer: "d"
  },
  {
    question: `What is Black Widow’s real name? 
    a: Goose
    b: Natasha Romanoff
    c: Matt Damon
    d: Michael Keaton
    `,
    answer: "b"
  },
  {
    question: `On what planet was the Soul Stone hidden in Infinity War? 
    a: Asgardian
    b: Nowhere
    c: Vormir
    d: Wakanda
    `,
    answer: "c"
  },
  {
    question: `Which infamous aquatic bird cameos in the post-credit scene of Guardians of the Galaxy? 
    a: Howard the Duck
    b: Groot
    c: Thor
    d: Hydra
    `,
    answer: "a"
  },
  {
    question: `Which former Doctor Who companion plays cyborg assassin Nebula? 
    a: Matt Damon
    b: Frost Giant
    c: Karen Gillan
    d: Tony Stark/Iron Man
    `,
    answer: "c"
  },
  {
    question: `What is the name of Thor’s hammer?
    a: Jarvis
    b: Mjolnir
    c: Vibranium
    d: The Human Torch
    `,
    answer: "b"
  },
  {
    question: `Who played Bruce Banner in The Incredible Hulk?
    a: Jarvis
    b: Sherlock Holmes
    c: Edward Norton
    d: Michael Keaton
    `,
    answer: "c"
  },
  {
    question: `What species is Loki revealed to be?
    a: Frost Giant
    b: Don Cheadle
    c: Vibranium
    d: Hydra
    `,
    answer: "a"
  }
]
var i = 0;
while (i< questionArray.length){
  play(questionArray[i].question, questionArray[i].answer)
  i++;

  // check level
  if(score%5 === 0){
    print('Congratulation! You have cleared level: '+~~(score/5))
  }
}
print('YAY! you scored: '+score)
print('<-----------Highest scorer------------->')
var j = 0

while (j<highScores.length){
  console.log(chalk.cyan(j+1+'. '+highScores[j].name+': '+highScores[j].score))
  j++;
}
print("If you have broken the record, to update mail me screenshot at mhimanshu0101@gmail.com")