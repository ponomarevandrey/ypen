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
    document.addEventListener('keydown', e => this.handleKeyDown(e));
  }

  handleClick(e) {
    const clickedEl = e.target;

    if (clickedEl === this._backdrop || clickedEl === this._closeBtn) {
      this.closeModal();
    }

    if (clickedEl.dataset.modal) {
      e.preventDefault();
      this.openModal(clickedEl);
    }
  }

  handleKeyDown(e) {
    if (this._openedDialog && e.code === 'Escape') {
      const videoInModal = this._openedDialog.querySelector(
        `.${this._config.classes.video}`
      );
      if (videoInModal) this.stopVideo(videoInModal);
      this.toggleBackdrop();
      delete this._openedDialog;
      document.body.style.overflow = '';
      return;
    }
  }

  displayDialog(dialog) {
    dialog.classList.add(this._config.classes.dialogStateModifier);
  }

  hideDialog(dialog) {
    dialog.classList.remove(this._config.classes.dialogStateModifier);
  }

  toggleBackdrop() {
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

  openModal(clickedEl) {
    const newDialog = document.querySelector(`#${clickedEl.dataset.modal}`);
    const visibleDialog = document.querySelector(
      `.${this._config.classes.dialogStateModifier}`
    );

    this.toggleBackdrop();

    if (visibleDialog) this.hideDialog(visibleDialog);
    this.displayDialog(newDialog);
    this._openedDialog = newDialog;
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    const videoBlock = this._openedDialog.querySelector(
      `.${this._config.classes.video}`
    );
    if (videoBlock) this.stopVideo(videoBlock);
    this.toggleBackdrop();
    delete this._openedDialog;
    document.body.style.overflow = '';
    return;
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
