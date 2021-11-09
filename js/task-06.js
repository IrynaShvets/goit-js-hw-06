const validationInput = document.getElementById("validation-input");

const changeColorBorderInput = () => {

   if (validationInput.value.length == validationInput.dataset.length) {
       validationInput.classList.add("valid");
       
   }
   else {
       validationInput.classList.add("invalid");
  }
         
};

validationInput.addEventListener("blur", changeColorBorderInput);

