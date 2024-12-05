const button = document.querySelector("#button");
const wrap = document.querySelector("#wrap");
const invisiblebutton = document.querySelector("#invisiblebutton");
const body = document.querySelector("body");
const textInput = document.querySelector("#textInput");
const lengthDisplay = document.querySelector("#lengthDisplay");
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const text = document.querySelector("#text");

let color = true;
let backgroundColor = true;

button.addEventListener("click", function () {
  button.style.color = color ? "black" : "white"; // Tugma matni rangini o‘zgartirish
  color = !color;

  backgroundColor = !backgroundColor;
  body.style.backgroundColor = backgroundColor
    ? "black"
    : `#${Math.floor(Math.random() * 16777215).toString(16)}`;
});


button.addEventListener("click", function () {
  color = !color;
  title.style.color = color ? "black" : "white";
  title.style.display = title.style.display === "none" ? "block" : "none";

  backgroundColor = !backgroundColor;
  body.style.backgroundColor = backgroundColor
    ? "black"
    : `#${Math.floor(Math.random() * 16777215).toString(16)}`;
});

invisiblebutton.addEventListener("click", function () {
  if (wrap.style.display === "none") {
    wrap.style.display = "block";
    invisiblebutton.textContent = "Tugmalarni yashirish";
  } else {
    wrap.style.display = "none";
    invisiblebutton.textContent = "Tugmalarni ko‘rsatish";
  }
});

textInput.addEventListener("input", function (e) {
  const length = e.target.value.length;
  lengthDisplay.textContent = `Uzunlik: ${length}`;
});

function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  document.getElementById("clock").textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);
updateClock();

button1.addEventListener("click", () => {
  text.style.display = "none";
});

button2.addEventListener("click", () => {
  text.style.display = "block";
});
