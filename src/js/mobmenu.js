(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
    mobileMenuLinks: document.querySelectorAll('.console-mobile-menu-links'),
  };

  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    const isMenuOpen = refs.menu.classList.toggle('is-open');

    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }

  refs.mobileMenuLinks.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();

      toggleModal();

      const targetId = event.target.getAttribute('href');

      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth',
        });
      }
    });
  });
})();