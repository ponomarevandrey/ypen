/*************
 * CSS RESET *
 *************/
import './blocks/_reset.scss';

/**********
 * BLOCKS *
 **********/

/***************** Parent blocks *******************/

import './blocks/text/_text.scss';

import './blocks/heading/_heading.scss';

import './blocks/btn/_btn.scss';

import './blocks/grid-forms/_grid-forms.scss';

import './blocks/control/_control.scss';

import './blocks/form-group/_form-group.scss';

import './blocks/header/_header.scss';

import './blocks/select/_select.scss';

import './blocks/embed/_embed.scss';

/***************** Child blocks *******************/

import './blocks/page/_page.scss';

import './blocks/grid-page-layout1/_grid-page-layout1.scss';

import './blocks/grid-page-layout2/_grid-page-layout2.scss';

import './blocks/icons/_icons.scss';

import './blocks/footer/_footer.scss';

import './blocks/logo/_logo.scss';

import './blocks/section9/_section9.scss';

import './blocks/section8/_section8.scss';

import './blocks/section7/_section7.scss';

import './blocks/section6/_section6.scss';

import './blocks/section5/_section5.scss';

import './blocks/section4/_section4.scss';

import './blocks/section3/_section3.scss';

import './blocks/section2/_section2.scss';

import './blocks/section1/_section1.scss';

import './blocks/modal/_modal.scss';
import './blocks/modal/modal.js';
import { config as modalConfig, Modal } from './blocks/modal/modal.js';
new Modal(modalConfig);

import './blocks/page/_page.scss';
import './blocks/page/page.js';
