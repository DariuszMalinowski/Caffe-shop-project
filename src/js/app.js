/* global Handlebars */
import { products } from './components/products.js';

//Hamburger menu
function initMobileNav() {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');

  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('is-open');
    nav.classList.toggle('is-open');
  });
}

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
  initProducts();
});
