import { getCards, updateCard, createCard } from '../api/cardData';
import { showCards } from '../pages/cards';

const formEvents = () => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-card')) {
      console.warn('TEST');
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        category: document.querySelector('#category').value,
      };

      createCard(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateCard(patchPayload).then(() => {
          getCards().then(showCards);
        });
      });
    }

    if (e.target.id.includes('update-card')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        category: document.querySelector('#category').value,
        firebaseKey,
      };

      updateCard(payload).then(() => {
        getCards().then(showCards);
      });
    }
  });
};

export default formEvents;
