import { Modal } from "../modal/modal";

const confirmOrderModal = new Modal({
  IDs: {
    dialog: "confirm-order-dialog",
  },
  /* all class names used in HTML related to modal window component: */
  classes: {
    backdrop: "modal_confirm-order",
    backdropStateModifier: "modal_visible",
    dialogStateModifier: "modal__dialog_visible",
    closeBtn: "modal__close-btn",
  },
});

export { confirmOrderModal };
