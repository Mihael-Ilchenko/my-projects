import Inputmask from 'inputmask';
import { createModalNotification, checkingData } from '../myFunction.js';
import { definitionOfTheBank } from './definitionOfTheBank.js';




function validateForm(app) {
    const form = app.querySelector('.payment__form');
    const inputsMask = masksInputs();
    definitionOfTheBank(form, inputsMask.maskInputNumber);

    const validateObj = [{
            input: inputsMask.maskInputNumber,
            type: 'card-number',
            errorCont: form.querySelector('#card-number-error'),
            error: function() {
                return checkCardData(this.input.unmaskedvalue(), this.type).errors
            },
            errorMessage: function() {
                this.errorCont.textContent = this.error().name
            }
        },
        {
            input: inputsMask.maskInputCvc,
            type: 'cvc',
            errorCont: form.querySelector('#cvc-error'),
            error: function() {
                return checkCardData(this.input.unmaskedvalue(), this.type).errors
            },
            errorMessage: function() {
                this.errorCont.textContent = this.error().name
            }
        },
        {
            input: inputsMask.maskInputAction,
            type: 'card-action',
            errorCont: form.querySelector('#action-error'),
            error: function() {
                return checkCardData(this.input.unmaskedvalue(), this.type).errors
            },
            errorMessage: function() {
                this.errorCont.textContent = this.error().name
            }
        },
        {
            input: inputsMask.maskEmail,
            type: 'card-email',
            errorCont: form.querySelector('#email-error'),
            error: function() {
                return checkCardData(this.input.unmaskedvalue(), this.type).errors
            },
            errorMessage: function() {
                this.errorCont.textContent = this.error().name
            }
        }
    ];
    validateObj.forEach(obj => {
        obj.input.el.addEventListener('blur', () => {
            obj.errorMessage()
        })
    })




    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid, resultObj = {},
            isValArr = [];
        validateObj.forEach(obj => {
            isValid = obj.error().isVal;
            if (!isValid) {
                resultObj[obj.input.el.getAttribute('name')] = obj.input.el.value
                isValArr.push(!isValid)
            }
            if (isValArr.length == validateObj.length) {
                validateObj.forEach(obj => obj.input.el.value = '')
                createModalNotification();
                console.log(resultObj)
            } else {
                obj.errorMessage()
            }
        })

    })
}




function checkCardData(value, type) {
    let errors = {};
    const regex = /^\d+$/;

    if (value.length == 0) {
        errors.isVal = true
        errors.name = 'Поле обязательно для заполнения!'
        return { errors }
    }

    switch (type) {
        case 'card-number':
            {
                if (value.length < 16) {
                    errors.isVal = true
                    errors.name = 'Значение должно быть больше!'
                    return { errors }
                }
                if (!regex.test(value)) {
                    errors.isVal = true
                    errors.name = 'Допустимы только цифры!';
                    return { errors }
                }
                if (value.length > 18) {
                    errors.isVal = true
                    errors.name = 'Значение слишком большое';
                    return { error: true, errors }
                }
                break;
            }
        case 'cvc':
            {
                if (!regex.test(value)) {
                    errors.isVal = true
                    errors.name = 'Допустимы только цифры!';
                    return { error: true, errors }
                }
                if (value.length < 3) {
                    errors.isVal = true
                    errors.name = 'Значение слишком маленькое!';
                    return { error: true, errors }
                }
                if (value.length > 3) {
                    errors.isVal = true
                    errors.name = 'Значение слишком длинное!';
                    return { error: true, errors }
                }
                break;
            }
        case 'card-action':
            {
                if (!checkingData(value)) {
                    errors.isVal = true
                    errors.name = 'Некорректная дата!';
                    return { error: true, errors }
                }
                break;
            }

        case 'card-email':
            {

                if (!value.includes('@')) {
                    errors.isVal = true;
                    errors.name = 'Некорректный email!';
                    return { error: true, errors }
                }
                break;
            }
    }


    errors.isVal = false;
    delete errors.name
    return { errors }


}


function masksInputs() {
    const inputNumber = document.querySelector('#cardNumber')
    const inputAction = document.querySelector('#termAction')
    const inputCvc = document.querySelector('#cvc')
    const inputEmail = document.querySelector('#email')
    const maskInputAction = new Inputmask({ regex: `([0][0-9])|([1][0-2])/[0-9]{2}`, }).mask(inputAction);
    const maskInputCvc = new Inputmask({ mask: '999' }).mask(inputCvc);
    const maskInputNumber = new Inputmask({ mask: '9999 9999 9999 9999' }).mask(inputNumber);
    const maskEmail = new Inputmask({ placeholder: 'email' }).mask(inputEmail)

    return {
        maskInputNumber,
        maskInputAction,
        maskInputCvc,
        maskEmail
    }
}


export { validateForm, checkCardData }

















// //const validation = new JustValidate(form);
// // validation
// .addField('#cardNumber', [{
//   rule: 'required',
//   errorMessage: 'Введите номер карты!',
// },
// {
//   validator: () => {
//       return maskInputNumber.unmaskedvalue().length == [16 || 18];
//   },
//   errorMessage: 'Номер карты должен сотоять из 16 цифр',
// },
// ])
// validation
// //     .addField('#cardNumber', [{
// //             rule: 'required',
// //             errorMessage: 'Введите номер карты!',
// //         },
// //         {
// //             validator: () => {
// //                 return maskInputNumber.unmaskedvalue().length == [16 || 18];
// //             },
// //             errorMessage: 'Номер карты должен сотоять из 16 цифр',
// //         },
// //     ])
//
//     .addField('#email', [{
//             rule: 'minLength',
//             value: 3,
//             errorMessage: 'Email не может состоять менее 3-х символов',
//         },
//         {
//             rule: 'required',
//             errorMessage: 'Введите ваш Email!',
//         },
//         {
//             rule: 'email',
//             errorMessage: 'Email должен быть в формате ivanov@mail.ru',
//         },
//     ])
//     .addField('#termAction', [{
//             rule: 'required',
//             errorMessage: 'Введите срок действия карты!',
//         },
//         {
//             validator: () => checkingData(maskInputAction.unmaskedvalue()),
//             errorMessage: 'Некорректная дата',
//         },
//     ])
// .addField('#cvc', [{
//         rule: 'required',
//         errorMessage: 'Введите CVC код, на оборотной стороне карты!',
//     },
//     {
//         validator: () => maskInputCvc.unmaskedvalue().length === 3,
//         errorMessage: 'Код CVC должен быть трехзначным!',
//     },
// ])

// .onSuccess(() => {
//     createModalNotification();
//     form.querySelector('.payment__info').remove();
//     form.querySelector('.payment__card').style.background = '#EAECF4';
//     form.querySelectorAll('input').forEach((inp) => {
//         inp.value = '';
//     });
// });
