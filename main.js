const button = document.querySelector("#btn");
const output = document.querySelector("p");
const buttonTwo = document.getElementById("btn2");
const title = document.querySelector(".h1");
const div = document.querySelector(".firstContainer");
const resetBtn = document.querySelector("#reset");
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
console.log({ checkboxes });

// random color function
const randomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 265);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
};

// function declaration
function trackUserHandler(buttonId) {
  console.log(`You Clicked The Button with the ${buttonId} Id`);
}

// arrow function
const reset = () => {
  window.location.reload();
};

// arrow function
const addImage = () => {
  console.log("clicked");
  // set my url to a variable
  const url = "assests/pexels-pixabay-416160.jpg";
  // set the src and alt attributes of the image
  document.querySelector("img").setAttribute("src", url);
  document.querySelector("img").setAttribute("alt", "kitten");
  // add the img class to the image
  document.querySelector("img").classList.add("img");
  // disable the button
  document.querySelector(".add-bg").setAttribute("disabled", true);
};

// event listener without declaring a variable
document.querySelector(".add-bg").addEventListener("click", addImage);

// event listener on declared a variable
// includes if statement to check if the button has the class of red-bg
button.addEventListener("click", () => {
  trackUserHandler(button.id);
  button.classList.toggle("red-bg");
  if (button.classList.contains("red-bg")) {
    button.innerHTML = "Clicked";
    output.innerHTML = `<h2>This is an H2</h2>`;
    div.appendChild(title);
  }
  if (!button.classList.contains("red-bg")) {
    div.prepend(title);
    button.innerHTML = "Click Me";
    output.innerText = "Back to Normal";
  }
});

// event listener on declared a variable
// includes if statement to check if the button has the class of green-bg
buttonTwo.addEventListener("click", () => {
  trackUserHandler(buttonTwo.id);
  // create a new paragraph element
  const newP = document.createElement("p");
  // add text to the paragraph
  newP.innerHTML = "This is a new paragraph";
  // add a random color to the paragraph
  newP.style.color = randomColor();
  // toggle the class of green-bg
  buttonTwo.classList.toggle("green-bg");
  // append the new paragraph to the div
  div.appendChild(newP);
  // if the button has the class of green-bg, change the text
  if (buttonTwo.classList.contains("green-bg")) {
    buttonTwo.innerHTML = "Clicked";
  }
  // if the button does not have the class of green-bg, change the text
  if (!buttonTwo.classList.contains("green-bg")) {
    buttonTwo.innerHTML = "Click Me";
  }
});

// event listener on declared a variable
// uses my reset function to reload the page
resetBtn.addEventListener("click", reset);

// map over the checkboxes and add an event listener to each
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", (e) => {
    console.log(e.target.checked);
    // if the checkbox is checked, add a paragraph to the parent element
    if (e.target.checked) {
      console.log("checked");
      console.log(checkbox.parentElement);
      // create a new paragraph element
      const p = document.createElement("p");
      // add text to the paragraph
      p.innerHTML = "This checkbox is checked";
      // append the paragraph to the parent element
      checkbox.parentElement.appendChild(p);
    }
    // if the checkbox is unchecked, remove the paragraph from the parent element
    if (!e.target.checked) {
      console.log("unchecked");
      console.log(checkbox.parentElement);
      checkbox.parentElement.lastChild.remove();
    }
  });
});
