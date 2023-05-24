import { svgVk, svgFacebook, svgPhone, svgEmail, svgOther, preloaderSvg } from './svg.js';

//взять нужные данные из возвращаемой даты
export function editData(data) {
  const newDate = new Date(data);
  const editData = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };
  const result = newDate.toLocaleString("ru", editData);
  return result;
}

export function editTime(data) {
  const newDate = new Date(data);
  const editData = {
    hour: "numeric",
    minute: "numeric",
  };
  const result = newDate.toLocaleString("ru", editData);
  return result;
}

//создать список клиентов, с нужным svg
export function createContactsLink(type, value, item) {
 
  const tooltip = createTooltip(type, value);
  const link = document.createElement("a");
  link.classList.add("item__contacts-link");

  if (type === "Email") {
    link.href = `mailto:${value.trim()}`;
    link.innerHTML = svgEmail;
  }

  if (type === "Телефон") {
    link.href = `tel:${value.trim()}`;
    link.innerHTML = svgPhone;
    // tooltip.tooltipType.remove();
    tooltip.tooltipLink.style.color = 'white';
  }

  if (type === "Vk") {
    link.innerHTML = svgVk;
    link.href = value.trim();
  }

  if (type === "FaceBook") {
    link.innerHTML = svgFacebook;
    link.href = value.trim();
  }

  if (type === "Доп. телефон") {
    link.innerHTML = svgOther;
    link.href = `tel:${value.trim()}`;
  }

  link.append(tooltip.tooltip);
  item.append(link);
}
export function createTooltip(type, value) {
  const tooltip = document.createElement('div');
  const tooltipType = document.createElement('span');
  const tooltipLink = document.createElement('a');

  tooltip.classList.add('contacts-tooltip', 'tooltip');
  tooltipType.classList.add('contacts-tooltip__type');
  tooltipLink.classList.add('contacts-tooltip__link');

  tooltipType.textContent = type + ': ';
  tooltipLink.textContent = value;
  tooltip.append(tooltipType, tooltipLink);

  return {
          tooltip,
          tooltipType,
          tooltipLink,
  }
}
//preloader
export function createPreloader() {
  const preloader = document.createElement('div');
  const loader = document.createElement('span');

  loader.innerHTML = preloaderSvg;

  preloader.classList.add('preloader');
  loader.classList.add('loader');
  preloader.append(loader);

  return preloader;  
}