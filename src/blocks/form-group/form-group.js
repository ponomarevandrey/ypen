class FormGroup {
  constructor(config) {
    this._config = config;

    this._orderBlock = document.querySelector(`#${this._config.blockID}`);

    for (let id in this._config.inputIDs) {
      this[`${id}`] = document.querySelector(`#${this._config.inputIDs[id]}`);
    }
  }

  validateName(inputEl) {
    const regex = /^[a-zA-Zа-яА-ЯёЁ]+\s[a-zA-Zа-яА-ЯёЁ]+$/;
    const inputValue = inputEl.value;

    inputEl.parentElement.classList.remove(
      "form-group_validation_success",
      "form-group_validation_error"
    );

    if (regex.test(inputValue)) {
      inputEl.parentElement.classList.add("form-group_validation_success");
      return true;
    } else {
      inputEl.parentElement.classList.add("form-group_validation_error");
      const tip = inputEl.parentElement.querySelector(".form-group__tip");
      tip.classList.remove("form-group__tip_hidden");
    }
  }

  validateEmail(inputEl) {
    const regex = /^\w+\.?\w*@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    const inputValue = inputEl.value.toLowerCase();

    inputEl.parentElement.classList.remove(
      "form-group_validation_success",
      "form-group_validation_error"
    );

    if (regex.test(inputValue)) {
      inputEl.parentElement.classList.add("form-group_validation_success");
      return true;
    } else {
      inputEl.parentElement.classList.add("form-group_validation_error");
      const tip = inputEl.parentElement.querySelector(".form-group__tip");
      tip.classList.remove("form-group__tip_hidden");
    }
  }

  validateTel(inputEl) {
    const regex = /^[0-9()+-\s]+$/;
    const inputValue = inputEl.value;

    inputEl.parentElement.classList.remove(
      "form-group_validation_success",
      "form-group_validation_error"
    );

    if (regex.test(inputValue)) {
      inputEl.parentElement.classList.add("form-group_validation_success");
      return true;
    } else {
      inputEl.parentElement.classList.add("form-group_validation_error");
      const tip = inputEl.parentElement.querySelector(".form-group__tip");
      tip.classList.remove("form-group__tip_hidden");
    }
  }

  validateAddress(inputEl) {
    const regex = /^.+$/;
    const inputValue = inputEl.value;

    inputEl.parentElement.classList.remove(
      "form-group_validation_success",
      "form-group_validation_error"
    );

    if (regex.test(inputValue)) {
      inputEl.parentElement.classList.add("form-group_validation_success");
      return true;
    } else {
      inputEl.parentElement.classList.add("form-group_validation_error");
      const tip = inputEl.parentElement.querySelector(".form-group__tip");
      tip.classList.remove("form-group__tip_hidden");
    }
  }

  resetInputs(...inputs) {
    inputs.forEach(input => {
      const tip = input.parentElement.querySelector(".form-group__tip");
      tip.classList.add("form-group__tip_hidden");
      input.value = "";
      input.parentElement.classList.remove(
        "form-group_validation_success",
        "form-group_validation_error"
      );
    });
  }
}

export { FormGroup };
