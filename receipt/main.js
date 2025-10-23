const USERS = [
  {
    color: "#7fffd4",
    name: "You",
    paid: true,
  },
  {
    color: "#ffcc7f",
    name: "HTML",
    paid: true,
  },
  {
    color: "#ac7fff",
    name: "CSS",
    paid: true,
  },
  {
    color: "#94ff7f",
    name: "JavaScript",
    paid: false,
  },
  {
    color: "#7ffff9",
    name: "Web Dev",
    paid: false,
  },
];

let usersIndex = 0;
let ballsIndex = 0;
const baseDelay = 500;
const delayOffset = 500;
let animateUsersIntervalId;
let animateBallsIntervalId;

function animateBalls() {
  let balls = document.querySelectorAll(".ball");
  let bar_2 = document.getElementById("bar_2");
  let stage = balls.length - 2;
  let ballsPosition = [];
  balls.forEach((_, idx) => {
    let val = idx * Math.round(90 / (balls.length - 1));
    ballsPosition.push(val);
  });

  if (ballsIndex >= balls.length) {
    clearInterval(animateBallsIntervalId);
    flap.style.backgroundColor = "red";
  }

  if (ballsIndex < balls.length) {
    balls[ballsIndex].style.left = `${ballsPosition[ballsIndex]}%`;
    balls[ballsIndex].style.zIndex = "1";
    bar_2.style.width = `calc(${ballsPosition[ballsIndex]}% + 20px) `;
    if (ballsIndex === stage) {
      balls[ballsIndex].style.backgroundColor = "black";
      ballsIndex = balls.length;
    } else {
      ballsIndex++;
    }
  }
}
function animateUsers() {
  let users = document.getElementById("users");
  let print = document.getElementById("print");
  if (usersIndex >= USERS.length) {
    clearInterval(animateUsersIntervalId);
    print.style.left = "91%";
    animateBallsIntervalId = setInterval(animateBalls, 1000);
  }

  if (usersIndex < USERS.length) {
    const li = document.createElement("li");
    const divUser = document.createElement("div");
    const divLabel = document.createElement("div");
    const divAvatar = document.createElement("div");
    const divBadge = document.createElement("div");
    const pName = document.createElement("p");
    const pStatus = document.createElement("p");
    li.classList.add("list");
    divUser.classList.add("user");
    divLabel.classList.add("label");
    divAvatar.classList.add("avatar");
    pName.classList.add("text-xs");
    pStatus.classList.add("text-xs");
    divAvatar.style.backgroundColor = USERS[usersIndex].color;
    divAvatar.innerText = USERS[usersIndex].name.slice(0, 1);
    divBadge.classList.add("badge");
    if (USERS[usersIndex].paid) {
      divBadge.classList.add("badge-paid");
      pStatus.innerText = "Paid";
    } else {
      divBadge.classList.add("badge-unpaid");
      pStatus.innerText = "Unpaid";
    }
    pName.innerText = USERS[usersIndex].name;
    divUser.appendChild(divAvatar);
    divUser.appendChild(pName);
    divLabel.appendChild(divBadge);
    divLabel.appendChild(pStatus);
    li.appendChild(divUser);
    li.appendChild(divLabel);
    users.append(li);
    usersIndex++;
  }
}

window.addEventListener("DOMContentLoaded", () => {
  let receipt = document.getElementById("receipt");
  let footer = document.getElementById("footer");
  let buttons = document.getElementById("buttons");
  let payment = document.getElementById("payment");
  let bills = document.getElementById("bills");
  let location = document.getElementById("location");

  receipt.style.height = `auto`;

  setTimeout(() => {
    buttons.style.display = "flex";
  }, baseDelay);

  setTimeout(() => {
    payment.style.display = "block";
  }, baseDelay * 2 + delayOffset);
  setTimeout(() => {
    bills.style.display = "block";
  }, baseDelay * 3 + delayOffset);
  setTimeout(() => {
    location.style.display = "block";
  }, baseDelay * 4 + delayOffset);

  footer.style.top = "-65px";

  setTimeout(() => {
    animateUsersIntervalId = setInterval(animateUsers, 1000);
  }, 2000);

  setTimeout(() => {
    footer.style.opacity = "1";
  }, 11500);
});
