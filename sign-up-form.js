const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const form = document.querySelector("form");
const errorMessage = document.querySelector(".error-message");

form.addEventListener("submit", (event) => {
    if (password.value !== confirmPassword.value) {
        event.preventDefault();
        password.classList.add("error");
        confirmPassword.classList.add("error");
        errorMessage.textContent = "Passwords do not match"
    } else {
        password.classList.remove("error");
        confirmPassword.classList.remove("error");
        errorMessage.textContent = "";
    }
});