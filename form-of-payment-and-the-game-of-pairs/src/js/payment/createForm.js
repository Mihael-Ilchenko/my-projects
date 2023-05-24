import { el, setChildren } from "redom";


export function createForm() {
    const form = el('form', { class: 'payment__form' });
    const card = el('div', { class: 'payment__card' });

    const emailContainer = el('label', { class: 'payment__label' });
    const numberContainer = el('label', { class: 'payment__label' });
    const actionContainer = el('label', { class: 'payment__label' });
    const cvcContainer = el('label', { class: 'payment__label' });
    const inputRow = el('div', { class: 'input-row' });
    const button = el('button', { class: 'btn payment__btn' }, 'Оплатить');
    const inputNumber = el('input', { class: 'payment__input', placeholder: 'Номер карты', name: 'card-number:', id: 'cardNumber' })
    const inputEmail = el('input', { class: 'payment__input', placeholder: 'Email', name: 'email:', id: 'email' })
    const inputCVC = el('input', { class: 'payment__input', placeholder: 'CVV/CVC', name: 'cvc:', id: 'cvc' })
    const inputAction = el('input', { class: 'payment__input', placeholder: 'ММ/ГГ', name: 'validity-period:', id: 'termAction' })

    setChildren(emailContainer,
        inputEmail,
        el('span', { class: 'form-error', id: 'email-error' })
    );
    setChildren(numberContainer,
        inputNumber,
        el('span', { class: 'form-error', id: 'card-number-error' })
    );
    setChildren(actionContainer,
        inputAction,
        el('span', { class: 'form-error', id: 'action-error' })
    );
    setChildren(cvcContainer,
        inputCVC,
        el('span', { class: 'form-error', id: 'cvc-error' })
    )
    inputRow.append(actionContainer, cvcContainer);
    card.append(numberContainer, inputRow, emailContainer, button)

    form.append(card)
    return {
        form,
        createFormTest: function() {
            return el('div', inputNumber, inputAction, inputCVC, inputEmail)

        }
    }
}
