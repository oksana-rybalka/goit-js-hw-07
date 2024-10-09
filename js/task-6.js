function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector("input");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");
let sizes = 30;

btnCreate.addEventListener("click", () => {
   if (input.value < 1 || input.value > 100) {
    return;
  }
  createBoxes(input.value);
  input.value = "";
  sizes = 30
});

btnDestroy.addEventListener("click", () => {
  input.value = "";
  boxes.innerHTML = "";
  sizes = 30;
});

function createBoxes(amount) {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${sizes}px`;
    box.style.height = `${sizes}px`;
    box.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(box);
    sizes += 10;
    boxes.innerHTML = "";
  }
  boxes.append(fragment);

}
   

