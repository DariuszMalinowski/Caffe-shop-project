
//import { products } from './productsItems.js';
/* global Handlebars */

export default class Products {
  constructor() {
    this.container = document.querySelector('#products-list');
    this.templateEl = document.querySelector('#product-template');

    if (!this.container || !this.templateEl) return;

    this.template = Handlebars.compile(this.templateEl.innerHTML);
    this.loadProducts();
  }

  async loadProducts() {
    try {
      const response = await fetch('http://localhost:3131/products');
      const products = await response.json();
      this.render(products);
    } catch (error) {
      console.error('Błąd ładowania produktów', error);
    }
  }

  render(products) {
    this.container.innerHTML = '';

    products.forEach((product, index) => {
      const html = this.template({
        ...product,
        index: index + 1,
      });

      this.container.insertAdjacentHTML('beforeend', html);
    });
  }
}

