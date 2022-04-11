var theDojo = [
  [1, 0, 1, 1, 1, 0, 4, 0, 8, 0],
  [3, 1, 0, 7, 0, 0, 6, 0, 8, 8],
  [5, 0, 7, 0, 3, 6, 6, 6, 0, 0],
  [2, 3, 0, 9, 0, 0, 6, 0, 8, 0],
  [6, 0, 3, 3, 0, 2, 0, 3, 0, 4],
  [0, 0, 3, 3, 0, 0, 2, 2, 3, 0],
  [0, 0, 0, 0, 5, 0, 1, 2, 0, 6],
  [2, 2, 2, 2, 0, 7, 1, 1, 1, 0],
  [5, 2, 0, 2, 0, 0, 0, 1, 1, 2],
  [9, 2, 2, 2, 0, 7, 0, 1, 1, 0],
];
var dojoDiv = document.querySelector("#the-dojo");

// Creates the rows of buttons for this game
function render(theDojo) {
  var result = "";
  for (var i = 0; i < theDojo.length; i++) {
    for (var j = 0; j < theDojo[i].length; j++) {
      result += `<button class="tatami" onclick="howMany(${i}, ${j}, this)"></button>`;
    }
  }

  return result;
}

function addSupriseNinjas(num) {
  var supriseNinjas = [];
  for (var i = 0; i < num; i++) {
    var randOuter = Math.ceil(Math.random() * theDojo.length) - 1;
    var randInner = Math.ceil(Math.random() * theDojo[randOuter].length) - 1;

    if (supriseNinjas.includes(`${randOuter}:${randInner}`)) {
      i--;
      continue;
    }

    console.log(`Surprise! ${randOuter}:${randInner}`);

    supriseNinjas.push(`${randOuter}:${randInner}`);
    theDojo[randOuter][randInner] += 1;
  }
}

// TODO - Make this function tell us how many ninjas are hiding
//        under the adjacent (all sides and corners) squares.
//        Use i and j as the indexes to check theDojo.
function howMany(i, j, element) {
  if (isNinja(i, j)) {
    return gameOver();
  }

  var sum = 0;

  for (var outer = i - 1; outer <= i + 1; outer++) {
    if (outer < 0 || outer > 9) continue;
    for (var inner = j - 1; inner <= j + 1; inner++) {
      if (inner < 0 || inner > 9) continue;
      if (outer == i && inner == j) continue;

      sum += theDojo[outer][inner];
    }
  }

  element.innerText = sum;
}

function isNinja(i, j) {
  if (theDojo[i][j] > 0) return true;
  return false;
}

function gameOver() {
  dojoDiv.innerHTML = `<button onclick="location.reload()">restart</button>`;
}

// BONUS CHALLENGES
// 1. draw the number onto the button instead of alerting it
// 2. at the start randomly place 10 ninjas into theDojo with at most 1 on each spot
// 3. if you click on a ninja you must restart the game
//    dojoDiv.innerHTML = `<button onclick="location.reload()">restart</button>`;

// start the game
// message to greet a user of the game
var style = "color:cyan;font-size:1.5rem;font-weight:bold;";
console.log("%c" + "IF YOU ARE A DOJO STUDENT...", style);
console.log("%c" + "GOOD LUCK THIS IS A CHALLENGE!", style);
// shows the dojo for debugging purposes
addSupriseNinjas(10);
console.table(theDojo);
// adds the rows of buttons into <div id="the-dojo"></div>
dojoDiv.innerHTML = render(theDojo);
