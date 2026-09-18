function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonChangeColor = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');
const body = document.body;

buttonChangeColor.addEventListener('click', hendlClick);

function hendlClick() {
  const randomColor = getRandomHexColor();
  spanColor.textContent = randomColor;
  body.style.backgroundColor = randomColor;
}
