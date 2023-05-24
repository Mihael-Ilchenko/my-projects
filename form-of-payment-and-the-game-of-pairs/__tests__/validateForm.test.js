 import { checkCardData, checkCodeCvc } from "../src/js/payment/validateForm.js";
 import { createForm } from '../src/js/payment/createForm.js';



 //checkCardData(value, type) =>  нет ошибки:false  : есть ошибка:true
 describe('Валидация номера карты', () => {

     const typeNumber = 'card-number';

     test('номер карты принимает от 16-18 цифр', () => {
         expect(checkCardData('5404364542267233', typeNumber).errors.isVal).toBe(false); //16
         expect(checkCardData('540436454226723377', typeNumber).errors.isVal).toBe(false); //18
     })
     test('номер карты не пропускает произвольную строку', () => {
         expect(checkCardData('qwerty', typeNumber).errors.isVal).toBe(true);
         expect(checkCardData('.,/[]\';\'', typeNumber).errors.isVal).toBe(true);
     })
     test('Номер карты не пропускает строку с недостаточным количеством цифр', () => {
         expect(checkCardData('540436454226', typeNumber).errors.isVal).toBe(true); //12
         expect(checkCardData('3694', typeNumber).errors.isVal).toBe(true); //4
         expect(checkCardData('', typeNumber).errors.isVal).toBe(true); //''
     });
     test('Номер карты не пропускает строку со слишком большим количеством цифр', () => {
         expect(checkCardData('5404364542267233368', typeNumber).errors.isVal).toBe(true); //19
         expect(checkCardData('540436942903817736942903', typeNumber).errors.isVal).toBe(true); //25
     })
 })

 describe('Валидация CVV/CVC', () => {
     const typeCVC = 'cvc'
     test('Пропускает строку с тремя цифровыми символами', () => {
         expect(checkCardData('123', typeCVC).errors.isVal).toBe(false);
     })
     test('Не пропускает строки с 1-2 цифровыми символами', () => {
         expect(checkCardData('12', typeCVC).errors.isVal).toBe(true);
         expect(checkCardData('2', typeCVC).errors.isVal).toBe(true);
     });
     test('Не пропускает строки с 4+ цифровыми символами', () => {
         expect(checkCardData('2789', typeCVC).errors.isVal).toBe(true);
         expect(checkCardData('456789', typeCVC).errors.isVal).toBe(true);
     })
     test('Не пропускает строки с тремя нецифровыми символами', () => {
         expect(checkCardData('tes', typeCVC).errors.isVal).toBe(true);
         expect(checkCardData('тест', typeCVC).errors.isVal).toBe(true);
     })

 })

 describe('Проверка функции создания DOM-дерева', () => {
     test('возвращает DOM-элемент, в котором содержится четыре поля для ввода с плейсхолдерами «Номер карты», «ММ/ГГ», CVV/CVC, Email', () => {
         const form = createForm().createFormTest()
         const regex = `<div><input class=" payment__input" placeholder="Номер карты" name="card-number:" id="cardNumber"><input class=" payment__input" placeholder="ММ/ГГ" name="validity-period:" id="termAction"><input class=" payment__input" placeholder="CVV/CVC" name="cvc:" id="cvc"><input class=" payment__input" placeholder="Email" name="email:" id="email"></div>`;
         expect(form.outerHTML).toBe(regex)
     })
 });
