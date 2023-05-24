export function validateContact(type, input) {
  const requiredValue = document.querySelector(".error__required-field");
 
  


   input.addEventListener('input', function() {
     input.style.borderColor = 'var(--color-grey)';
     requiredValue.textContent = '';
   })


 function showMessage(message, block, input) {
  block.textContent = message;
  input.style.borderBottom = '1px solid var(--burnt-sienna)';
 }


 if(!input.value) {
  showMessage('Заполните все поля контактов', requiredValue, input);
  return false;
}

switch(type.innerHTML) {
  case 'Телефон':
    if(checkNumbers.test(input.value)) {
      showMessage('Допустимы только цифры', requiredValue, input);
      return false;
    } else if(input.value.length !== 11) {
      showMessage(`Номер должен состоять из 11 цифр`, requiredValue, input);
      return false;
    } 
    return true;
   case 'Email':
    if(checkEmail.test(input.value)) {
      showMessage('Неверный email', requiredValue, input);
      return false;
    }
    return true;
    default:
      return true;

}
}