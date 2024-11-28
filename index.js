const button = document.querySelector("#button");
const wrap = document.querySelector("#wrap");
const invisiblebutton = document.querySelector("#invisiblebutton");
const title = document.querySelector("#title");
const body = document.querySelector("body");
const DayAndNight = document.querySelector(".DayAndNight");



const image = document.querySelector('#image');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
let currentImage = 1;

image.src = `images/${currentImage}.jpg`;

function imageUpdater(index) {
  image.src = `images/${index}.jpg`;
}

function prevFunc() {
  if (currentImage > 1) {
    currentImage--;
  } else {
    currentImage = 10; x
  }
  imageUpdater(currentImage);
}

function nextFunct() {
  if (currentImage < 10) {
    currentImage++;
  } else {
    currentImage = 1; 
  }
  imageUpdater(currentImage);
}

prev.addEventListener('click', prevFunc);
next.addEventListener('click', nextFunct);




button.style.backgroundColor = "white";
button.style.borderRadius = "8px";
button.style.borderColor = "blue";
button.style.marginBottom = "15px";
button.style.marginRight = "30px";

invisiblebutton.style.borderRadius = "9px";
invisiblebutton.style.marginTop = "10px";
invisiblebutton.style.padding = "3px";
invisiblebutton.style.borderColor = "blue";
invisiblebutton.style.marginBottom = "15px";
invisiblebutton.style.backgroundColor = "white";

let color = true;
let backgroundColor = true;
button &&
  button.addEventListener("click", function () {
    if (color) {
      title.style.color = "white";
      color = false;
    } else {
      title.style.color = "white";
      color = true;
    }
    if (title.style.display === "none") {
      title.style.display = "block";
    } else {
      title.style.display = "none";
    }

    if (backgroundColor) {
      body.style.backgroundColor =
        "#" + Math.floor(Math.random() * 16777123).toString(16);
      backgroundColor = false;
    } else {
      body.style.backgroundColor = "black";
      backgroundColor = true;
    }
  });

button &&
  invisiblebutton.addEventListener("click", function () {
    if (wrap.style.display === "none") {
      wrap.style.display = "block";
      invisiblebutton.textContent = "Tugmalarni yashirish";
    } else {
      wrap.style.display = "none";
      invisiblebutton.textContent = "Tugmalarni korsatish";
    }
  });

function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  document.getElementById(
    "clock"
  ).textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);
updateClock();
