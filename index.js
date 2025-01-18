let user = [];
let game = [];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");
let time = document.getElementById("time");
let btns = ["one", "two", "three", "four"];
let speed = 1000;
let clicktimer = 15;
let clickcounttdown;
document.addEventListener("click", function () {
  if (started == false) {
    // console.log("game is start");
    started = true;
    levelup();
  }
});
function start(btn) {
  btn.classList.add("newcolor");
  setTimeout(function () {
    btn.classList.remove("newcolor");
  }, 250);
}
function flexbtn(btn) {
  btn.classList.add("nvbtn");
  setTimeout(function () {
    btn.classList.remove("nvbtn");
  }, 500);
}
let clickCountdown;

function startClickCountdown() {
  h3 = 15; // Reset to 5 seconds at the start of every turn
  updateClickTimer();

  clearInterval(clickCountdown); // Clear any existing timer

  clickCountdown = setInterval(function () {
    h3--;
    updateClickTimer();

    // If the timer hits 0, end the game
    if (h3 <= 0) {
      clearInterval(clickCountdown);
      endGame(); // Game over
    }
  }, 1000); // Run every 1 second
}
function endGame() {
  h2.innerHTML = `Time's up! <h2>Your Score: ${level}</h2>`;
  document.querySelector("body").style.backgroundColor = "red";
  setTimeout(function () {
    document.querySelector("body").style.backgroundColor =
      "rgba(219, 219, 7, 0.776)";
  }, 150);
  resat(); // Reset the game
}

function levelup() {
  user = [];
  level++;
  h2.innerText = `level ${level}`;
  let rendind = Math.floor(Math.random() * 3);
  let randcolor = btns[rendind];
  let rendbtn = document.querySelector(`.${randcolor}`);
  game.push(randcolor);
  // console.log(game);
  start(rendbtn);
  startClickCountdown();
  speed = Math.max(250, speed - 50);
  h3 = Math.max(0, h3 - 1);
  // console.log(rendind);
  // console.log(randcolor);
  // console.log(rendbtn);
}

function chackAns(idx) {
  if (user[idx] === game[idx]) {
    if (user.length == game.length) {
      setTimeout(levelup, 0);
    }
  } else {
    h2.innerHTML = `game over <h2>your scour is ${level}</h2><br> plase press any key to start game`;
    document.querySelector("body").style.backgroundColor = "rgb(255, 255, 255)";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor =
        "rgba(219, 219, 7, 0.776)";
    }, 150);
    resat();
  }
}
function btnpres() {
  let btn = this;
  flexbtn(btn);
  // console.log(this);

  usercolor = btn.getAttribute("id");
  console.log(usercolor);
  user.push(usercolor);
  chackAns(user.length - 1);
}
let Allbtn = document.querySelectorAll(".btn");
for (btn of Allbtn) {
  btn.addEventListener("click", btnpres);
}
function updateClickTimer() {
  time.innerText = `Click Timer: ${h3}s`;
}
function resat() {
  started = false;
  game = [];
  user = [];
  level = 0;
  speed = 1000;
  clearInterval(clickCountdown);
  h3 = 15;
  updateClickTimer();
}
