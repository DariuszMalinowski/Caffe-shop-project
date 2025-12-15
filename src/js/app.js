import Pages from './components/Pages.js';
import Products from './components/Products.js';
import Hamburger from './components/Hamburger.js';

const app = {
  init() {
    new Pages();
    new Hamburger();

    // produkty tylko jeśli istnieje sekcja
    if (document.querySelector('#products')) {
      new Products();
    }
  }
};

document.addEventListener('DOMContentLoaded', () => {
  app.init();
});
