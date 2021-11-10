const inputControl = document.getElementById("font-size-control");
const spanText = document.getElementById("text");
inputControl.setAttribute("value", 50);
spanText.style.fontSize = "50px";


inputControl.addEventListener("input", () => {
    spanText.style.fontSize = inputControl.value + "px";
 
});
