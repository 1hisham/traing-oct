let input = document.querySelectorAll(".input");
const submit = document.querySelector(".submit");
const displayEl = document.querySelector(".display");
const addBtn = document.querySelector(".addbtn");
const container = document.querySelector(".input-container");

let totalNumbers = [];

// TAKE INPUT AND STORE TO AN ARRAY

myfun();

function myfun() {
  input.forEach((box) => {
    box.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        if (totalNumbers.indexOf(Number(box.value)) === -1) {
          totalNumbers.push(Number(box.value));
        }
      }
    });
  });
}

// GRATEST NUMBER FUNTION

function greatest(totalNumbers) {
  console.log(totalNumbers);

  let greatestNumber = totalNumbers[0];

  for (let i = 0; i < totalNumbers.length; i++) {
    if (greatestNumber < totalNumbers[i]) {
      greatestNumber = totalNumbers[i];
    }
  }
  return greatestNumber;
}

//SUBMIT BUTTON
submit.addEventListener("click", () => {
  displayElement = greatest(totalNumbers);
  console.log(displayElement);
  displayEl.innerHTML = displayElement;
});

// WHEN ADD BUTTON ADDING INPUTS
addBtn.addEventListener("click", () => {
  let newElement = document.createElement("input");
  newElement.classList.add("input");
  newElement.setAttribute("type", "number");
  container.appendChild(newElement);
  input = document.querySelectorAll(".input");
  myfun();
});
