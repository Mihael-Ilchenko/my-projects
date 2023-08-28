const intialData = {
    wallet: 1000000,
    bet: 50000,
    starTotalTo: 9000,
    starTotalFrom: 0
}
const { spinBtn, slotsLists, bet, walletTotal, stars, winTotal, autoBtn, slotsItems } = getAllElements();
const stepStars = 100;

let start;
const timeAnim = 1000;

document.addEventListener('DOMContentLoaded', () => {
    initialGame();
    game();
});

function game() {

    changeBet();

    walletTotal.textContent = getItemLocStor('wallet') || getItemLocStor('wallet') === 0 ? getItemLocStor('wallet') : intialData.wallet;
    stars.to.textContent = intialData.starTotalTo;
    stars.from.textContent = getItemLocStor('stars') ? getItemLocStor('stars') : intialData.starTotalFrom;

    spinBtn.addEventListener('click', play);
    autoBtn.addEventListener('click', (e) => { autoPlay(e.target) });
    getItemLocStor('autoPlay') && autoPlay(autoBtn);

}

function win() {
    setTimeout(() => {
        const centralSlots = document.querySelectorAll('.slots__list li:nth-child(2n)');
        const targetBet = Number(bet.betTotal.textContent);
        const targetWallet = Number(walletTotal.textContent);
        const targetWin = targetBet * 5;

        if (centralSlots[0].dataset.value === centralSlots[1].dataset.value && centralSlots[0].dataset.value === centralSlots[2].dataset.value) {
            winTotal.textContent = targetWin
            setItemLocStor('win', targetWin)
            setItemLocStor('wallet', targetWallet + targetWin);
            walletTotal.textContent = targetWallet + targetWin;
        }

    }, timeAnim)


}

function changeStars(star) {

    if (star <= intialData.starTotalTo) {
        setItemLocStor('stars', star);
        stars.from.textContent = getItemLocStor('stars');
    }

}

function autoPlay(btn) {
    const classActive = 'auto_active';
    btn.classList.toggle(classActive);
    setItemLocStor('autoPlay', true);


    if (btn.classList.contains(classActive)) {
        play();
        start = setInterval(play, 2000)
    } else {
        setItemLocStor('autoPlay', false)
        clearInterval(start)
    }
}

function play() {
    const targetBet = Number(bet.betTotal.textContent);
    const targetWallet = Number(walletTotal.textContent);
    setItemLocStor('win', '');
    winTotal.textContent = '';

    const resultWallet = targetWallet - targetBet;
    const resultStars = Number(stars.from.textContent) + stepStars;
    if (targetWallet > 0 && resultWallet >= 0 && resultStars) {
        rotateSlots(resultWallet, resultStars);
        win()
    }
}

function rotateSlots(resultWallet, resultStars) {
    const activeListClass = 'slots__list_active';
    const slotsItems = document.querySelectorAll('.slots__item');
    wallet(resultWallet);
    changeStars(resultStars);
    disabledAddRemoveElements(true);

    slotsLists[0].classList.add(activeListClass);
    setTimeout(() => { slotsLists[1].classList.add(activeListClass); }, 200);
    setTimeout(() => { slotsLists[2].classList.add(activeListClass); }, 400)

    setTimeout(() => {
        slotsLists.forEach(list => list.classList.remove(activeListClass));
        slotsLists.forEach(list => {
            list.innerHTML = '';
            for (let i = 0; i < 3; i++) {
                list.append(generateRandomItem('slots__item'));
            }
        });
        disabledAddRemoveElements(false);
    }, timeAnim)

}

function disabledAddRemoveElements(bool) {
    [bet.betBtnDecrement, bet.betBtnIncrement, spinBtn].forEach(elem => {
        elem.disabled = bool;
    })
}

function wallet(sum) {
    setItemLocStor('wallet', sum)
    walletTotal.textContent = getItemLocStor('wallet');

}

function changeBet() {

    const { betBtnDecrement, betBtnIncrement, betTotal } = bet;
    betTotal.textContent = getItemLocStor('bet') ? getItemLocStor('bet') : intialData.bet;
    const step = 1000;
    betBtnIncrement.addEventListener('click', betIncrement);
    betBtnDecrement.addEventListener('click', betDecrement);



    function betIncrement() {
        if (betTotal.textContent >= step * 2) {
            const result = Number(betTotal.textContent) - step
            betTotal.textContent = result;
            setItemLocStor('bet', result);

        }
    }

    function betDecrement() {
        if (betTotal.textContent < step * 50) {
            const result = Number(betTotal.textContent) + step;
            betTotal.textContent = result
            setItemLocStor('bet', result)
        }

    }
}

function initialGame() {
    slotsLists.forEach(list => {
        for (let i = 0; i < 3; i++) {
            list.append(generateRandomItem())
        }

    })
}

function getAllElements() {
    const backBtn = document.getElementById('back');
    const starsTotalFrom = document.getElementById('stars-total-from');
    const starsTotalTo = document.getElementById('star-total-to');
    const walletTotal = document.getElementById('wallet-total');
    const betBtnIncrement = document.getElementById('bet-increment');
    const betBtnDecrement = document.getElementById('bet-decrement');
    const betTotal = document.getElementById('bet-total');
    const winTotal = document.getElementById('winning-total');
    const autoBtn = document.getElementById('auto-btn');
    const spinBtn = document.getElementById('spin-btn');
    const slotsLists = document.querySelectorAll('.slots__list');
    const slotsItems = document.querySelectorAll('.slots__item');

    return {
        backBtn,
        stars: {
            to: starsTotalTo,
            from: starsTotalFrom
        },
        bet: {
            betBtnIncrement,
            betBtnDecrement,
            betTotal
        },
        slotsLists,
        slotsItems,
        spinBtn,
        autoBtn,
        winTotal,
        walletTotal,
    }
}

function generateRandomItem(itemClass = 'slots__item') {
    const dataImg = [{
        src: './img/slots/777.svg',
        value: 'Семерки'
    }, {
        src: './img/slots/bell.svg',
        value: 'Колокольчик'
    }, {
        src: './img/slots/cherry.svg',
        value: 'Вишня'
    }, {
        src: './img/slots/grape.svg',
        value: 'Виноград'
    }, {
        src: './img/slots/lemon.svg',
        value: 'Лимон'
    }, {
        src: './img/slots/orange.svg',
        value: 'Апельсин'
    }, {
        src: './img/slots/plum.svg',
        value: 'Слива'
    }, {
        src: './img/slots/watermelon.svg',
        value: 'Арбуз'
    }];
    const randomNumber = getRandomNumber(0, dataImg.length);
    const item = document.createElement('li');
    item.classList.add(itemClass);
    item.id = generateRandomString();
    item.setAttribute('data-value', dataImg[randomNumber].value)
    const img = document.createElement('img');
    img.classList.add('slots__img');

    img.src = dataImg[randomNumber].src;
    img.alt = dataImg[randomNumber].value
    item.append(img);

    return item
}

function getRandomNumber(min, max) {
    return Math.trunc(Math.random() * (max - min) + min)
}

function setItemLocStor(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getItemLocStor(key) {
    return JSON.parse(localStorage.getItem(key))
}

function generateRandomString() {
    return Math.random().toString(36).substring(2, 15)
}
