export function validateClient() {
  const inputSurname = document.querySelector(".input-surname");
  const inputName = document.querySelector(".input-name");
  const inputLastname = document.querySelector(".input-lastname");

  const errorSurname = document.querySelector(".error__blank-surname");
  const errorName = document.querySelector(".error__blank-name");
  const errorLastName = document.querySelector(".error__blank-lastname");

  const errorUnacceptableMeaning = document.querySelector(
    ".error__unacceptable-meaning"
  );
  const reqexp = /[^а-яА-ЯёЁ]+$/g;

  function requiredField(input, message, name) {
    input.addEventListener("input", function () {
      if (input.value.trim()) {
        input.style.borderColor = "#c8c5d1";
        message.textContent = "";
      } else {
        message.textContent = "";
      }
    });
    if (input.value === "") {
      input.style.borderColor = "var(--burnt-sienna)";
      message.textContent = `Поле ${name} обязательно для заполнения.`;
      return false;
    }

    if(input.value.length > 15) {
      input.style.borderColor = "var(--burnt-sienna)";
      message.textContent = `Поле ${name} не должно быть больше 15 символов.`;
      return false;
    } else {
      message.textContent = '';
    }

    return true;
  }
  
  function checkRegexp(input, errorBlock, name) {
    input.addEventListener("input", function () {
      input.style.borderColor = "#c8c5d1";
      errorBlock.textContent = "";
    });

    if (reqexp.test(input.value)) {
      input.style.borderColor = "red";
      errorUnacceptableMeaning.textContent = `Недопустимые значения в поле ${name}`;
      return false;
    } 

    return true;
  }

  if (!requiredField(inputSurname, errorSurname, "фамилия")) return false;
  if (!requiredField(inputName, errorName, "имя")) return false;
  if (!requiredField(inputLastname, errorLastName, "отчество")) return false;

  if (!checkRegexp(inputSurname, errorSurname, "фамилия")) return false;
  if (!checkRegexp(inputName, errorName, "имя")) return false;
  if (!checkRegexp(inputLastname, errorLastName, "отчество")) return false;

  return true;
}
