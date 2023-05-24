import { el } from "redom";


export function qwerty(items) {
    return el('ul', items.map(item => el('li', item)))
}
