import { el } from "redom";
import Card from './Card.js'

export default function gamePairs(selector) {

    const container = el('div', { class: 'container' });
    const title = el('h2', { class: 'pairs__title' }, 'Игра в пары')
    const containerCards = el('div', { class: 'pairs__card-container' })
    newGame(selector, containerCards, 4);
    const form = createForm();

    form.form.addEventListener('submit', (e) => {
        e.preventDefault()
        let value = form.input.value;
        if (value > 3) {
            newGame(selector, containerCards, value)
        }
        form.input.value = ''
    })

    container.append(title, form.form, containerCards)
    selector.append(container);
}


function newGame(selector, containerCards, countCards) {
    const info = document.querySelector('.game-info');
    if (info) info.remove()
    containerCards.innerHTML = ''
    let firstCard = false;
    let secondCard = false;
    let arrNumbers = suffleArr(createArr(countCards))
    for (const cardNumber of arrNumbers) {
        new Card({
            selector: containerCards,
            number: cardNumber,
            action: flip
        })
    }

    function flip(card) {

        if (!firstCard) {
            firstCard = card
        } else {
            if (!secondCard) {
                secondCard = card
            }
        }

        if (firstCard && secondCard) {
            setTimeout(() => {
                if (firstCard.number == secondCard.number) {
                    firstCard.success = true
                    secondCard.success = true
                    firstCard = false
                    secondCard = false
                } else {
                    firstCard.open = false
                    secondCard.open = false
                    firstCard = false
                    secondCard = false
                }
                if (document.querySelectorAll('.pairs__card.pairs__success').length == countCards) {
                    const info = (gameInfo('Вы выиграли!', 'success'))
                    selector.append(info.info);
                    info.button.addEventListener('click', () => {
                        newGame(selector, containerCards, countCards)
                    })
                }
            }, 500)
        }

    }
}

function gameInfo(titleText, regime) {
    const info = el('div', { class: 'game-info' });
    const content = el('div', { class: `game-info__content ${regime}` });
    const descr = el('p', { class: 'game-info__descr' }, titleText);
    const button = el('button', { class: 'game-info__button btn' }, 'Играть еще раз!')

    content.append(descr, button);
    info.append(content)

    button.addEventListener('click', () => {
        info.remove()
    })
    return { info, button }
}

function createForm() {
    const form = el('form', { class: 'pairs__form' });
    const input = el('input', {
        class: 'pairs__input',
        type: 'number',
        placeholder: 'Введите четное количество карточек'
    });
    const button = el('button', { class: 'pairs__button btn' }, 'Начать игру');

    form.append(input, button);

    return { form, input, button };
}

function suffleArr(arr) {
    let i = arr.sort(() => Math.random() - 0.5);
    return i;
}

function createArr(num) {
    let arr = [];
    for (let i = 1; i <= num / 2; i++) {
        arr.push(i);
        arr.push(i);
    }
    return arr;
}
