console.log(document);

// Before exercises

const playingField = document.getElementById("playing-field");
console.log(playingField);

const down = document.getElementById("down");
console.log(down);

console.log(down.innerHTML);
down.innerHTML = "⬇";

playingField.style.backgroundColor = "#2ecc71";

const subHeader = document.querySelector(".sub-header");
subHeader.innerHTML = "DOM Intro Exercises";

// Exercise 1 - Ball Game

const ball = document.getElementById("ball");

const moveRight = function () {
  let left = parseInt(ball.style.left) || 0;
  ball.style.left = left + 15 + "px";
};

const moveLeft = function () {
  let left = parseInt(ball.style.left) || 0;
  ball.style.left = left - 15 + "px";
};

const moveDown = function () {
  let top = parseInt(ball.style.top) || 0;
  ball.style.top = top + 15 + "px";
};

const moveUp = function () {
  let top = parseInt(ball.style.top) || 0;
  ball.style.top = top - 15 + "px";
};

document.getElementById("right").onclick = moveRight;
document.getElementById("left").onclick = moveLeft;
document.getElementById("down").onclick = moveDown;
document.getElementById("up").onclick = moveUp;

// Extension 3 - keyboard movement

document.onkeydown = function (event) {
  event.preventDefault();
  if (event.key === "ArrowRight") {
    moveRight();
  } else if (event.key === "ArrowLeft") {
    moveLeft();
  } else if (event.key === "ArrowUp") {
    moveUp();
  } else if (event.key === "ArrowDown") {
    moveDown();
  }
};

// Exercise 2 - Reservations

const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true },
};

const checkReservation = function () {
  const name = document.getElementById("reservation-input").value;
  const message = document.getElementById("reservation-message");

  if (reservations[name] && reservations[name].claimed === false) {
    message.innerHTML = `Welcome, ${name}`;
  } else if (reservations[name] && reservations[name].claimed === true) {
    message.innerHTML = "Hmm, someone already claimed this reservation";
  } else {
    message.innerHTML = "You have no reservation";
  }
};

document.getElementById("reservation-btn").onclick = checkReservation;

// Exercise 3 - Visual Overload

const boxesContainer = document.getElementById("boxes-container");

const getRandomColor = function () {
  const colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "purple",
    "orange",
    "pink",
    "#1abc9c",
    "#8e44ad",
    "#c0392b",
  ];

  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

for (let i = 0; i < 30; i++) {
  const box = document.createElement("div");
  box.setAttribute("class", "box");

  box.onmouseenter = function () {
    box.style.backgroundColor = getRandomColor();
  };

  boxesContainer.appendChild(box);
}

// Exercise 4 - Form

const validate = function () {
  const name = document.getElementById("name-input").value;
  const salary = Number(document.getElementById("salary-input").value);
  const birthday = document.getElementById("birthday-input").value;
  const phone = document.getElementById("phone-input").value;

  const errors = document.getElementById("errors");
  const formContainer = document.getElementById("form-container");
  const welcomeMessage = document.getElementById("welcome-message");

  errors.innerHTML = "";
  welcomeMessage.innerHTML = "";

  if (name.length <= 2) {
    errors.innerHTML += "<p>Name must be longer than 2 characters</p>";
  }

  if (salary <= 10000 || salary >= 16000) {
    errors.innerHTML +=
      "<p>Salary must be greater than 10,000 and less than 16,000</p>";
  }

  if (birthday === "") {
    errors.innerHTML += "<p>Birthday may not be empty</p>";
  }

  if (phone.length !== 10) {
    errors.innerHTML += "<p>Phone must be 10 digits long</p>";
  }

  if (errors.innerHTML === "") {
    formContainer.style.display = "none";
    welcomeMessage.innerHTML = `Welcome, ${name}!`;
  }
};

document.getElementById("submit-btn").onclick = validate;
