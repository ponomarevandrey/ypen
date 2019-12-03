import { FormGroup } from '../form-group/form-group';

class WebinarSignupFormGroup extends FormGroup {
  constructor(config) {
    super(config);

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
  }

  get inputsData() {
    return {
      name: this.name.value,
      email: this.email.value,
      tel: this.tel.value,
    };
  }
}

const config = {
  // blockID: 'order',
  inputIDs: {
    name: 'webinar-sign-up-name',
    email: 'webinar-sign-up-email',
    tel: 'webinar-sign-up-tel',
  },
};

const webinarSignupFormGroup = new WebinarSignupFormGroup(config);
//console.log(webinarSignupFormGroup);
export { webinarSignupFormGroup };
