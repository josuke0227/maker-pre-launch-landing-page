const emailInput = document.getElementById("email-input");
const submitButton = document.getElementById("submit-button");
const errorMessage = document.getElementById("error-message");

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const data = { email: "" };

emailInput.addEventListener("input", displayValue);
submitButton.addEventListener("click", handleSubmit);

function displayValue() {
  data.email = emailInput.value;
  console.log(data);
}

function handleSubmit(e) {
  e.preventDefault();
  const errorClass = "form__input--error";
  const messageHidden = "message-collapse";

  if (emailRegex.test(data.email)) {
    errorMessage.classList.add(messageHidden);
    emailInput.classList.remove(errorClass);
    return alert("Thank you for subscription!");
  }

  errorMessage.classList.remove(messageHidden);
  return emailInput.classList.add(errorClass);
}
