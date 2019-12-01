class FormGroup {
  constructor(config) {
    this._config = config;

    this._orderBlock = document.querySelector(`#${this._config.blockID}`);

    for (let id in this._config.inputIDs) {
      this[`${id}`] = document.querySelector(`#${this._config.inputIDs[id]}`);
    }
  }

  validateName(inputEl) {
    console.log(inputEl);
    const regex = /^[a-zA-Zа-яА-ЯёЁ]+\s[a-zA-Zа-яА-ЯёЁ]+$/;
    const inputValue = inputEl.value;

    inputEl.parentElement.classList.remove(
      'form-group_validation_success',
      'form-group_validation_error'
    );

    console.log('works!');

    if (regex.test(inputValue)) {
      inputEl.parentElement.classList.add('form-group_validation_success');
      return true;
    } else {
      inputEl.parentElement.classList.add('form-group_validation_error');
    }
  }

  validateEmail(inputEl) {
    const regex = /^\w+\.?\w*@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    const inputValue = inputEl.value.toLowerCase();

    inputEl.parentElement.classList.remove(
      'form-group_validation_success',
      'form-group_validation_error'
    );

    if (regex.test(inputValue)) {
      inputEl.parentElement.classList.add('form-group_validation_success');
      return true;
    } else {
      inputEl.parentElement.classList.add('form-group_validation_error');
    }
  }

  validateTel(inputEl) {
    const regex = /^[0-9()+-\s]+$/;
    const inputValue = inputEl.value;

    inputEl.parentElement.classList.remove(
      'form-group_validation_success',
      'form-group_validation_error'
    );

    if (regex.test(inputValue)) {
      inputEl.parentElement.classList.add('form-group_validation_success');
      return true;
    } else {
      inputEl.parentElement.classList.add('form-group_validation_error');
    }
  }

  validateAddress(inputEl) {
    const regex = /^.+$/;
    const inputValue = inputEl.value;

    inputEl.parentElement.classList.remove(
      'form-group_validation_success',
      'form-group_validation_error'
    );

    if (regex.test(inputValue)) {
      inputEl.parentElement.classList.add('form-group_validation_success');
      return true;
    } else {
      inputEl.parentElement.classList.add('form-group_validation_error');
    }
  }

  clearAllInputs(...inputEl) {
    inputEl.forEach(input => (input.value = ''));
  }

  // method doesn- wotk, rewrite it

  disableAllInputs() {
    for (let id in this._config.inputIDs)
      this[`${id}`].setAttribute('disabled', '');
    this._orderBlock.querySelector('.form-group').classList.add('disabled');
  }

  displayTip(inputID) {}
}

export { FormGroup };
