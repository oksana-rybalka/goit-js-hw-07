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
});

btnDestroy.addEventListener("click", () => {
  input.value = "";
  cleanClick()
});

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${sizes}px`;
    box.style.height = `${sizes}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.append(box);
    sizes += 10;
  }

}
function cleanClick() {
  boxes.innerHTML = "";
  sizes = 30;
}