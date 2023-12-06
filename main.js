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

function trackUserHandler(buttonId) {
  console.log(`You Clicked The Button with the ${buttonId} Id`);
}

const reset = () => {
  window.location.reload();
};

const addImage = () => {
  console.log("clicked");
  const url = "http://placekitten.com/200/300";
  document.querySelector("img").setAttribute("src", url);
  document.querySelector("img").setAttribute("alt", "kitten");
  document.querySelector("img").classList.add("img");
  document.querySelector(".add-bg").setAttribute("disabled", true);
};
document.querySelector(".add-bg").addEventListener("click", addImage);

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

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", (e) => {
    console.log(e.target.checked);
    if (e.target.checked) {
      console.log("checked");
      console.log(checkbox.parentElement);
      const p = document.createElement("p");
      p.innerHTML = "This checkbox is checked";
      checkbox.parentElement.appendChild(p);
    }
    if (!e.target.checked) {
      console.log("unchecked");
      console.log(checkbox.parentElement);
      checkbox.parentElement.lastChild.remove();
    }
  });
});
