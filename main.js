const button = document.querySelector("#btn");
const output = document.querySelector("p");
const buttonTwo = document.getElementById("btn2");
const title = document.querySelector(".h1");
const div = document.querySelector(".firstContainer");
const resetBtn = document.querySelector("#reset");
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
console.log({ checkboxes });

const randomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 265);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
};

// This function will not execute immediately, but will be executed when the button is clicked
function trackUserHandler(buttonId) {
  console.log(`You Clicked The Button with the ${buttonId} Id`);
}

const reset = () => {
  window.location.reload();
};

button.addEventListener("click", () => {
  trackUserHandler(button.id);
  button.classList.toggle("red-bg");
  if (button.classList.contains("red-bg")) {
    button.innerHTML = "Clicked";
    output.innerHTML = `<h2>This is an H2</h2>`;
    div.appendChild(title);
    // title.remove();
  }
  if (!button.classList.contains("red-bg")) {
    div.prepend(title);
    button.innerHTML = "Click Me";
    output.innerText = "Back to Normal";
  }
});

buttonTwo.addEventListener("click", () => {
  trackUserHandler(buttonTwo.id);
  const newP = document.createElement("p");
  newP.innerHTML = "This is a new paragraph";
  newP.style.color = randomColor();
  buttonTwo.classList.toggle("green-bg");
  div.appendChild(newP);
  if (buttonTwo.classList.contains("green-bg")) {
    buttonTwo.innerHTML = "Clicked";
  }
  if (!buttonTwo.classList.contains("green-bg")) {
    buttonTwo.innerHTML = "Click Me";
  }
});

resetBtn.addEventListener("click", reset);
