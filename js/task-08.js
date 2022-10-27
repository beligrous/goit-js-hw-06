const formElem = document.querySelector(".login-form");

function onFormLoginSubmit(e) {
  e.preventDefault();
  const { email, password } = e.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("Всі поля повинні бути заповнені !");
  }
  console.log(`Email: ${email.value}, Password:${password.value}`);
  e.currentTarget.reset;
}
formElem.addEventListener("submit", onFormLoginSubmit);
