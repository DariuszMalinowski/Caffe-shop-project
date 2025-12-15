
export default class Pages {
  constructor() {
    this.pages = document.querySelectorAll('.page');
    this.navLinks = document.querySelectorAll('[data-link]');

    this.init();
  }

  init() {
    const startPage = window.location.hash.replace('#', '') || 'home';
    this.activatePage(startPage);

    this.navLinks.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const id = link.getAttribute('href').replace('#', '');
        this.activatePage(id);
        history.pushState(null, '', `#${id}`);
      });
    });

    window.addEventListener('popstate', () => {
      const id = location.hash.replace('#', '') || 'home';
      this.activatePage(id);
    });
  }

  activatePage(pageId) {
    this.pages.forEach(page => {
      page.hidden = page.id !== pageId;
    });

    this.navLinks.forEach(link => {
      link.classList.toggle(
        'active',
        link.getAttribute('href') === `#${pageId}`
      );
    });
  }
}
