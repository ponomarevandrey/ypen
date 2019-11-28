class Modal {
  constructor(config = Modal.config) {
    this._config = config;

    this._backdrop = document.querySelector(
      `.${this._config.classes.backdrop}`
    );
    this._closeBtn = document.querySelector(
      `.${this._config.classes.closeBtn}`
    );

    document.addEventListener('click', e => this.handleClick(e));
  }

  displayModal(dialog) {
    dialog.classList.add(this._config.classes.dialogStateModifier);
    this._openedModal = dialog;
  }

  hideModal(dialog) {
    dialog.classList.remove(this._config.classes.dialogStateModifier);
  }

  toggleOverlay() {
    this._backdrop.classList.toggle(this._config.classes.backdropStateModifier);
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
    const clickedEl = e.target;

    if (clickedEl === this._backdrop || clickedEl === this._closeBtn) {
      const videoInModal = this._openedModal.querySelector(
        `.${this._config.classes.video}`
      );
      if (videoInModal) this.stopVideo(videoInModal);
      this.toggleOverlay();
      delete this._openedModal;
      document.body.style.overflow = '';
      return;
    }

    if (clickedEl.dataset.modal) {
      e.preventDefault();

      const currentDialog = document.querySelector(
        `#${clickedEl.dataset.modal}`
      );
      this.toggleOverlay();

      const visibleModal = document.querySelector(
        `.${this._config.classes.dialogStateModifier}`
      );
      if (visibleModal) this.hideModal(visibleModal);
      this.displayModal(currentDialog);
      document.body.style.overflow = 'hidden';
    }
  }

  static config = {
    /* all class names used in HTML related to modal window component: */
    classes: {
      backdrop: 'modal',
      backdropStateModifier: 'modal_visible',
      dialogStateModifier: 'modal__dialog_visible',
      closeBtn: 'modal__close-btn',
      video: 'embed',
    },
  };
}

export { Modal };
