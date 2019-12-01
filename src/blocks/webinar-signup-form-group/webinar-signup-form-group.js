import { FormGroup } from '../form-group/form-group';

class WebinarSignupFormGroup extends FormGroup {
  constructor(config) {
    super(config);

    // this._name, this._email ... are created automatically in the loop above

    this.name.addEventListener('focusout', () => {
      console.log(this.name);
      super.validateName(this.name);
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

  get inputsData() {
    return {
      name: this.name.value,
      email: this.email.value,
      tel: this.tel.value,
      address: this.address.value,
    };
  }
}
