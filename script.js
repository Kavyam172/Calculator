let inputs = document.querySelectorAll('.inputs');
let display = document.querySelector('#display');
let clear = document.querySelector('#clear');
let equals = document.querySelector('#equals');
let backspace = document.querySelector('#clear-one');
inputs.forEach(e => {
    e.addEventListener('click', () => {
        display.value+=e.value;
    });
});

clear.addEventListener('click', () => {
    display.value = '';
});

equals.addEventListener('click', () => {
    let result = eval(display.value);
    display.value = result;
});

backspace.addEventListener('click', () => {
    display.value = display.value.slice(0, -1);
});