class Lightbox {
  constructor(config) {
    this._config = config;

    this._backdrop = document.querySelector(
      `.${this._config.classes.backdrop}`
    );
    this._closeBtn = document.querySelector(
      `.${this._config.classes.closeBtn}`
    );

    this._slides = document.querySelectorAll('.lightbox__dialog');
    this._counter = 0;
    this._amount = this._slides.length;

    const prevBtn = document.querySelector(`#${this._config.classes.prevBtn}`);
    const nextBtn = document.querySelector(`#${this._config.classes.nextBtn}`);
    prevBtn.addEventListener('click', e => this.navigate(e, -1));
    nextBtn.addEventListener('click', e => this.navigate(e, 1));

    document.addEventListener('click', e => this.onClick(e));
    document.addEventListener('keydown', e => this.onKeydown(e));
  }

  getElemIndex(elem) {
    if (elem.dataset.lightbox) return elem.dataset.lightbox.match(/\d/)[0];
  }

  navigate(e, direction) {
    this.hideDialog(this._current);

    this._counter = this._counter + direction;

    if (direction === -1 && this._counter < 0) this._counter = this._amount - 1;
    if (direction === 1 && !this._slides[this._counter]) this._counter = 0;

    this._current = this._slides[this._counter];
    this.showDialog(this._current);
  }

  openLightbox(clickedEl) {
    const newDialog = document.querySelector(`#${clickedEl.dataset.lightbox}`);
    const visibleDialog = document.querySelector(
      `.${this._config.classes.dialogStateModifier}`
    );

    this.toggleBackdrop();
    if (visibleDialog) this.hideDialog(visibleDialog);

    this.showDialog(newDialog);
    this._openedDialog = newDialog;
    document.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    this.toggleBackdrop();
    delete this._openedDialog;
    document.body.style.overflow = '';
    return;
  }

  onClick(e) {
    const clickedEl = e.target;

    if (clickedEl === this._backdrop || clickedEl === this._closeBtn) {
      this.closeLightbox();
    }

    if (clickedEl.dataset.lightbox) {
      e.preventDefault();
      this._counter = Number(this.getElemIndex(clickedEl));
      this._current = this._slides[this._counter];
      this.openLightbox(clickedEl);
    }
  }

  onKeydown(e) {
    if (this._openedDialog && e.code === 'Escape') {
      this.toggleBackdrop();
      delete this._openedDialog;
      document.body.style.overflow = '';
      return;
    }
  }

  showDialog(dialog) {
    dialog.classList.add(this._config.classes.dialogStateModifier);
  }

  hideDialog(dialog) {
    dialog.classList.remove(this._config.classes.dialogStateModifier);
  }

  toggleBackdrop() {
    this._backdrop.classList.toggle(this._config.classes.backdropStateModifier);
  }
}

const config = {
  // all class names used in HTML related to Lightbox window component:
  classes: {
    backdrop: 'lightbox',
    backdropStateModifier: 'lightbox_visible',
    dialogStateModifier: 'lightbox__dialog_visible',
    closeBtn: 'lightbox__close-btn',
    prevBtn: 'lightbox-btn-prev',
    nextBtn: 'lightbox-btn-next',
    video: 'embed',
  },
};

const lightbox = new Lightbox(config);

export { lightbox };
