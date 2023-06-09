// USE WITH FIREBASE AUTH
import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';

const init = () => {
  document.querySelector('#app').innerHTML = `
    <h1>Hello! Please login to Vocab Cards!</h1>
  `;
  // USE WITH FIREBASE AUTH
  ViewDirectorBasedOnUserAuthStatus();
};

init();
