class Modal {
  constructor(config) {
    this._overlay = document.querySelector(`.${config.classes.overlay}`);
    this._closeBtn = document.querySelector(`.${config.classes.closeBtn}`);

    document.addEventListener('click', e => this.handleClick(e));
  }

  displayModal(modal) {
    modal.classList.add(config.classes.modalStateModifier);
    this._openedModal = modal;
  }

  hideModal(modal) {
    modal.classList.remove(config.classes.modalStateModifier);
  }

  toggleOverlay() {
    this._overlay.classList.toggle(config.classes.overlayStateModifier);
  }

  stopVideo(element) {
    /* Stop an iframe or HTML5 <video> from playing.
     param { element} - the element that contains the video */
    const iframe = element.querySelector('iframe');
    const video = element.querySelector('video');

    if (iframe) {
      const iframeSrc = iframe.src;
      iframe.src = iframeSrc;
    }

    if (video) video.pause();
  }

  handleClick(e) {
    e.preventDefault();

    const clickedEl = e.target;

    if (clickedEl === this._overlay || clickedEl === this._closeBtn) {
      const videoInModal = this._openedModal.querySelector(
        `.${config.classes.video}`
      );
      if (videoInModal) this.stopVideo(videoInModal);
      this.toggleOverlay();
      delete this._openedModal;
      document.body.style.overflow = '';
      return;
    }

    if (clickedEl.dataset.modal) {
      const modal = document.querySelector(`#${clickedEl.dataset.modal}`);
      this.toggleOverlay();

      const visibleModal = document.querySelector(
        '.modal-overlay__window_visible'
      );
      if (visibleModal) this.hideModal(visibleModal);
      this.displayModal(modal);
      document.body.style.overflow = 'hidden';
    }
  }
}

const config = {
  /* all class names used in HTML related to modal window component: */
  classes: {
    overlay: 'modal-overlay',
    overlayStateModifier: 'modal-overlay_visible',
    modalStateModifier: 'modal-overlay__window_visible',
    closeBtn: 'modal-overlay__close-btn',
    video: 'embed',
  },
};

export { config };
export { Modal };
