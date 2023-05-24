export function createHeader() {
  const container = document.createElement('div');
  const header = document.createElement('header');
  const form = document.createElement('form');
  const input = document.createElement('input');
  const logo = document.createElement('a');
  const foundList = document.createElement('ul');
  const inner = document.createElement('div');

  inner.classList.add('form-inner');
  container.classList.add('container', 'header-container');
  foundList.classList.add('found-list', 'list-reset', 'hide');
  header.classList.add('header');
  form.classList.add('form', 'header__form');
  input.classList.add('header__input');
  logo.classList.add('link', 'header__logo');

  logo.textContent = 'skb.';
  logo.href = '#';
  logo.ariaLabel = 'Логотип';
  input.placeholder = 'Введите запрос';

  header.append(container);
  container.append(logo, form);
  form.append(inner);
  inner.append(input, foundList);

  return header;
}

