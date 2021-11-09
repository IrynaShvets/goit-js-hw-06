const inputControl = document.getElementById("font-size-control");
const spanText = document.getElementById("text");


inputControl.addEventListener("input", (event) => {
    spanText.style.fontSize = `${event.currentTarget.value}px`;
 
})

