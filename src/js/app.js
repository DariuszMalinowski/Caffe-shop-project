
//import Products from './components/Products.js';

/*activatePage(pageId) {
  // pokazuj / chowaj strony
  this.pages.forEach(page => {
    page.toggleAttribute('hidden', page.id !== pageId);
  });

  if (pageId === 'products' && !this.products) {
    this.products = new Products(document.querySelector('#products'));
  }
}
*/




console.log('js działa');

//Obsluga hamburger menu
function initMobileNav() {
  const toggle = document.querySelector('.nav-toggle');
  const body = document.body;
  const links = document.querySelectorAll('.site-nav a');

  if (!toggle) return;

  toggle.addEventListener('click', function() {
    const isOpen = body.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', isOpen);
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      body.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

document.addEventListener('DOMContentLoaded', initMobileNav);
