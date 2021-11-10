
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

let body = document.body;

const buttonChangeColor = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");


  
buttonChangeColor.addEventListener("click", (event) => {
  const color = getRandomHexColor();
  spanColor.textContent = color;

 if (event.currentTarget.classList.contains("change-color")) {
   return body.style.background = color;
  }
  
});


