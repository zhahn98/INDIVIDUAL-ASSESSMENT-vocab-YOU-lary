import { showCards } from '../pages/cards';
import { getCards, jsCards } from '../api/cardData';
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
};

export default navigationEvents;
