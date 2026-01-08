
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

class AboutCarousel {
  constructor() {
    this.slides = document.querySelectorAll('.about-slide');
    this.current = 0;

    if (this.slides.length !== 3) return;

    this.start();
  }

  start() {
    setInterval(() => {
      this.changeSlide();
    }, 5000);
  }

  changeSlide() {
    this.slides[this.current].classList.remove('active');

    this.current = (this.current + 1) % this.slides.length;

    this.slides[this.current].classList.add('active');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new AboutCarousel();
});
