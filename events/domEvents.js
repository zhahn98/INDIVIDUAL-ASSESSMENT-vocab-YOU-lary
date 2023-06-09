import addCardForm from '../components/addCardForm';
import { getCards, deleteCard, getSingleCard } from '../api/cardData';
import { showCards } from '../pages/cards';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // ADD CARD
    if (e.target.id.includes('add-card-btn')) {
      addCardForm();
    }
    // DELETE CARD
    if (e.target.id.includes('delete-card')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE CARD', e.target.id);
        const [, firebaseKey] = e.target.id.split('--');

        deleteCard(firebaseKey).then(() => {
          getCards().then(showCards);
        });
      }
    }
    // EDIT CARD
    if (e.target.id.includes('edit-card-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleCard(firebaseKey).then((cardObj) => addCardForm(cardObj));
    }
  });
};

export default domEvents;
