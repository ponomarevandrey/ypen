import { Btn } from "../btn/btn";

import { videoModal } from "../video-modal/video-modal";

const videoTriggerBtnEl = document.querySelector("#video-trigger-btn");

const videoTriggerBtn = new Btn({
  btn: videoTriggerBtnEl,
  modal: videoModal,
});

videoTriggerBtnEl.addEventListener("click", videoTriggerBtn);
