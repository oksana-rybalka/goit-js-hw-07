const inputValue = document.querySelector('#name-input');
const outputSpan = document.querySelector('#name-output');
inputValue.addEventListener('input', function() {
    const cleanValue = inputValue.value.trim();
    if (cleanValue === '') {
        outputSpan.textContent = 'Anonymous';
    } else {
        outputSpan.textContent = cleanValue;    
    }
});
