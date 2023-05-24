const form = document.querySelector(".contacts__form-order");
const telSelector = form.querySelector('input[type="tel"]');
const inputMask = new Inputmask("+7 (999)999-99-99");
inputMask.mask(telSelector);

new window.JustValidate(".contacts__form-order", {
  rules: {
    tel: {
      required: true,
      function: () => {
        const phone = telSelector.inputmask.unmaskedvalue();
        return Number(phone) && phone.length === 10;
      },
    },
  },
  colorWrong: "#d11616",
  messages: {
    name: {
      required: "Введите имя",
      minLength: "Имя должно состоять минимум из 3-х букв",
      maxLength: "Имя не может содержать столько символов!",
    },
    tel: {
      required: "Введите телефон",
      function: 'Здесь должно быть 10 символов в формате "+7920"',
    },
  },

  submitHandler: function (thisForm) {
    let formData = new FormData(thisForm);
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log("Отправлено");
        }
      }
    };

    xhr.open("POST", "mail.php", true);
    xhr.send(formData);
    thisForm.reset();
  },
});
