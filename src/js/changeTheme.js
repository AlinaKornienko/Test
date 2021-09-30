import refs from './refs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeLS = localStorage.getItem('theme');

if (themeLS === 'dark-theme') {
  refs.body.classList.add('dark-theme');
  refs.input.checked = true;
}

if (refs.body.classList.length === 0) {
  refs.body.classList.add('light-theme');
}

refs.input.addEventListener('change', onInputChangeTheme);

function onInputChangeTheme() {
  if (refs.input.checked) {
    changeClass();
    changeLockalStorage(Theme.DARK);
  } else {
    changeClass();
    changeLockalStorage(Theme.LIGHT);
  }
}

function changeClass() {
  refs.body.classList.toggle('dark-theme');
  refs.body.classList.toggle('light-theme');
}

function changeLockalStorage(themeLS) {
  localStorage.setItem('theme', themeLS);
}