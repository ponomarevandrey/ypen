/* 
  HELPER FUNCTIONS
*/

// function for requiring images:
function requireFiles(r) {
  r.keys().forEach(r);
}

/*************
 * CSS RESET *
 *************/
import './blocks/_reset.scss';

/**********
 * BLOCKS *
 **********/

import './blocks/contacts/_contacts.scss';
requireFiles(require.context('./blocks/contacts/', true, /(svg|png|jpg)$/));

import './blocks/page/_page.scss';
import './blocks/page/page.js';

import './blocks/text/_text.scss';

import './blocks/heading/_heading.scss';

import './blocks/select/_select.scss';

import './blocks/embed/_embed.scss';

import './blocks/icons/_icons.scss';

import './blocks/logo/_logo.scss';

import './blocks/header/_header.scss';

import './blocks/main/_main.scss';

import './blocks/benefits1/_benefits1.scss';

import './blocks/benefits2/_benefits2.scss';

import './blocks/benefits3/_benefits3.scss';

import './blocks/benefits4/_benefits4.scss';

import './blocks/benefits5/_benefits5.scss';

import './blocks/certificates/_certificates.scss';

import './blocks/webinars/_webinars.scss';

import './blocks/telegram-bot/telegram-bot.js';

import './blocks/btn/_btn.scss';
import './blocks/btn/btn.js';

import './blocks/form-group/_form-group.scss';
import './blocks/form-group/form-group.js';

import './blocks/modal/_modal.scss';
import './blocks/modal/modal.js';

// Webinar Sign Up module:
import './blocks/webinar-signup-modal/webinar-signup-modal.js';

import './blocks/webinar-signup-btn/_webinar-signup-btn.scss';
import './blocks/webinar-signup-btn/webinar-signup-btn.js';

import './blocks/webinar-signup-form-group/webinar-signup-form-group.js';
//

// Order module:

import './blocks/order-btn/_order-btn.scss';
import './blocks/order-btn/order-btn.js';

import './blocks/order-form-group/_order-form-group.scss';
import './blocks/order-form-group/order-form-group.js';

import './blocks/confirm-order-modal/confirm-order-modal.js';

//

import './blocks/reviews/_reviews.scss';
// import './blocks/reviews/reviews.js';

import './blocks/footer/_footer.scss';

import './blocks/video-modal/_video-modal.scss';
import './blocks/video-modal/video-modal.js';

import './blocks/lightbox/_lightbox.scss';
import './blocks/lightbox/lightbox.js';
