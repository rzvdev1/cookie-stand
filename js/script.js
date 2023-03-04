let myForm = document.getElementById("my-form");

function handleSubmit(event) {
  event.preventDefault();
  alert("This form has been successfully submitted!");
}

myForm.addEventListener("submit", handleSubmit);

myForm.reset();
