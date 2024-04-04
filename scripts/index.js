
import {el, setChildren, mount} from 'redom';
import {card, form} from './card';

const {cardElem, cardNumber, cardName, cardDate} = card();
const {formElem, inputHolder, inputNumber, inputDate} = form();

mount(cardElem, formElem);

const cartRegXep = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;

inputHolder.addEventListener('input', (e) => {
  const nameHolder = inputHolder.value;
  if (/(^\w+\s+\w+.*$|^[А-Яа-яЁё]+\s+[А-Яа-яЁё]+.*$)/.test(inputHolder.value)) {
    inputHolder.style.outline = '';
    cardName.style.color = '';
    cardName.textContent = nameHolder;
  } else {
    inputHolder.style.outline = '1px solid red';
    cardName.style.color = 'red';
    cardName.textContent = nameHolder;
  }
});

inputNumber.addEventListener('input', () => {
  // if (/(.?){1,16}/.test(inputNumber.value)) {
  //   console.log('до 16');
  // } else {
  //   console.log('Больше 16');
  // }
  inputNumber.value = inputNumber.value.replace(/[^\d]/g, '');
  const inputNumberValue = inputNumber.value.replace(/(.{4})/g, '$1 ').trim();
  // console.log(cartRegXep.test(inputNumberValue));
  cardNumber.textContent = inputNumberValue;
});
