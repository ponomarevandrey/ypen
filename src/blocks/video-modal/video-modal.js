import { Modal } from "../modal/modal";

const videoModal = new Modal({
  IDs: {
    dialog: "video-dialog",
  },
  /* all class names used in HTML related to modal window component: */
  classes: {
    backdrop: "modal_video",
    backdropStateModifier: "modal_visible",
    dialogStateModifier: "modal__dialog_visible",
    closeBtn: "modal__close-btn",
    video: "embed",
  },
});

export { videoModal };
