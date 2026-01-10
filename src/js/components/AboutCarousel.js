export default class AboutCarousel {
  constructor() {
    this.slides = document.querySelectorAll('.about-slide');
    this.current = 0;

    if (this.slides.length === 0) return;

    this.start();
  }

  start() {
    setInterval(() => {
      this.changeSlide();
    }, 5000);
  }

  changeSlide() {
    this.slides[this.current].classList.remove('is-active');

    this.current = (this.current + 1) % this.slides.length;

    this.slides[this.current].classList.add('is-active');
  }
}

/*document.addEventListener('DOMContentLoaded', () => {
  new AboutCarousel();
});*/
