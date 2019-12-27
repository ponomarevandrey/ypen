class Btn {
  constructor(config) {
    this._config = config;
  }

  handleEvent(e) {
    if (e.type === "click") {
      e.preventDefault();
      this._config.modal.openModal(this._config.modal.dialog);
    }
  }

  findElByID(id) {
    return document.querySelector(`#${id}`);
  }

  findElByClass(className) {
    return document.querySelector(`.${className}`);
  }
}

export { Btn };
