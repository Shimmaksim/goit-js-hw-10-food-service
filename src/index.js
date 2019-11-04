import './styles.css';
import menuItems from './menu.json';
import menuHbs from './menu.hbs';

const body = document.body;
const bodyStyle = localStorage.getItem('theme');
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const switchControle = document.querySelector('#theme-switch-control');
const refs = document.querySelector('.menu');
const markup = menuHbs(menuItems);
refs.insertAdjacentHTML('beforeend', markup);

const defaultTime = function() {
  body.classList.add(bodyStyle);
  if (body.classList.contains(Theme.DARK)) {
    switchControle.checked = true;
  }
};
defaultTime();

switchControle.addEventListener('change', e => {
  if (switchControle.checked) {
    body.classList.add(Theme.DARK);
    body.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    body.classList.add(Theme.LIGHT);
    body.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  }
});
