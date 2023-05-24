  import CardInfo from 'card-info';





  import { el, setChildren } from 'redom';
  export function definitionOfTheBank(form, maskInput) {
      const input = document.getElementById('cardNumber')
      const card = form.querySelector('.payment__card');
      const blockInfo = el('div', { class: 'payment__info' });
      const logo = el('img', { class: 'payment__logo' });
      const cardTitle = el('h3', { class: 'payment__brand' });
      setChildren(blockInfo, [cardTitle, logo]);

      input.addEventListener('input', () => {
          const cardNum = maskInput.unmaskedvalue();
          const cardInfo = new CardInfo(cardNum, {
              banksLogosPath: '/node_modules/card-info/dist/banks-logos/',
              brandsLogosPath: '/node_modules/card-info/dist/brands-logos/',
          });
          if (cardNum.length > 5) {
              if (cardInfo.brandLogoPng == null) {
                  cardTitle.textContent = 'Не удалось определить банк';
                  logo.src = '';
                  logo.alt = '';
                  card.append(blockInfo);
                  return;
              }
              logo.src = cardInfo.brandLogoPng;
              logo.alt = cardInfo.brandName;
              card.style.background = cardInfo.backgroundGradient;
              cardTitle.textContent = cardInfo.brandName;
              card.append(blockInfo);
          }
      });


  }
