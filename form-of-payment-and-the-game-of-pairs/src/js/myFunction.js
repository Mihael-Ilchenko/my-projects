import { el } from 'redom';
import gsap from 'gsap';

export function createModalNotification(text = 'Успешно!') {
    const modal = el('div', { class: 'modal' });

    const content = el('div', { class: 'modal__content' });
    const button = el('button', { class: 'btn modal__btn' }, 'Закрыть');
    const descr = el('p', { class: 'modal__descr' }, text);

    content.append(descr, button);
    modal.append(content);
    document.body.append(modal);

    const tl = gsap.timeline({ paused: true });
    tl.from(modal, { opacity: 0 })
        .from(content, { scale: 0 })
        .from([descr, button], { scale: 0, opacity: 0 });
    tl.play();

    document.addEventListener('click', (e) => {
        if ((e.target != content && e.target != descr) || e.target == button) {
            tl.reverse();
        }
    });

    setTimeout(() => {
        modal.remove();
    }, 5000);

    return modal;
}

export function checkingData(value) {
    const data = new Date();

    const currentMonth = data.getMonth() + 1;
    const currentYears = String(data.getFullYear()).slice(2);
    const valueMonth = value.slice(0, 2);
    const valueYear = value.slice(2);
    if (currentYears > valueYear) return false;
    if (currentYears == valueYear && currentMonth > valueMonth) return false;
    if (value.length != 4) return false;

    return true;
}
