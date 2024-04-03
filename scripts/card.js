import {el, setChildren, mount} from 'redom';

// const inputElems = (classElem, textElem) => {
//   const formInputWrap = el('div', {className: `form__input-wrap ${classElem}`});
//   const label = el('label', {className: 'form__label form__holder-label'},
//       textElem);
//   const input = el('input', {className: 'input input__holder', type: 'text'},
//       textElem);
//   return setChildren(formInputWrap, [label, input]);
// };


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

  const card = el('div', {className: 'card'}, [title, creditCard]);
  const wrapper = el('div', {className: 'wrapper'}, card);
  setChildren(document.body, wrapper);
  return card;
};

export const form = () => {
  const formElem = el('form', {className: 'form', id: 'form'});

  const formInputWrap = el('div',
      {className: 'form__input-wrap form__input-wrap_holder'});
  const label = el('label', {className: 'form__label form__holder-label',
    for: 'input__holder'}, 'Card Holder');
  const input = el('input', {className: 'input input__holder',
    type: 'text', id: 'input__holder'});
  setChildren(formInputWrap, [label, input]);
  setChildren(formElem, formInputWrap);
  return formElem;
};


`
<form action="#" class="form" id="form">
  <div class="form__input-wrap form__input-wrap_holder">
    <label for="" class="form__label form__holder-label">Card Holder</label>
    <input type="text" class="input input__holder">
  </div>

  <div class="form__input-wrap form__input-wrap_number">
    <label for="" class="form__label form__number-label">Card Number</label>
    <input class="input input__number" id="cardNumber">
  </div>

  <div class="form__input-wrap form__input-wrap_date">
    <label for="" class="form__label form__date-label">Card Expiry</label>
    <input type="text" class="input input__date">
  </div>

  <div class="form__input-wrap form__input-wrap_cvv">
    <label for="" class="form__label form__cvv-label">CVV</label>
    <input type="text" class="input input__cvv">
  </div>

  <button class="form__button">CHECK OUT</button>
</form>
`;
