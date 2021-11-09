const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
let valueSpan = document.getElementById('value');
let counterValue = 0;

decrementBtn.addEventListener("click", () => {
    counterValue -= 1;
    
    valueSpan.textContent = counterValue;
    
});

incrementBtn.addEventListener("click", () => {
    counterValue += 1;
    
    valueSpan.textContent = counterValue;
    
});
