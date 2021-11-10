const validationInput = document.getElementById("validation-input");
const inputLength = parseInt(validationInput.dataset.length);

const changeColorBorderInput = (event) => {
    const inputValue = event.target.value.trim().length;
    validationInput.classList.add("invalid");

  if (inputValue === inputLength) {
	 validationInput.classList.replace('invalid', 'valid');
	 
  } else {
	  validationInput.classList.replace('valid', 'invalid');
 }
	      
};

validationInput.addEventListener("blur", changeColorBorderInput);

