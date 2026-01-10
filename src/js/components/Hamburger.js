
export default class Hamburger {
  constructor() {
    this.toggle = document.querySelector('.nav-toggle');
    this.nav = document.querySelector('.site-nav');

    if (!this.toggle || !this.nav) return;

    this.init();
  }

  init() {
    this.toggle.addEventListener('click', () => this.toggleMenu());
  }

  toggleMenu() {
    this.toggle.classList.toggle('is-open');
    this.nav.classList.toggle('is-open');
  }

  closeMenu() {
    this.toggle.classList.remove('is-open');
    this.nav.classList.remove('is-open');
  }
}

