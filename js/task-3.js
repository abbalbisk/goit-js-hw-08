const inputName = document.querySelector('#name-input');
const spanName = document.querySelector('#name-output');

inputName.addEventListener('input', handleInputClick);
function handleInputClick() {
  const inputValue = inputName.value.trim();
  if (inputValue === '') {
    spanName.textContent = 'Anonymous';
  } else {
    spanName.textContent = inputValue;
  }
}
