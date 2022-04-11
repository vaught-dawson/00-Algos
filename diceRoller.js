// function roll(sides) {
//   var roll = Math.random();
//   roll = Math.ceil(roll * sides);
//   return roll;
// }

function d6() {
  return Math.ceil(Math.random() * 6);
}

while (true) {
  let roll = d6();
  console.log(roll);
  if (roll == 0) break;
}
// var playerRoll = roll(20);
// console.log(`The player rolled: ${playerRoll}`);
