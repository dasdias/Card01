
import IMask from 'imask';
import {mount} from 'redom';
import {card, form} from './card';

// Получаем элементы из карты и формы
const {cardElem, cardNumber, cardName, cardDate} = card();
const {formElem, inputHolder, inputNumber, inputDate, inputCvv} = form();

// Вставляем элементы на страницу
mount(cardElem, formElem);

// обрабатываем данные держателя карты
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

const maskNumber = IMask(inputNumber, {mask: '0000 0000 0000 0000'});
const maskDate = IMask(inputDate, {mask: '00/00'});

// Обрабатываем данные номера карты
inputNumber.addEventListener('input', () => {
  const inputNumberValue = inputNumber.value.trim();
  if (/[\d]/g.test(inputNumberValue)) {
    cardNumber.textContent = inputNumberValue;
  }
});

// Обрабатываем дату
inputDate.addEventListener('input', () => {
  const cardDateValue = inputDate.value.trim();
  if (/[\d]/g.test(cardDateValue)) {
    cardDate.textContent = cardDateValue;
  }
});

// Обрабатываем CVV code
inputCvv.addEventListener('input', () => {
  const inputCvvValue = inputCvv.value.trim();
  inputCvv.value = inputCvvValue.replace(/[^\d]/, '');
  if (inputCvvValue.length > 3) {
    inputCvv.value = inputCvvValue.slice(0, 3);
  }
});
