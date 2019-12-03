import { FormGroup } from '../form-group/form-group';

class OrderFormGroup extends FormGroup {
  constructor(config) {
    super(config);

    // this._name, this._email ... are created automatically in the loop above

    this.name.addEventListener('focusout', () => {
      this.validateName(this.name);
    });

    this.email.addEventListener('focusout', () => {
      this.validateEmail(this.email);
    });

    this.tel.addEventListener('focusout', () => {
      this.validateTel(this.tel);
    });
    this.address.addEventListener('focusout', () => {
      this.validateAddress(this.address);
    });
  }

  displayConfirmMsg() {
    const confirmMsg = document.querySelector('.order__confirm-msg');
    confirmMsg.classList.remove('order__confirm-msg_hidden');
  }

  get inputsData() {
    return {
      name: this.name.value,
      email: this.email.value,
      tel: this.tel.value,
      address: this.address.value,
    };
  }
}

const config = {
  blockID: 'order',
  inputIDs: {
    name: 'order-name',
    email: 'order-email',
    tel: 'order-tel',
    address: 'order-address',
  },
};

const orderFormGroup = new OrderFormGroup(config);

export { orderFormGroup };
