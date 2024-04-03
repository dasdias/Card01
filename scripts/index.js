
import {el, setChildren, mount} from 'redom';
import {card, form} from './card';

const cardElem = card();
// console.log('wrapElem: ', wrapElem);
form();

mount(cardElem, form());

