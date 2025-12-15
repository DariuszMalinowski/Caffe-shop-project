/* global Handlebars */
import { products } from './components/products.js';

//Hamburger menu
function initMobileNav() {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');

  if (!toggle || !nav) return;

  toggle.addEventListener('click', function(){
    toggle.classList.toggle('is-open');
    nav.classList.toggle('is-open');
  });
}

// obsługa podstron
const app = {

  initPages() {
    this.pages = document.querySelectorAll('.page');
    this.navLinks = document.querySelectorAll('[data-nav]');

    // strona startowa z URL lub home
    const pageFromHash = window.location.hash.replace('#', '') || 'home';
    this.activatePage(pageFromHash);

    // kliknięcia w menu
    this.navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();

        const pageId = link.getAttribute('href').replace('#', '');
        this.activatePage(pageId);

        // aktualizacja URL (bez reloadu)
        window.history.pushState(null, '', `#${pageId}`);
      });
    });

    // obsługa cofania (back/forward)
    window.addEventListener('popstate', () => {
      const pageId = window.location.hash.replace('#', '') || 'home';
      this.activatePage(pageId);
    });
  },

  activatePage(pageId) {
    // pokazuj tylko aktywną stronę
    this.pages.forEach(page => {
      page.hidden = page.id !== pageId;
    });

    // aktywny link w menu
    this.navLinks.forEach(link => {
      const linkPage = link.getAttribute('href').replace('#', '');
      link.classList.toggle('active', linkPage === pageId);
    });

    // 👉 LAZY INIT PRODUCTS
  if (pageId === 'products' && !this.productsInitialized) {
    initProducts();
    this.productsInitialized = true;
  }
  },

  init() {
    this.initPages();
  }
};

document.addEventListener('DOMContentLoaded', () => {
  app.init();
});


//Products
function initProducts() {
  const container = document.querySelector('#products-list');
  const templateEl = document.querySelector('#product-template');

  if (!container || !templateEl) {
    console.warn('Brak kontenera lub template');
    return;
  }

  const template = Handlebars.compile(templateEl.innerHTML);

  products.forEach((product, index) => {
    const html = template(
      /*{
      ...product,
      index: index + 1
    }*/
      Object.assign({}, product, { index: index + 1 })
    );

    container.insertAdjacentHTML('beforeend', html);
  });
}

//wywołania
document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  //initProducts();
});
