console.log("start");
var a = true;

function learning() {
  return "I'm learning...";
}

function playGame(game) {
  return `I'm playing ${game}. My name is ${this.name}.`;
}

var person = {
  age: 25,
  name: "Catalin",
  skills: ["html", "css", `js`],
  learn: learning,
  play: playGame,
};

var person1 = {
  age: 25,
  name: "Catalin",
  skills: ["html", "css", `js`],
  learn: learning,
  play: playGame,
};

var l = person.learn();
console.log(person.learn());

console.warn(person.play("chess"));
