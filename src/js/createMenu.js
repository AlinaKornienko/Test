import menuData from '../data/menu.json';
import menuItemsTemplate from '../templates/menu-items.hbs';
import refs from './refs';

// const menuRef = document.querySelector('.js-menu');

const menuItemsMarkup = menuItemsTemplate(menuData);

refs.menuRef.insertAdjacentHTML('beforeend', markup);