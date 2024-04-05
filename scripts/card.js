import {el, setChildren} from 'redom';

// Верхний блок карты
export const card = () => {
  const title = el('p', {className: 'secure'}, 'Secure Checkout');

  const cardNumber = el('span',
      {className: 'card__number'}, 'xxxx xxxx xxxx xxxx');
  const cardName = el('span',
      {className: 'card__name'}, 'John Doe');
  const cardDate = el('span', {className: 'card__date'}, '04/24');
  const cardPersonal = el('div',
      {className: 'card__personal'}, [cardName, cardDate]);
  const creditCard = el('div',
      {className: 'credit-card'}, [cardNumber, cardPersonal]);

  const cardElem = el('div', {className: 'card'}, [title, creditCard]);
  const wrapper = el('div', {className: 'wrapper'}, cardElem);
  setChildren(document.body, wrapper);
  return {cardElem, cardNumber, cardName, cardDate};
};

// Форма карты
export const form = () => {
  const formElem = el('form', {className: 'form', id: 'form'});

  const formInputWrap = el('div',
      {className: 'form__input-wrap form__input-wrap_holder'});
  const labelHolder = el('label', {className: 'form__label form__holder-label',
    for: 'input__holder'}, 'Card Holder');
  const inputHolder = el('input', {className: 'input input__holder',
    type: 'text', id: 'input__holder'});

  const formInputWrapNumber = el('div',
      {className: 'form__input-wrap form__input-wrap_number'});
  const labelNumber = el('label', {className: 'form__label form__number-label',
    for: 'cardNumber'}, 'Card Number');
  const inputNumber = el('input', {className: 'input input__number',
    type: 'text', id: 'cardNumber', placeholder: 'xxxx xxxx xxxx xxxx'});

  const formInputWrapDate = el('div',
      {className: 'form__input-wrap form__input-wrap_date'});
  const labelDate = el('label', {className: 'form__label form__date-label',
    for: 'input__date'}, 'Card Expiry');
  const inputDate = el('input', {className: 'input input__date',
    type: 'text', id: 'input__date'});

  const formInputWrapCvv = el('div',
      {className: 'form__input-wrap form__input-wrap_cvv'});
  const labelCvv = el('label', {className: 'form__label form__cvv-label',
    for: 'input__cvv'}, 'CVV');
  const inputCvv = el('input', {className: 'input input__cvv',
    type: 'text', id: 'input__cvv'});

  const button = el('button', {className: 'form__button'}, 'CHECK OUT');

  setChildren(formInputWrap, [labelHolder, inputHolder]);
  setChildren(formInputWrapCvv, [labelCvv, inputCvv]);
  setChildren(formInputWrapDate, [labelDate, inputDate]);
  setChildren(formInputWrapNumber, [labelNumber, inputNumber]);
  setChildren(formElem, [formInputWrap, formInputWrapNumber,
    formInputWrapDate, formInputWrapCvv, button]);
  return {formElem, inputHolder, inputNumber, inputDate, inputCvv, button};
};
