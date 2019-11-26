const modal = document.querySelector('.modal');
const trigger = document.querySelector('.trigger');
const closeBtn = document.querySelector('.modal__close-btn');

function toggleModal() {
  modal.classList.toggle('modal_visible');
}

function handleClick(e) {
  if (e.target === modal) {
    toggleModal();
  }
}

// trigger.addEventListener('click', toggleModal);
// closeBtn.addEventListener('click', toggleModal);
// window.addEventListener('click', handleClick);

//-

class Modal {
  constructor(triggerBtns) {
    this._modal = document.querySelector('.modal');
    const closeBtn = document.querySelector('.modal__close-btn');

    // - add global event listener to document (for event delegation)
    // - inside this event listenerm detect click on buttons:
    //   - if (e.target.dataset.modal) button detected!
    // - and then:
    //   - get the button's dataset.modal property value
    //   - find corresponding modal window: modal.id === button.dataset.modal
    // - add class .visible to this window (with the help of toggle method)
    // - disable scroll
  }

  toggleModal() {
    this._modal.classList.toggle('modal_visible');
  }

  handleClick(e) {
    if (e.target === modal) toggleModal();
  }
}

new Modal(document.querySelectorAll('[data-modal]'));

console.log(document.querySelectorAll('[data-modal]'));
