const form = document.querySelector(".login-form");
console.log(form);

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return console.log("Please fill in all the fields!");
    }

    const mail = email.value;
    const passwordForm = password.value;

    console.log({
        mail,
        passwordForm,
    });
    event.currentTarget.reset();
});

