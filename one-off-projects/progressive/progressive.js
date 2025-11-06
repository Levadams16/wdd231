function validateEmail(email) {
var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return re.test(email);
}

function submitForm(event) {
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
let error = "";

if (nameInput.value === "") {
error += "Name is required.\n";
}

if (emailInput.value === "") {
error += "Email is required.\n";
} else if (!validateEmail(emailInput.value)) {
error += "Please enter a valid email address.\n";
}

if (error) {
event.preventDefault();
document.getElementById("form-error").textContent = error;
}
}

document.getElementById("contact-form").addEventListener("submit", submitForm);

// real-time validation enhancement
const emailInput = document.querySelector("#email");
const errorBox = document.getElementById("form-error");

emailInput.addEventListener("input", () => {
const value = emailInput.value.trim();

if (value === "") {
errorBox.textContent = "Email is required.";
} else if (!validateEmail(value)) {
errorBox.textContent = "Please enter a valid email address.";
} else {
errorBox.textContent = "";
}
});