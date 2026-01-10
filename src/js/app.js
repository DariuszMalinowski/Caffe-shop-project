import Pages from './components/Pages.js';
import Products from './components/Products.js';
import Hamburger from './components/Hamburger.js';
import AboutCarousel from './components/AboutCarousel.js';

const app = {
  init() {
    new Pages();
    new Hamburger();
    new AboutCarousel();

    // produkty tylko jeśli istnieje sekcja
    if (document.querySelector('#products')) {
      new Products();
    }
  }
};

document.addEventListener('DOMContentLoaded', () => {
  app.init();
});
