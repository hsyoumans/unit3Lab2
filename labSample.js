//Variables
var player1 = "";
var player2 = "";

//function random damage that creates a random number
const randomDamage = () => Math.floor(Math.random() * 10 + 1);

//function choose option that picks a number between 0 and 1 to decide which player is selected.
const chooseOption = (opt1, opt2) => {
  let randNum = Math.floor(Math.random() * 2);
  return randNum === 1 ? opt2 : opt1;
}
const option = chooseOption(1,4);

//function attack player
const attackPlayer = function (health) {
  return health - randomDamage();
}
//console.log('attack player', attackPlayer(10));

//function log health which logs the health of the players
const logHealth = (player, health) => {
  console.log(`${player} health: ${health}`);
}

//function log death which logs the defeat (death) of a player
const logDeath = (winner, loser) => console.log(`${winner} defeated ${loser}`);

//Function is dead confirms that player is out of game
const isDead = (health) => health <= 0 ? true : false;

//function fight which begins the game
function fight (player1, player2, player1Health, player2Health) {
  while (true) {
    const attacker = chooseOption("player1", "player2");
    if (attacker == "player 1") {
      player2Health = attackPlayer(player2Health);
      logHealth(player2, player2Health);
      if (isDead(player2Health) == true) {
        logDeath(player1, player2);
        break;
      }
    }
    else {
      player1Health = attackPlayer(player1Health);
      logHealth(player1, player1Health);
      if (isDead(player1Health) == true) {
        logDeath(player2, player1);
        break;
      }
    }
  }
}
fight("Mitch Cuckovich", "Adam Hire", 100, 100);

//function printSquare
function printSquare(num){
  const squareArray = [];
  let output;
  for(i = 0; i < num; i++){
    output = "";
      for(j = 0; j < num; j++){
        output += "#";
      }
      squareArray.push(output);
  }
  return squareArray.join("\n")
}
console.log(printSquare(5));

//function printTriangle
function printTriangle(length) {
  var line = "";
  for (i = 1; i <= length; i++) {
    line+="#".repeat(i)+"\n";
  }
  return line;
}
console.log(printTriangle(8));

//function printPyramid will print a pyramid out of #'s
function printPyramid(p) {
  for(let i = 1; i <= p; i++){
    let str = ' '.repeat(p - i);
    let str2 = '#'. repeat(i * 2 - 1);
    console.log(str + str2 + str);
  }
}
printPyramid(6);

//function getGrade will randomly generate a number grade and translate it into a letter grade
function getGrade(grade) {
  switch (true) {
    case (grade >= 90):
      newGrade = "A";
      break;
    case (grade >= 80):
      newGrade = "B";
      break;
    case (grade >= 70):
      newGrade = "C";
      break;
    case (grade >= 60):
      newGrade = "D";
      break;
    default:
      newGrade = "E";
  }
  return newGrade;
}
console.log("The grade is: " + getGrade(Math.floor(Math.random() * 101 + 1)));

//function prioritize will randomly generate a number between 1 - 4 and set it's priority
function prioritize(urgent, important) {
  if (urgent == true && important == true) {
      console.log("Priority is: urgent and important");
  }
  else if (urgent == false && important == true) {
      console.log("Priority is: important not urgent");
  }
  else if (urgent == true && important == false) {
      console.log("Priority is: urgent not important");
  }
  else {
    console.log("Priority is: neither urgent nor important");
  }
}
prioritize(false, true);
