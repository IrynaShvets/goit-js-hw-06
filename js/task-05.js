const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", (event) => {
    
    const textInput = event.currentTarget.value;
    
    if (!textInput) {
	        nameOutput.textContent = 'Anonymous';
	    } else {
	        nameOutput.textContent = textInput;
	    }

});



