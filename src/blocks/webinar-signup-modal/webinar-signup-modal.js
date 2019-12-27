import { Modal } from "../modal/modal";

const webinarSignupModal = new Modal({
  IDs: {
    dialog: "webinar-sign-up-dialog",
  },
  /* all class names used in HTML related to modal window component: */
  classes: {
    backdrop: "modal_webinar-signup",
    backdropStateModifier: "modal_visible",
    dialogStateModifier: "modal__dialog_visible",
    closeBtn: "modal__close-btn",
    video: "embed",
  },
});

export { webinarSignupModal };
