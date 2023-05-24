import '../scss/style.scss';
import '../index.html';
import paymentApp from './payment/paymentApp.js';
import gamePairs from './playing-pairs/gamePairs.js';

paymentApp(document.querySelector('.payment'), 'Форма оплаты');
gamePairs(document.getElementById('pairs'));
let i = 0;
