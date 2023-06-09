import { showCards } from '../pages/cards';
import {
  getCards, jsCards, pythonCards, htmlCards, miscCards
} from '../api/cardData';
import { signOut } from '../utils/auth';

const navigationEvents = () => {
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  document.querySelector('#all-cards').addEventListener('click', () => {
    getCards().then(showCards);
  });

  document.querySelector('#filter-js').addEventListener('click', () => {
    jsCards().then(showCards);
  });

  document.querySelector('#filter-python').addEventListener('click', () => {
    pythonCards().then(showCards);
  });

  document.querySelector('#filter-html').addEventListener('click', () => {
    htmlCards().then(showCards);
  });

  document.querySelector('#filter-misc').addEventListener('click', () => {
    miscCards().then(showCards);
  });
};

export default navigationEvents;
