function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btn = document.querySelector('.change-color');
const box = document.querySelector('body');
const spanElement = document.querySelector('.color');
btn.addEventListener('click', handleClick);
function handleClick(event) {
box.style.background = getRandomHexColor();
spanElement.textContent = box.style.background;
}
  