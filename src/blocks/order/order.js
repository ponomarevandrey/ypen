class Order {
  constructor(config = orderConfig) {
    this._config = config;
    this._orderBlock = document.querySelector('#order');

    [
      this._nameInput,
      this._emailInput,
      this._telInput,
      this._addressInput,
    ] = document.querySelectorAll(
      '#order-name, #order-email, #order-tel, #order-address'
    );

    this._nameInput.addEventListener('focusout', () => this.validateName());
  }

  validateName() {
    console.log('inside validate');
    const regex = /^[a-zA-Zа-яА-ЯёЁ]+\s[a-zA-Zа-яА-ЯёЁ]+$/;

    this._nameInput.parentElement.classList.remove(
      'form-group_validation_success',
      'form-group_validation_error'
    );

    if (regex.test(this._nameInput.value)) {
      console.log('success');
      this._nameInput.parentElement.classList.add(
        'form-group_validation_success'
      );
      return true;
    } else {
      this._nameInput.parentElement.classList.add(
        'form-group_validation_error'
      );
    }
  }

  validateEmail() {}

  validateTel() {}

  validateAddress() {}

  clearAllInputs() {
    this._nameInput.value = '';
    this._emailInput.value = '';
    this._telInput.value = '';
    this._addressInput = '';
  }

  disableAllInputs() {
    [
      this._nameInput,
      this._emailInput,
      this._telInput,
      this._addressInput,
    ].forEach(input => {
      input.setAttribute('disabled', '');
    });
    this._orderBlock.querySelector('.form-group').classList.add('disabled');
  }

  displayTip() {}

  displayConfirmMsg() {
    const confirmMsg = document.querySelector('.order__confirm-msg');
    confirmMsg.classList.remove('order__confirm-msg_hidden');
  }

  get inputsData() {
    return {
      name: this._nameInput.value,
      email: this._emailInput.value,
      tel: this._telInput.value,
      address: this._addressInput.value,
    };
  }
}

const orderConfig = {
  /* all class names used in HTML related to Order component: */
  ID: 'order',
};

const order = new Order();

export { order };
