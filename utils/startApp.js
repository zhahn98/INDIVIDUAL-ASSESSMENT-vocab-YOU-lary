import navBar from '../components/navBar';
import { getCards } from '../api/cardData';
import { showCards } from '../pages/cards';
import domBuilder from '../components/domBuilder';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import logoutButton from '../components/logoutButton';
import navigationEvents from '../events/navigationEvents';

const startApp = () => {
  domBuilder();
  domEvents();
  formEvents();
  navBar();
  logoutButton();
  navigationEvents();
  getCards().then((cards) => showCards(cards));
};

export default startApp;
