const sectionOtziviContentEl = document.querySelector('.reviews__content');
const sectionOtziviEl = document.querySelector('.reviews');

function makeVideoResponsive(e) {
  let windowWidth = parseInt(document.documentElement.clientWidth);
  if (windowWidth < 480) {
    sectionOtziviEl.style.height = `${parseInt(
      getComputedStyle(sectionOtziviContentEl).height
    ) + 250}px`;
  } else {
    sectionOtziviEl.style.height = `${parseInt(
      getComputedStyle(sectionOtziviContentEl).height
    ) + 200}px`;
  }
}

window.addEventListener('resize', makeVideoResponsive);
window.addEventListener('load', makeVideoResponsive);
