import { el } from 'redom';

export default class Card {
    _open = false;
    _success = false;
    constructor(option) {
        this.card = el('div', { class: 'pairs__card' }, option.number);
        this.number = option.number;
        this.card.addEventListener('click', () => {
            if (this.open == false && this.success == false) {
                this.open = true;
                option.action(this);
            }
        });
        option.selector.append(this.card);
    }

    set open(value) {
        this._open = value;
        value
            ?
            this.card.classList.add('pairs__open') :
            this.card.classList.remove('pairs__open');
    }
    get open() {
        return this._open;
    }
    set success(value) {
        this._success = value;
        if (value) {
            this.card.classList.add('pairs__success');
            this.card.classList.remove('pairs__open');
        }
    }
    get success() {
        return this._success;
    }
}
