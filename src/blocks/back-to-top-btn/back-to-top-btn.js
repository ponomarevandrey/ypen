const backToTopBtn = document.querySelector('.back-to-top-btn');

if (backToTopBtn) {
  window.addEventListener('scroll', () => {
    if (window.scrollY >= 60 || document.body.scrollTop >= 60) {
      backToTopBtn.style.display = 'block';
    } else backToTopBtn.style.display = 'none';
  });

  backToTopBtn.addEventListener('click', () => {
    document.body.scrollTop = 0; // for Safari
    window.scrollTo(0, 0);
  });
}
