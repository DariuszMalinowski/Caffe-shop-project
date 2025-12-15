
import { products } from './productsItems.js';
/* global Handlebars */

export default class Products {
  constructor() {
    this.container = document.querySelector('#products-list');
    this.templateEl = document.querySelector('#product-template');

    if (!this.container || !this.templateEl) return;

    this.template = Handlebars.compile(this.templateEl.innerHTML);
    this.render();
  }

  render() {
    this.container.innerHTML = '';

    products.forEach((product, index) => {
      const html = this.template(
        /*{
        ...product,
        index: index + 1,
      }*/
        Object.assign({}, product, { index: index + 1 })
      );

      this.container.insertAdjacentHTML('beforeend', html);
    });
  }
}
