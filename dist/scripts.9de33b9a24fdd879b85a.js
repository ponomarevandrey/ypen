/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 33);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./sprite.svg": 3
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 2;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sprite.svg";

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports) {

var page__preload = document.querySelector('.page__preload');
window.addEventListener('load', function () {
  if (page__preload) page__preload.classList.remove('page__preload');
}, false);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 29 */
/***/ (function(module, exports) {

var sectionOtziviContentEl = document.querySelector('.reviews__content');
var sectionOtziviEl = document.querySelector('.reviews');

function makeVideoResponsive(e) {
  var windowWidth = parseInt(document.documentElement.clientWidth);

  if (windowWidth < 480) {
    sectionOtziviEl.style.height = "".concat(parseInt(getComputedStyle(sectionOtziviContentEl).height) + 250, "px");
  } else {
    sectionOtziviEl.style.height = "".concat(parseInt(getComputedStyle(sectionOtziviContentEl).height) + 200, "px");
  }
}

window.addEventListener('resize', makeVideoResponsive);
window.addEventListener('load', makeVideoResponsive);

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/blocks/_reset.scss
var _reset = __webpack_require__(0);

// EXTERNAL MODULE: ./src/blocks/contacts/_contacts.scss
var _contacts = __webpack_require__(1);

// EXTERNAL MODULE: ./src/blocks/page/_page.scss
var _page = __webpack_require__(4);

// EXTERNAL MODULE: ./src/blocks/page/page.js
var page = __webpack_require__(5);

// EXTERNAL MODULE: ./src/blocks/text/_text.scss
var _text = __webpack_require__(6);

// EXTERNAL MODULE: ./src/blocks/heading/_heading.scss
var _heading = __webpack_require__(7);

// EXTERNAL MODULE: ./src/blocks/embed/_embed.scss
var _embed = __webpack_require__(8);

// EXTERNAL MODULE: ./src/blocks/icons/_icons.scss
var _icons = __webpack_require__(9);

// EXTERNAL MODULE: ./src/blocks/logo/_logo.scss
var _logo = __webpack_require__(10);

// EXTERNAL MODULE: ./src/blocks/img-svg/_img-svg.scss
var _img_svg = __webpack_require__(11);

// EXTERNAL MODULE: ./src/blocks/header/_header.scss
var _header = __webpack_require__(12);

// CONCATENATED MODULE: ./src/blocks/btn/btn.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Btn =
/*#__PURE__*/
function () {
  function Btn(config) {
    _classCallCheck(this, Btn);

    this._config = config;
  }

  _createClass(Btn, [{
    key: "handleEvent",
    value: function handleEvent(e) {
      if (e.type === 'click') {
        e.preventDefault();

        this._config.modal.openModal(this._config.modal.dialog);
      }
    }
  }, {
    key: "findElByID",
    value: function findElByID(id) {
      return document.querySelector("#".concat(id));
    }
  }, {
    key: "findElByClass",
    value: function findElByClass(className) {
      return document.querySelector(".".concat(className));
    }
  }]);

  return Btn;
}();


// CONCATENATED MODULE: ./src/blocks/modal/modal.js
function modal_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function modal_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function modal_createClass(Constructor, protoProps, staticProps) { if (protoProps) modal_defineProperties(Constructor.prototype, protoProps); if (staticProps) modal_defineProperties(Constructor, staticProps); return Constructor; }

var Modal =
/*#__PURE__*/
function () {
  function Modal(config) {
    var _this = this;

    modal_classCallCheck(this, Modal);

    this._config = config;
    this._backdrop = document.querySelector(".".concat(this._config.classes.backdrop));
    this._opened = false;
    this._closeBtn = document.querySelector(".".concat(this._config.classes.backdrop, " .").concat(this._config.classes.closeBtn));
    this.dialog = document.querySelector("#".concat(this._config.IDs.dialog));
    document.addEventListener('keydown', function (e) {
      return _this.onKeydown(e);
    });
    document.addEventListener('click', function (e) {
      return _this.onClick(e);
    });
  } // confirm order moda:


  modal_createClass(Modal, [{
    key: "onClick",
    value: function onClick(e) {
      var clickedEl = e.target;

      if (clickedEl === this._backdrop || clickedEl === this._closeBtn) {
        this.closeModal(this.dialog); // webinar signup modal: this.closeModal();
      }
    }
  }, {
    key: "onKeydown",
    value: function onKeydown(e) {
      if (this._openedDialog && e.code === 'Escape') {
        var videoInModal = this._openedDialog.querySelector(".".concat(this._config.classes.video));

        if (videoInModal) this.stopVideo(videoInModal);
        this.toggleBackdrop();
        this._opened = false;
        document.body.style.overflow = '';
        return;
      }
    }
  }, {
    key: "toggleBackdrop",
    value: function toggleBackdrop() {
      this._backdrop.classList.toggle(this._config.classes.backdropStateModifier);
    }
  }, {
    key: "openModal",
    value: function openModal(dialog) {
      var newDialog = document.querySelector("#".concat(dialog.id));
      var visibleDialog = document.querySelector(".".concat(this._config.classes.dialogStateModifier));
      this._opened = !this._opened;
      this.toggleBackdrop();
      if (visibleDialog) this.hideDialog(visibleDialog);
      this.showDialog(newDialog);
      this._openedDialog = newDialog;
      document.body.style.overflow = 'hidden';
    }
  }, {
    key: "closeModal",
    value: function closeModal(el) {
      if (this._opened) {
        // handle video:
        var videoBlock = this._openedDialog && this._openedDialog.querySelector(".".concat(this._config.classes.video));

        if (videoBlock) this.stopVideo(videoBlock); //

        this._opened = !this._opened;
        this.toggleBackdrop();
        delete this._openedDialog;
        this.hideDialog(el);
        document.body.style.overflow = '';
        return;
      }
    }
  }, {
    key: "hideDialog",
    value: function hideDialog(dialog) {
      dialog.classList.remove(this._config.classes.dialogStateModifier);
    }
  }, {
    key: "showDialog",
    value: function showDialog(dialog) {
      dialog.classList.add(this._config.classes.dialogStateModifier);
    }
  }, {
    key: "stopVideo",
    value: function stopVideo(element) {
      /* Stop an iframe or HTML5 <video> from playing.
       param { element} - the element that contains the video */
      var iframe = element.querySelector('iframe');
      var video = element.querySelector('video');

      if (iframe) {
        var iframeSrc = iframe.src;
        iframe.src = iframeSrc;
      }

      if (video) video.pause();
    }
  }]);

  return Modal;
}();


// CONCATENATED MODULE: ./src/blocks/video-modal/video-modal.js

var videoModal = new Modal({
  IDs: {
    dialog: 'video-dialog'
  },

  /* all class names used in HTML related to modal window component: */
  classes: {
    backdrop: 'modal_video',
    backdropStateModifier: 'modal_visible',
    dialogStateModifier: 'modal__dialog_visible',
    closeBtn: 'modal__close-btn',
    video: 'embed'
  }
});

// CONCATENATED MODULE: ./src/blocks/main/main.js


var videoTriggerBtnEl = document.querySelector('#video-trigger-btn');
var videoTriggerBtn = new Btn({
  btn: videoTriggerBtnEl,
  modal: videoModal
});
videoTriggerBtnEl.addEventListener('click', videoTriggerBtn);
// EXTERNAL MODULE: ./src/blocks/main/_main.scss
var _main = __webpack_require__(13);

// EXTERNAL MODULE: ./src/blocks/benefits1/_benefits1.scss
var _benefits1 = __webpack_require__(14);

// EXTERNAL MODULE: ./src/blocks/benefits2/_benefits2.scss
var _benefits2 = __webpack_require__(15);

// EXTERNAL MODULE: ./src/blocks/benefits3/_benefits3.scss
var _benefits3 = __webpack_require__(16);

// EXTERNAL MODULE: ./src/blocks/benefits4/_benefits4.scss
var _benefits4 = __webpack_require__(17);

// EXTERNAL MODULE: ./src/blocks/benefits5/_benefits5.scss
var _benefits5 = __webpack_require__(18);

// EXTERNAL MODULE: ./src/blocks/certificates/_certificates.scss
var _certificates = __webpack_require__(19);

// EXTERNAL MODULE: ./src/blocks/webinars/_webinars.scss
var _webinars = __webpack_require__(20);

// EXTERNAL MODULE: ./src/blocks/order/_order.scss
var _order = __webpack_require__(21);

// EXTERNAL MODULE: ./src/blocks/order-calculator/_order-calculator.scss
var _order_calculator = __webpack_require__(22);

// EXTERNAL MODULE: ./src/blocks/btn/_btn.scss
var _btn = __webpack_require__(23);

// EXTERNAL MODULE: ./src/blocks/modal/_modal.scss
var _modal = __webpack_require__(24);

// EXTERNAL MODULE: ./src/blocks/webinar-signup-btn/_webinar-signup-btn.scss
var _webinar_signup_btn = __webpack_require__(25);

// EXTERNAL MODULE: ./src/blocks/order-btn/_order-btn.scss
var _order_btn = __webpack_require__(26);

// EXTERNAL MODULE: ./src/blocks/order-form-group/_order-form-group.scss
var _order_form_group = __webpack_require__(27);

// EXTERNAL MODULE: ./src/blocks/reviews/_reviews.scss
var _reviews = __webpack_require__(28);

// EXTERNAL MODULE: ./src/blocks/reviews/reviews.js
var reviews = __webpack_require__(29);

// EXTERNAL MODULE: ./src/blocks/footer/_footer.scss
var _footer = __webpack_require__(30);

// EXTERNAL MODULE: ./src/blocks/video-modal/_video-modal.scss
var _video_modal = __webpack_require__(31);

// EXTERNAL MODULE: ./src/blocks/lightbox/_lightbox.scss
var _lightbox = __webpack_require__(32);

// CONCATENATED MODULE: ./src/blocks/lightbox/lightbox.js
function lightbox_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function lightbox_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function lightbox_createClass(Constructor, protoProps, staticProps) { if (protoProps) lightbox_defineProperties(Constructor.prototype, protoProps); if (staticProps) lightbox_defineProperties(Constructor, staticProps); return Constructor; }

var Lightbox =
/*#__PURE__*/
function () {
  function Lightbox(config) {
    var _this = this;

    lightbox_classCallCheck(this, Lightbox);

    this._config = config;
    this._backdrop = document.querySelector(".".concat(this._config.classes.backdrop));
    this._closeBtn = document.querySelector(".".concat(this._config.classes.closeBtn));
    this._slides = document.querySelectorAll('.lightbox__dialog');
    this._counter = 0;
    this._amount = this._slides.length;
    var prevBtn = document.querySelector("#".concat(this._config.classes.prevBtn));
    var nextBtn = document.querySelector("#".concat(this._config.classes.nextBtn));
    prevBtn.addEventListener('click', function (e) {
      return _this.navigate(e, -1);
    });
    nextBtn.addEventListener('click', function (e) {
      return _this.navigate(e, 1);
    });
    document.addEventListener('click', function (e) {
      return _this.onClick(e);
    });
    document.addEventListener('keydown', function (e) {
      return _this.onKeydown(e);
    });
  }

  lightbox_createClass(Lightbox, [{
    key: "getElemIndex",
    value: function getElemIndex(elem) {
      if (elem.dataset.lightbox) return elem.dataset.lightbox.match(/\d/)[0];
    }
  }, {
    key: "navigate",
    value: function navigate(e, direction) {
      this.hideDialog(this._current);
      this._counter = this._counter + direction;
      if (direction === -1 && this._counter < 0) this._counter = this._amount - 1;
      if (direction === 1 && !this._slides[this._counter]) this._counter = 0;
      this._current = this._slides[this._counter];
      this.showDialog(this._current);
    }
  }, {
    key: "openLightbox",
    value: function openLightbox(clickedEl) {
      var newDialog = document.querySelector("#".concat(clickedEl.dataset.lightbox));
      var visibleDialog = document.querySelector(".".concat(this._config.classes.dialogStateModifier));
      this.toggleBackdrop();
      if (visibleDialog) this.hideDialog(visibleDialog);
      this.showDialog(newDialog);
      this._openedDialog = newDialog;
      document.body.style.overflow = 'hidden';
    }
  }, {
    key: "closeLightbox",
    value: function closeLightbox() {
      this.toggleBackdrop();
      delete this._openedDialog;
      document.body.style.overflow = '';
      return;
    }
  }, {
    key: "onClick",
    value: function onClick(e) {
      var clickedEl = e.target;

      if (clickedEl === this._backdrop || clickedEl === this._closeBtn) {
        this.closeLightbox();
      }

      if (clickedEl.dataset.lightbox) {
        e.preventDefault();
        this._counter = Number(this.getElemIndex(clickedEl));
        this._current = this._slides[this._counter];
        this.openLightbox(clickedEl);
      }
    }
  }, {
    key: "onKeydown",
    value: function onKeydown(e) {
      if (this._openedDialog && e.code === 'Escape') {
        this.toggleBackdrop();
        delete this._openedDialog;
        document.body.style.overflow = '';
        return;
      }
    }
  }, {
    key: "showDialog",
    value: function showDialog(dialog) {
      dialog.classList.add(this._config.classes.dialogStateModifier);
    }
  }, {
    key: "hideDialog",
    value: function hideDialog(dialog) {
      dialog.classList.remove(this._config.classes.dialogStateModifier);
    }
  }, {
    key: "toggleBackdrop",
    value: function toggleBackdrop() {
      this._backdrop.classList.toggle(this._config.classes.backdropStateModifier);
    }
  }]);

  return Lightbox;
}();

var config = {
  // all class names used in HTML related to Lightbox window component:
  classes: {
    backdrop: 'lightbox',
    backdropStateModifier: 'lightbox_visible',
    dialogStateModifier: 'lightbox__dialog_visible',
    closeBtn: 'lightbox__close-btn',
    prevBtn: 'lightbox-btn-prev',
    nextBtn: 'lightbox-btn-next',
    video: 'embed'
  }
};
var lightbox = new Lightbox(config);

// CONCATENATED MODULE: ./src/index.js
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



/**********
 * BLOCKS *
 **********/


requireFiles(__webpack_require__(2));



















 // import './blocks/telegram-bot/telegram-bot.js';

 // import './blocks/btn/btn.js';
// import './blocks/form-group/_form-group.scss';
// import './blocks/form-group/form-group.js';


 // import './blocks/webinar-signup-modal/webinar-signup-modal.js';

 // import './blocks/webinar-signup-btn/webinar-signup-btn.js';
// import './blocks/webinar-signup-form-group/webinar-signup-form-group.js';

 // import './blocks/order-btn/order-btn.js';

 // import './blocks/order-form-group/order-form-group.js';
// import './blocks/confirm-order-modal/confirm-order-modal.js';









/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9fcmVzZXQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2NvbnRhY3RzL19jb250YWN0cy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvY29udGFjdHMgc3luYyAoc3ZnfHBuZ3xqcGcpJCIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2NvbnRhY3RzL3Nwcml0ZS5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9wYWdlL19wYWdlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9wYWdlL3BhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy90ZXh0L190ZXh0LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9oZWFkaW5nL19oZWFkaW5nLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9lbWJlZC9fZW1iZWQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2ljb25zL19pY29ucy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvbG9nby9fbG9nby5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvaW1nLXN2Zy9faW1nLXN2Zy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvaGVhZGVyL19oZWFkZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL21haW4vX21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2JlbmVmaXRzMS9fYmVuZWZpdHMxLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9iZW5lZml0czIvX2JlbmVmaXRzMi5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvYmVuZWZpdHMzL19iZW5lZml0czMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2JlbmVmaXRzNC9fYmVuZWZpdHM0LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9iZW5lZml0czUvX2JlbmVmaXRzNS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvY2VydGlmaWNhdGVzL19jZXJ0aWZpY2F0ZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL3dlYmluYXJzL193ZWJpbmFycy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3Mvb3JkZXIvX29yZGVyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9vcmRlci1jYWxjdWxhdG9yL19vcmRlci1jYWxjdWxhdG9yLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9idG4vX2J0bi5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvbW9kYWwvX21vZGFsLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy93ZWJpbmFyLXNpZ251cC1idG4vX3dlYmluYXItc2lnbnVwLWJ0bi5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3Mvb3JkZXItYnRuL19vcmRlci1idG4uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL29yZGVyLWZvcm0tZ3JvdXAvX29yZGVyLWZvcm0tZ3JvdXAuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL3Jldmlld3MvX3Jldmlld3Muc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL3Jldmlld3MvcmV2aWV3cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2Zvb3Rlci9fZm9vdGVyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy92aWRlby1tb2RhbC9fdmlkZW8tbW9kYWwuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2xpZ2h0Ym94L19saWdodGJveC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvYnRuL2J0bi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL21vZGFsL21vZGFsLmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvdmlkZW8tbW9kYWwvdmlkZW8tbW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9tYWluL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9saWdodGJveC9saWdodGJveC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsicGFnZV9fcHJlbG9hZCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJzZWN0aW9uT3R6aXZpQ29udGVudEVsIiwic2VjdGlvbk90eml2aUVsIiwibWFrZVZpZGVvUmVzcG9uc2l2ZSIsImUiLCJ3aW5kb3dXaWR0aCIsInBhcnNlSW50IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50V2lkdGgiLCJzdHlsZSIsImhlaWdodCIsImdldENvbXB1dGVkU3R5bGUiLCJCdG4iLCJjb25maWciLCJfY29uZmlnIiwidHlwZSIsInByZXZlbnREZWZhdWx0IiwibW9kYWwiLCJvcGVuTW9kYWwiLCJkaWFsb2ciLCJpZCIsImNsYXNzTmFtZSIsIk1vZGFsIiwiX2JhY2tkcm9wIiwiY2xhc3NlcyIsImJhY2tkcm9wIiwiX29wZW5lZCIsIl9jbG9zZUJ0biIsImNsb3NlQnRuIiwiSURzIiwib25LZXlkb3duIiwib25DbGljayIsImNsaWNrZWRFbCIsInRhcmdldCIsImNsb3NlTW9kYWwiLCJfb3BlbmVkRGlhbG9nIiwiY29kZSIsInZpZGVvSW5Nb2RhbCIsInZpZGVvIiwic3RvcFZpZGVvIiwidG9nZ2xlQmFja2Ryb3AiLCJib2R5Iiwib3ZlcmZsb3ciLCJ0b2dnbGUiLCJiYWNrZHJvcFN0YXRlTW9kaWZpZXIiLCJuZXdEaWFsb2ciLCJ2aXNpYmxlRGlhbG9nIiwiZGlhbG9nU3RhdGVNb2RpZmllciIsImhpZGVEaWFsb2ciLCJzaG93RGlhbG9nIiwiZWwiLCJ2aWRlb0Jsb2NrIiwiYWRkIiwiZWxlbWVudCIsImlmcmFtZSIsImlmcmFtZVNyYyIsInNyYyIsInBhdXNlIiwidmlkZW9Nb2RhbCIsInZpZGVvVHJpZ2dlckJ0bkVsIiwidmlkZW9UcmlnZ2VyQnRuIiwiYnRuIiwiTGlnaHRib3giLCJfc2xpZGVzIiwicXVlcnlTZWxlY3RvckFsbCIsIl9jb3VudGVyIiwiX2Ftb3VudCIsImxlbmd0aCIsInByZXZCdG4iLCJuZXh0QnRuIiwibmF2aWdhdGUiLCJlbGVtIiwiZGF0YXNldCIsImxpZ2h0Ym94IiwibWF0Y2giLCJkaXJlY3Rpb24iLCJfY3VycmVudCIsImNsb3NlTGlnaHRib3giLCJOdW1iZXIiLCJnZXRFbGVtSW5kZXgiLCJvcGVuTGlnaHRib3giLCJyZXF1aXJlRmlsZXMiLCJyIiwia2V5cyIsImZvckVhY2giLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7O0FDbEZBLHVDOzs7Ozs7QUNBQSx1Qzs7Ozs7O0FDQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0I7Ozs7OztBQ3RCQSxpQkFBaUIscUJBQXVCLG9COzs7Ozs7QUNBeEMsdUM7Ozs7OztBQ0FBLElBQU1BLGFBQWEsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLGdCQUF2QixDQUF0QjtBQUVBQyxNQUFNLENBQUNDLGdCQUFQLENBQ0UsTUFERixFQUVFLFlBQU07QUFDSixNQUFJSixhQUFKLEVBQW1CQSxhQUFhLENBQUNLLFNBQWQsQ0FBd0JDLE1BQXhCLENBQStCLGVBQS9CO0FBQ3BCLENBSkgsRUFLRSxLQUxGLEU7Ozs7OztBQ0ZBLHVDOzs7Ozs7QUNBQSx1Qzs7Ozs7O0FDQUEsdUM7Ozs7OztBQ0FBLHVDOzs7Ozs7QUNBQSx1Qzs7Ozs7O0FDQUEsdUM7Ozs7OztBQ0FBLHVDOzs7Ozs7QUNBQSx1Qzs7Ozs7O0FDQUEsdUM7Ozs7OztBQ0FBLHVDOzs7Ozs7QUNBQSx1Qzs7Ozs7O0FDQUEsdUM7Ozs7OztBQ0FBLHVDOzs7Ozs7QUNBQSx1Qzs7Ozs7O0FDQUEsdUM7Ozs7OztBQ0FBLHVDOzs7Ozs7QUNBQSx1Qzs7Ozs7O0FDQUEsdUM7Ozs7OztBQ0FBLHVDOzs7Ozs7QUNBQSx1Qzs7Ozs7O0FDQUEsdUM7Ozs7OztBQ0FBLHVDOzs7Ozs7QUNBQSx1Qzs7Ozs7O0FDQUEsSUFBTUMsc0JBQXNCLEdBQUdOLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixtQkFBdkIsQ0FBL0I7QUFDQSxJQUFNTSxlQUFlLEdBQUdQLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixVQUF2QixDQUF4Qjs7QUFFQSxTQUFTTyxtQkFBVCxDQUE2QkMsQ0FBN0IsRUFBZ0M7QUFDOUIsTUFBSUMsV0FBVyxHQUFHQyxRQUFRLENBQUNYLFFBQVEsQ0FBQ1ksZUFBVCxDQUF5QkMsV0FBMUIsQ0FBMUI7O0FBQ0EsTUFBSUgsV0FBVyxHQUFHLEdBQWxCLEVBQXVCO0FBQ3JCSCxtQkFBZSxDQUFDTyxLQUFoQixDQUFzQkMsTUFBdEIsYUFBa0NKLFFBQVEsQ0FDeENLLGdCQUFnQixDQUFDVixzQkFBRCxDQUFoQixDQUF5Q1MsTUFERCxDQUFSLEdBRTlCLEdBRko7QUFHRCxHQUpELE1BSU87QUFDTFIsbUJBQWUsQ0FBQ08sS0FBaEIsQ0FBc0JDLE1BQXRCLGFBQWtDSixRQUFRLENBQ3hDSyxnQkFBZ0IsQ0FBQ1Ysc0JBQUQsQ0FBaEIsQ0FBeUNTLE1BREQsQ0FBUixHQUU5QixHQUZKO0FBR0Q7QUFDRjs7QUFFRGIsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ0ssbUJBQWxDO0FBQ0FOLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsTUFBeEIsRUFBZ0NLLG1CQUFoQyxFOzs7Ozs7QUNqQkEsdUM7Ozs7OztBQ0FBLHVDOzs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0FNUyxHOzs7QUFDSixlQUFZQyxNQUFaLEVBQW9CO0FBQUE7O0FBQ2xCLFNBQUtDLE9BQUwsR0FBZUQsTUFBZjtBQUNEOzs7O2dDQUVXVCxDLEVBQUc7QUFDYixVQUFJQSxDQUFDLENBQUNXLElBQUYsS0FBVyxPQUFmLEVBQXdCO0FBQ3RCWCxTQUFDLENBQUNZLGNBQUY7O0FBQ0EsYUFBS0YsT0FBTCxDQUFhRyxLQUFiLENBQW1CQyxTQUFuQixDQUE2QixLQUFLSixPQUFMLENBQWFHLEtBQWIsQ0FBbUJFLE1BQWhEO0FBQ0Q7QUFDRjs7OytCQUVVQyxFLEVBQUk7QUFDYixhQUFPekIsUUFBUSxDQUFDQyxhQUFULFlBQTJCd0IsRUFBM0IsRUFBUDtBQUNEOzs7a0NBRWFDLFMsRUFBVztBQUN2QixhQUFPMUIsUUFBUSxDQUFDQyxhQUFULFlBQTJCeUIsU0FBM0IsRUFBUDtBQUNEOzs7Ozs7Ozs7Ozs7OztJQ2xCR0MsSzs7O0FBQ0osaUJBQVlULE1BQVosRUFBb0I7QUFBQTs7QUFBQTs7QUFDbEIsU0FBS0MsT0FBTCxHQUFlRCxNQUFmO0FBRUEsU0FBS1UsU0FBTCxHQUFpQjVCLFFBQVEsQ0FBQ0MsYUFBVCxZQUNYLEtBQUtrQixPQUFMLENBQWFVLE9BQWIsQ0FBcUJDLFFBRFYsRUFBakI7QUFHQSxTQUFLQyxPQUFMLEdBQWUsS0FBZjtBQUNBLFNBQUtDLFNBQUwsR0FBaUJoQyxRQUFRLENBQUNDLGFBQVQsWUFDWCxLQUFLa0IsT0FBTCxDQUFhVSxPQUFiLENBQXFCQyxRQURWLGVBQ3VCLEtBQUtYLE9BQUwsQ0FBYVUsT0FBYixDQUFxQkksUUFENUMsRUFBakI7QUFHQSxTQUFLVCxNQUFMLEdBQWN4QixRQUFRLENBQUNDLGFBQVQsWUFBMkIsS0FBS2tCLE9BQUwsQ0FBYWUsR0FBYixDQUFpQlYsTUFBNUMsRUFBZDtBQUVBeEIsWUFBUSxDQUFDRyxnQkFBVCxDQUEwQixTQUExQixFQUFxQyxVQUFBTSxDQUFDO0FBQUEsYUFBSSxLQUFJLENBQUMwQixTQUFMLENBQWUxQixDQUFmLENBQUo7QUFBQSxLQUF0QztBQUNBVCxZQUFRLENBQUNHLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLFVBQUFNLENBQUM7QUFBQSxhQUFJLEtBQUksQ0FBQzJCLE9BQUwsQ0FBYTNCLENBQWIsQ0FBSjtBQUFBLEtBQXBDO0FBQ0QsRyxDQUVEOzs7Ozs0QkFDUUEsQyxFQUFHO0FBQ1QsVUFBTTRCLFNBQVMsR0FBRzVCLENBQUMsQ0FBQzZCLE1BQXBCOztBQUVBLFVBQUlELFNBQVMsS0FBSyxLQUFLVCxTQUFuQixJQUFnQ1MsU0FBUyxLQUFLLEtBQUtMLFNBQXZELEVBQWtFO0FBQ2hFLGFBQUtPLFVBQUwsQ0FBZ0IsS0FBS2YsTUFBckIsRUFEZ0UsQ0FDbEM7QUFDL0I7QUFDRjs7OzhCQUVTZixDLEVBQUc7QUFDWCxVQUFJLEtBQUsrQixhQUFMLElBQXNCL0IsQ0FBQyxDQUFDZ0MsSUFBRixLQUFXLFFBQXJDLEVBQStDO0FBQzdDLFlBQU1DLFlBQVksR0FBRyxLQUFLRixhQUFMLENBQW1CdkMsYUFBbkIsWUFDZixLQUFLa0IsT0FBTCxDQUFhVSxPQUFiLENBQXFCYyxLQUROLEVBQXJCOztBQUdBLFlBQUlELFlBQUosRUFBa0IsS0FBS0UsU0FBTCxDQUFlRixZQUFmO0FBQ2xCLGFBQUtHLGNBQUw7QUFDQSxhQUFLZCxPQUFMLEdBQWUsS0FBZjtBQUNBL0IsZ0JBQVEsQ0FBQzhDLElBQVQsQ0FBY2hDLEtBQWQsQ0FBb0JpQyxRQUFwQixHQUErQixFQUEvQjtBQUNBO0FBQ0Q7QUFDRjs7O3FDQUVnQjtBQUNmLFdBQUtuQixTQUFMLENBQWV4QixTQUFmLENBQXlCNEMsTUFBekIsQ0FBZ0MsS0FBSzdCLE9BQUwsQ0FBYVUsT0FBYixDQUFxQm9CLHFCQUFyRDtBQUNEOzs7OEJBRVN6QixNLEVBQVE7QUFDaEIsVUFBTTBCLFNBQVMsR0FBR2xELFFBQVEsQ0FBQ0MsYUFBVCxZQUEyQnVCLE1BQU0sQ0FBQ0MsRUFBbEMsRUFBbEI7QUFDQSxVQUFNMEIsYUFBYSxHQUFHbkQsUUFBUSxDQUFDQyxhQUFULFlBQ2hCLEtBQUtrQixPQUFMLENBQWFVLE9BQWIsQ0FBcUJ1QixtQkFETCxFQUF0QjtBQUdBLFdBQUtyQixPQUFMLEdBQWUsQ0FBQyxLQUFLQSxPQUFyQjtBQUVBLFdBQUtjLGNBQUw7QUFFQSxVQUFJTSxhQUFKLEVBQW1CLEtBQUtFLFVBQUwsQ0FBZ0JGLGFBQWhCO0FBRW5CLFdBQUtHLFVBQUwsQ0FBZ0JKLFNBQWhCO0FBQ0EsV0FBS1YsYUFBTCxHQUFxQlUsU0FBckI7QUFDQWxELGNBQVEsQ0FBQzhDLElBQVQsQ0FBY2hDLEtBQWQsQ0FBb0JpQyxRQUFwQixHQUErQixRQUEvQjtBQUNEOzs7K0JBRVVRLEUsRUFBSTtBQUNiLFVBQUksS0FBS3hCLE9BQVQsRUFBa0I7QUFDaEI7QUFDQSxZQUFNeUIsVUFBVSxHQUNkLEtBQUtoQixhQUFMLElBQ0EsS0FBS0EsYUFBTCxDQUFtQnZDLGFBQW5CLFlBQXFDLEtBQUtrQixPQUFMLENBQWFVLE9BQWIsQ0FBcUJjLEtBQTFELEVBRkY7O0FBR0EsWUFBSWEsVUFBSixFQUFnQixLQUFLWixTQUFMLENBQWVZLFVBQWYsRUFMQSxDQU1oQjs7QUFFQSxhQUFLekIsT0FBTCxHQUFlLENBQUMsS0FBS0EsT0FBckI7QUFFQSxhQUFLYyxjQUFMO0FBQ0EsZUFBTyxLQUFLTCxhQUFaO0FBQ0EsYUFBS2EsVUFBTCxDQUFnQkUsRUFBaEI7QUFDQXZELGdCQUFRLENBQUM4QyxJQUFULENBQWNoQyxLQUFkLENBQW9CaUMsUUFBcEIsR0FBK0IsRUFBL0I7QUFDQTtBQUNEO0FBQ0Y7OzsrQkFFVXZCLE0sRUFBUTtBQUNqQkEsWUFBTSxDQUFDcEIsU0FBUCxDQUFpQkMsTUFBakIsQ0FBd0IsS0FBS2MsT0FBTCxDQUFhVSxPQUFiLENBQXFCdUIsbUJBQTdDO0FBQ0Q7OzsrQkFDVTVCLE0sRUFBUTtBQUNqQkEsWUFBTSxDQUFDcEIsU0FBUCxDQUFpQnFELEdBQWpCLENBQXFCLEtBQUt0QyxPQUFMLENBQWFVLE9BQWIsQ0FBcUJ1QixtQkFBMUM7QUFDRDs7OzhCQUVTTSxPLEVBQVM7QUFDakI7O0FBRUEsVUFBTUMsTUFBTSxHQUFHRCxPQUFPLENBQUN6RCxhQUFSLENBQXNCLFFBQXRCLENBQWY7QUFDQSxVQUFNMEMsS0FBSyxHQUFHZSxPQUFPLENBQUN6RCxhQUFSLENBQXNCLE9BQXRCLENBQWQ7O0FBRUEsVUFBSTBELE1BQUosRUFBWTtBQUNWLFlBQU1DLFNBQVMsR0FBR0QsTUFBTSxDQUFDRSxHQUF6QjtBQUNBRixjQUFNLENBQUNFLEdBQVAsR0FBYUQsU0FBYjtBQUNEOztBQUVELFVBQUlqQixLQUFKLEVBQVdBLEtBQUssQ0FBQ21CLEtBQU47QUFDWjs7Ozs7Ozs7QUNqR0g7QUFFQSxJQUFNQyxVQUFVLEdBQUcsSUFBSXBDLEtBQUosQ0FBVTtBQUMzQk8sS0FBRyxFQUFFO0FBQ0hWLFVBQU0sRUFBRTtBQURMLEdBRHNCOztBQUkzQjtBQUNBSyxTQUFPLEVBQUU7QUFDUEMsWUFBUSxFQUFFLGFBREg7QUFFUG1CLHlCQUFxQixFQUFFLGVBRmhCO0FBR1BHLHVCQUFtQixFQUFFLHVCQUhkO0FBSVBuQixZQUFRLEVBQUUsa0JBSkg7QUFLUFUsU0FBSyxFQUFFO0FBTEE7QUFMa0IsQ0FBVixDQUFuQjs7O0FDRkE7QUFFQTtBQUVBLElBQU1xQixpQkFBaUIsR0FBR2hFLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixvQkFBdkIsQ0FBMUI7QUFFQSxJQUFNZ0UsZUFBZSxHQUFHLElBQUloRCxHQUFKLENBQVE7QUFDOUJpRCxLQUFHLEVBQUVGLGlCQUR5QjtBQUU5QjFDLE9BQUssRUFBRXlDLFVBQVVBO0FBRmEsQ0FBUixDQUF4QjtBQUtBQyxpQkFBaUIsQ0FBQzdELGdCQUFsQixDQUFtQyxPQUFuQyxFQUE0QzhELGVBQTVDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDWE1FLFE7OztBQUNKLG9CQUFZakQsTUFBWixFQUFvQjtBQUFBOztBQUFBOztBQUNsQixTQUFLQyxPQUFMLEdBQWVELE1BQWY7QUFFQSxTQUFLVSxTQUFMLEdBQWlCNUIsUUFBUSxDQUFDQyxhQUFULFlBQ1gsS0FBS2tCLE9BQUwsQ0FBYVUsT0FBYixDQUFxQkMsUUFEVixFQUFqQjtBQUdBLFNBQUtFLFNBQUwsR0FBaUJoQyxRQUFRLENBQUNDLGFBQVQsWUFDWCxLQUFLa0IsT0FBTCxDQUFhVSxPQUFiLENBQXFCSSxRQURWLEVBQWpCO0FBSUEsU0FBS21DLE9BQUwsR0FBZXBFLFFBQVEsQ0FBQ3FFLGdCQUFULENBQTBCLG1CQUExQixDQUFmO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQixDQUFoQjtBQUNBLFNBQUtDLE9BQUwsR0FBZSxLQUFLSCxPQUFMLENBQWFJLE1BQTVCO0FBRUEsUUFBTUMsT0FBTyxHQUFHekUsUUFBUSxDQUFDQyxhQUFULFlBQTJCLEtBQUtrQixPQUFMLENBQWFVLE9BQWIsQ0FBcUI0QyxPQUFoRCxFQUFoQjtBQUNBLFFBQU1DLE9BQU8sR0FBRzFFLFFBQVEsQ0FBQ0MsYUFBVCxZQUEyQixLQUFLa0IsT0FBTCxDQUFhVSxPQUFiLENBQXFCNkMsT0FBaEQsRUFBaEI7QUFDQUQsV0FBTyxDQUFDdEUsZ0JBQVIsQ0FBeUIsT0FBekIsRUFBa0MsVUFBQU0sQ0FBQztBQUFBLGFBQUksS0FBSSxDQUFDa0UsUUFBTCxDQUFjbEUsQ0FBZCxFQUFpQixDQUFDLENBQWxCLENBQUo7QUFBQSxLQUFuQztBQUNBaUUsV0FBTyxDQUFDdkUsZ0JBQVIsQ0FBeUIsT0FBekIsRUFBa0MsVUFBQU0sQ0FBQztBQUFBLGFBQUksS0FBSSxDQUFDa0UsUUFBTCxDQUFjbEUsQ0FBZCxFQUFpQixDQUFqQixDQUFKO0FBQUEsS0FBbkM7QUFFQVQsWUFBUSxDQUFDRyxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxVQUFBTSxDQUFDO0FBQUEsYUFBSSxLQUFJLENBQUMyQixPQUFMLENBQWEzQixDQUFiLENBQUo7QUFBQSxLQUFwQztBQUNBVCxZQUFRLENBQUNHLGdCQUFULENBQTBCLFNBQTFCLEVBQXFDLFVBQUFNLENBQUM7QUFBQSxhQUFJLEtBQUksQ0FBQzBCLFNBQUwsQ0FBZTFCLENBQWYsQ0FBSjtBQUFBLEtBQXRDO0FBQ0Q7Ozs7aUNBRVltRSxJLEVBQU07QUFDakIsVUFBSUEsSUFBSSxDQUFDQyxPQUFMLENBQWFDLFFBQWpCLEVBQTJCLE9BQU9GLElBQUksQ0FBQ0MsT0FBTCxDQUFhQyxRQUFiLENBQXNCQyxLQUF0QixDQUE0QixJQUE1QixFQUFrQyxDQUFsQyxDQUFQO0FBQzVCOzs7NkJBRVF0RSxDLEVBQUd1RSxTLEVBQVc7QUFDckIsV0FBSzNCLFVBQUwsQ0FBZ0IsS0FBSzRCLFFBQXJCO0FBRUEsV0FBS1gsUUFBTCxHQUFnQixLQUFLQSxRQUFMLEdBQWdCVSxTQUFoQztBQUVBLFVBQUlBLFNBQVMsS0FBSyxDQUFDLENBQWYsSUFBb0IsS0FBS1YsUUFBTCxHQUFnQixDQUF4QyxFQUEyQyxLQUFLQSxRQUFMLEdBQWdCLEtBQUtDLE9BQUwsR0FBZSxDQUEvQjtBQUMzQyxVQUFJUyxTQUFTLEtBQUssQ0FBZCxJQUFtQixDQUFDLEtBQUtaLE9BQUwsQ0FBYSxLQUFLRSxRQUFsQixDQUF4QixFQUFxRCxLQUFLQSxRQUFMLEdBQWdCLENBQWhCO0FBRXJELFdBQUtXLFFBQUwsR0FBZ0IsS0FBS2IsT0FBTCxDQUFhLEtBQUtFLFFBQWxCLENBQWhCO0FBQ0EsV0FBS2hCLFVBQUwsQ0FBZ0IsS0FBSzJCLFFBQXJCO0FBQ0Q7OztpQ0FFWTVDLFMsRUFBVztBQUN0QixVQUFNYSxTQUFTLEdBQUdsRCxRQUFRLENBQUNDLGFBQVQsWUFBMkJvQyxTQUFTLENBQUN3QyxPQUFWLENBQWtCQyxRQUE3QyxFQUFsQjtBQUNBLFVBQU0zQixhQUFhLEdBQUduRCxRQUFRLENBQUNDLGFBQVQsWUFDaEIsS0FBS2tCLE9BQUwsQ0FBYVUsT0FBYixDQUFxQnVCLG1CQURMLEVBQXRCO0FBSUEsV0FBS1AsY0FBTDtBQUNBLFVBQUlNLGFBQUosRUFBbUIsS0FBS0UsVUFBTCxDQUFnQkYsYUFBaEI7QUFFbkIsV0FBS0csVUFBTCxDQUFnQkosU0FBaEI7QUFDQSxXQUFLVixhQUFMLEdBQXFCVSxTQUFyQjtBQUNBbEQsY0FBUSxDQUFDOEMsSUFBVCxDQUFjaEMsS0FBZCxDQUFvQmlDLFFBQXBCLEdBQStCLFFBQS9CO0FBQ0Q7OztvQ0FFZTtBQUNkLFdBQUtGLGNBQUw7QUFDQSxhQUFPLEtBQUtMLGFBQVo7QUFDQXhDLGNBQVEsQ0FBQzhDLElBQVQsQ0FBY2hDLEtBQWQsQ0FBb0JpQyxRQUFwQixHQUErQixFQUEvQjtBQUNBO0FBQ0Q7Ozs0QkFFT3RDLEMsRUFBRztBQUNULFVBQU00QixTQUFTLEdBQUc1QixDQUFDLENBQUM2QixNQUFwQjs7QUFFQSxVQUFJRCxTQUFTLEtBQUssS0FBS1QsU0FBbkIsSUFBZ0NTLFNBQVMsS0FBSyxLQUFLTCxTQUF2RCxFQUFrRTtBQUNoRSxhQUFLa0QsYUFBTDtBQUNEOztBQUVELFVBQUk3QyxTQUFTLENBQUN3QyxPQUFWLENBQWtCQyxRQUF0QixFQUFnQztBQUM5QnJFLFNBQUMsQ0FBQ1ksY0FBRjtBQUNBLGFBQUtpRCxRQUFMLEdBQWdCYSxNQUFNLENBQUMsS0FBS0MsWUFBTCxDQUFrQi9DLFNBQWxCLENBQUQsQ0FBdEI7QUFDQSxhQUFLNEMsUUFBTCxHQUFnQixLQUFLYixPQUFMLENBQWEsS0FBS0UsUUFBbEIsQ0FBaEI7QUFDQSxhQUFLZSxZQUFMLENBQWtCaEQsU0FBbEI7QUFDRDtBQUNGOzs7OEJBRVM1QixDLEVBQUc7QUFDWCxVQUFJLEtBQUsrQixhQUFMLElBQXNCL0IsQ0FBQyxDQUFDZ0MsSUFBRixLQUFXLFFBQXJDLEVBQStDO0FBQzdDLGFBQUtJLGNBQUw7QUFDQSxlQUFPLEtBQUtMLGFBQVo7QUFDQXhDLGdCQUFRLENBQUM4QyxJQUFULENBQWNoQyxLQUFkLENBQW9CaUMsUUFBcEIsR0FBK0IsRUFBL0I7QUFDQTtBQUNEO0FBQ0Y7OzsrQkFFVXZCLE0sRUFBUTtBQUNqQkEsWUFBTSxDQUFDcEIsU0FBUCxDQUFpQnFELEdBQWpCLENBQXFCLEtBQUt0QyxPQUFMLENBQWFVLE9BQWIsQ0FBcUJ1QixtQkFBMUM7QUFDRDs7OytCQUVVNUIsTSxFQUFRO0FBQ2pCQSxZQUFNLENBQUNwQixTQUFQLENBQWlCQyxNQUFqQixDQUF3QixLQUFLYyxPQUFMLENBQWFVLE9BQWIsQ0FBcUJ1QixtQkFBN0M7QUFDRDs7O3FDQUVnQjtBQUNmLFdBQUt4QixTQUFMLENBQWV4QixTQUFmLENBQXlCNEMsTUFBekIsQ0FBZ0MsS0FBSzdCLE9BQUwsQ0FBYVUsT0FBYixDQUFxQm9CLHFCQUFyRDtBQUNEOzs7Ozs7QUFHSCxJQUFNL0IsTUFBTSxHQUFHO0FBQ2I7QUFDQVcsU0FBTyxFQUFFO0FBQ1BDLFlBQVEsRUFBRSxVQURIO0FBRVBtQix5QkFBcUIsRUFBRSxrQkFGaEI7QUFHUEcsdUJBQW1CLEVBQUUsMEJBSGQ7QUFJUG5CLFlBQVEsRUFBRSxxQkFKSDtBQUtQd0MsV0FBTyxFQUFFLG1CQUxGO0FBTVBDLFdBQU8sRUFBRSxtQkFORjtBQU9QL0IsU0FBSyxFQUFFO0FBUEE7QUFGSSxDQUFmO0FBYUEsSUFBTW1DLFFBQVEsR0FBRyxJQUFJWCxRQUFKLENBQWFqRCxNQUFiLENBQWpCOzs7QUMvR0E7OztBQUlBO0FBQ0EsU0FBU29FLFlBQVQsQ0FBc0JDLENBQXRCLEVBQXlCO0FBQ3ZCQSxHQUFDLENBQUNDLElBQUYsR0FBU0MsT0FBVCxDQUFpQkYsQ0FBakI7QUFDRDtBQUVEOzs7OztBQUdBO0FBRUE7Ozs7QUFJQTtBQUNBRCxZQUFZLENBQUNJLHNCQUFELENBQVo7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtDQUlBOztDQUdBO0FBRUE7QUFDQTs7QUFFQTtDQUdBOztDQUdBO0FBRUE7O0NBR0E7O0NBR0E7QUFFQTs7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUEiLCJmaWxlIjoic2NyaXB0cy45ZGUzM2I5YTI0ZmRkODc5Yjg1YS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiLi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMzKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsInZhciBtYXAgPSB7XG5cdFwiLi9zcHJpdGUuc3ZnXCI6IDNcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSAyOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9zcHJpdGUuc3ZnXCI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiY29uc3QgcGFnZV9fcHJlbG9hZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlX19wcmVsb2FkJyk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxuICAnbG9hZCcsXG4gICgpID0+IHtcbiAgICBpZiAocGFnZV9fcHJlbG9hZCkgcGFnZV9fcHJlbG9hZC5jbGFzc0xpc3QucmVtb3ZlKCdwYWdlX19wcmVsb2FkJyk7XG4gIH0sXG4gIGZhbHNlXG4pO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiY29uc3Qgc2VjdGlvbk90eml2aUNvbnRlbnRFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXZpZXdzX19jb250ZW50Jyk7XG5jb25zdCBzZWN0aW9uT3R6aXZpRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmV2aWV3cycpO1xuXG5mdW5jdGlvbiBtYWtlVmlkZW9SZXNwb25zaXZlKGUpIHtcbiAgbGV0IHdpbmRvd1dpZHRoID0gcGFyc2VJbnQoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoKTtcbiAgaWYgKHdpbmRvd1dpZHRoIDwgNDgwKSB7XG4gICAgc2VjdGlvbk90eml2aUVsLnN0eWxlLmhlaWdodCA9IGAke3BhcnNlSW50KFxuICAgICAgZ2V0Q29tcHV0ZWRTdHlsZShzZWN0aW9uT3R6aXZpQ29udGVudEVsKS5oZWlnaHRcbiAgICApICsgMjUwfXB4YDtcbiAgfSBlbHNlIHtcbiAgICBzZWN0aW9uT3R6aXZpRWwuc3R5bGUuaGVpZ2h0ID0gYCR7cGFyc2VJbnQoXG4gICAgICBnZXRDb21wdXRlZFN0eWxlKHNlY3Rpb25PdHppdmlDb250ZW50RWwpLmhlaWdodFxuICAgICkgKyAyMDB9cHhgO1xuICB9XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBtYWtlVmlkZW9SZXNwb25zaXZlKTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgbWFrZVZpZGVvUmVzcG9uc2l2ZSk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJjbGFzcyBCdG4ge1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gIH1cblxuICBoYW5kbGVFdmVudChlKSB7XG4gICAgaWYgKGUudHlwZSA9PT0gJ2NsaWNrJykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5fY29uZmlnLm1vZGFsLm9wZW5Nb2RhbCh0aGlzLl9jb25maWcubW9kYWwuZGlhbG9nKTtcbiAgICB9XG4gIH1cblxuICBmaW5kRWxCeUlEKGlkKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2lkfWApO1xuICB9XG5cbiAgZmluZEVsQnlDbGFzcyhjbGFzc05hbWUpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Y2xhc3NOYW1lfWApO1xuICB9XG59XG5cbmV4cG9ydCB7IEJ0biB9O1xuIiwiY2xhc3MgTW9kYWwge1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG5cbiAgICB0aGlzLl9iYWNrZHJvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgLiR7dGhpcy5fY29uZmlnLmNsYXNzZXMuYmFja2Ryb3B9YFxuICAgICk7XG4gICAgdGhpcy5fb3BlbmVkID0gZmFsc2U7XG4gICAgdGhpcy5fY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYC4ke3RoaXMuX2NvbmZpZy5jbGFzc2VzLmJhY2tkcm9wfSAuJHt0aGlzLl9jb25maWcuY2xhc3Nlcy5jbG9zZUJ0bn1gXG4gICAgKTtcbiAgICB0aGlzLmRpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3RoaXMuX2NvbmZpZy5JRHMuZGlhbG9nfWApO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4gdGhpcy5vbktleWRvd24oZSkpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB0aGlzLm9uQ2xpY2soZSkpO1xuICB9XG5cbiAgLy8gY29uZmlybSBvcmRlciBtb2RhOlxuICBvbkNsaWNrKGUpIHtcbiAgICBjb25zdCBjbGlja2VkRWwgPSBlLnRhcmdldDtcblxuICAgIGlmIChjbGlja2VkRWwgPT09IHRoaXMuX2JhY2tkcm9wIHx8IGNsaWNrZWRFbCA9PT0gdGhpcy5fY2xvc2VCdG4pIHtcbiAgICAgIHRoaXMuY2xvc2VNb2RhbCh0aGlzLmRpYWxvZyk7IC8vIHdlYmluYXIgc2lnbnVwIG1vZGFsOiB0aGlzLmNsb3NlTW9kYWwoKTtcbiAgICB9XG4gIH1cblxuICBvbktleWRvd24oZSkge1xuICAgIGlmICh0aGlzLl9vcGVuZWREaWFsb2cgJiYgZS5jb2RlID09PSAnRXNjYXBlJykge1xuICAgICAgY29uc3QgdmlkZW9Jbk1vZGFsID0gdGhpcy5fb3BlbmVkRGlhbG9nLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGAuJHt0aGlzLl9jb25maWcuY2xhc3Nlcy52aWRlb31gXG4gICAgICApO1xuICAgICAgaWYgKHZpZGVvSW5Nb2RhbCkgdGhpcy5zdG9wVmlkZW8odmlkZW9Jbk1vZGFsKTtcbiAgICAgIHRoaXMudG9nZ2xlQmFja2Ryb3AoKTtcbiAgICAgIHRoaXMuX29wZW5lZCA9IGZhbHNlO1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICcnO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZUJhY2tkcm9wKCkge1xuICAgIHRoaXMuX2JhY2tkcm9wLmNsYXNzTGlzdC50b2dnbGUodGhpcy5fY29uZmlnLmNsYXNzZXMuYmFja2Ryb3BTdGF0ZU1vZGlmaWVyKTtcbiAgfVxuXG4gIG9wZW5Nb2RhbChkaWFsb2cpIHtcbiAgICBjb25zdCBuZXdEaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtkaWFsb2cuaWR9YCk7XG4gICAgY29uc3QgdmlzaWJsZURpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgLiR7dGhpcy5fY29uZmlnLmNsYXNzZXMuZGlhbG9nU3RhdGVNb2RpZmllcn1gXG4gICAgKTtcbiAgICB0aGlzLl9vcGVuZWQgPSAhdGhpcy5fb3BlbmVkO1xuXG4gICAgdGhpcy50b2dnbGVCYWNrZHJvcCgpO1xuXG4gICAgaWYgKHZpc2libGVEaWFsb2cpIHRoaXMuaGlkZURpYWxvZyh2aXNpYmxlRGlhbG9nKTtcblxuICAgIHRoaXMuc2hvd0RpYWxvZyhuZXdEaWFsb2cpO1xuICAgIHRoaXMuX29wZW5lZERpYWxvZyA9IG5ld0RpYWxvZztcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gIH1cblxuICBjbG9zZU1vZGFsKGVsKSB7XG4gICAgaWYgKHRoaXMuX29wZW5lZCkge1xuICAgICAgLy8gaGFuZGxlIHZpZGVvOlxuICAgICAgY29uc3QgdmlkZW9CbG9jayA9XG4gICAgICAgIHRoaXMuX29wZW5lZERpYWxvZyAmJlxuICAgICAgICB0aGlzLl9vcGVuZWREaWFsb2cucXVlcnlTZWxlY3RvcihgLiR7dGhpcy5fY29uZmlnLmNsYXNzZXMudmlkZW99YCk7XG4gICAgICBpZiAodmlkZW9CbG9jaykgdGhpcy5zdG9wVmlkZW8odmlkZW9CbG9jayk7XG4gICAgICAvL1xuXG4gICAgICB0aGlzLl9vcGVuZWQgPSAhdGhpcy5fb3BlbmVkO1xuXG4gICAgICB0aGlzLnRvZ2dsZUJhY2tkcm9wKCk7XG4gICAgICBkZWxldGUgdGhpcy5fb3BlbmVkRGlhbG9nO1xuICAgICAgdGhpcy5oaWRlRGlhbG9nKGVsKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJztcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICBoaWRlRGlhbG9nKGRpYWxvZykge1xuICAgIGRpYWxvZy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2NvbmZpZy5jbGFzc2VzLmRpYWxvZ1N0YXRlTW9kaWZpZXIpO1xuICB9XG4gIHNob3dEaWFsb2coZGlhbG9nKSB7XG4gICAgZGlhbG9nLmNsYXNzTGlzdC5hZGQodGhpcy5fY29uZmlnLmNsYXNzZXMuZGlhbG9nU3RhdGVNb2RpZmllcik7XG4gIH1cblxuICBzdG9wVmlkZW8oZWxlbWVudCkge1xuICAgIC8qIFN0b3AgYW4gaWZyYW1lIG9yIEhUTUw1IDx2aWRlbz4gZnJvbSBwbGF5aW5nLlxuICAgICBwYXJhbSB7IGVsZW1lbnR9IC0gdGhlIGVsZW1lbnQgdGhhdCBjb250YWlucyB0aGUgdmlkZW8gKi9cbiAgICBjb25zdCBpZnJhbWUgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lmcmFtZScpO1xuICAgIGNvbnN0IHZpZGVvID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCd2aWRlbycpO1xuXG4gICAgaWYgKGlmcmFtZSkge1xuICAgICAgY29uc3QgaWZyYW1lU3JjID0gaWZyYW1lLnNyYztcbiAgICAgIGlmcmFtZS5zcmMgPSBpZnJhbWVTcmM7XG4gICAgfVxuXG4gICAgaWYgKHZpZGVvKSB2aWRlby5wYXVzZSgpO1xuICB9XG59XG5cbmV4cG9ydCB7IE1vZGFsIH07XG4iLCJpbXBvcnQgeyBNb2RhbCB9IGZyb20gJy4uL21vZGFsL21vZGFsJztcblxuY29uc3QgdmlkZW9Nb2RhbCA9IG5ldyBNb2RhbCh7XG4gIElEczoge1xuICAgIGRpYWxvZzogJ3ZpZGVvLWRpYWxvZycsXG4gIH0sXG4gIC8qIGFsbCBjbGFzcyBuYW1lcyB1c2VkIGluIEhUTUwgcmVsYXRlZCB0byBtb2RhbCB3aW5kb3cgY29tcG9uZW50OiAqL1xuICBjbGFzc2VzOiB7XG4gICAgYmFja2Ryb3A6ICdtb2RhbF92aWRlbycsXG4gICAgYmFja2Ryb3BTdGF0ZU1vZGlmaWVyOiAnbW9kYWxfdmlzaWJsZScsXG4gICAgZGlhbG9nU3RhdGVNb2RpZmllcjogJ21vZGFsX19kaWFsb2dfdmlzaWJsZScsXG4gICAgY2xvc2VCdG46ICdtb2RhbF9fY2xvc2UtYnRuJyxcbiAgICB2aWRlbzogJ2VtYmVkJyxcbiAgfSxcbn0pO1xuXG5leHBvcnQgeyB2aWRlb01vZGFsIH07XG4iLCJpbXBvcnQgeyBCdG4gfSBmcm9tICcuLi9idG4vYnRuJztcblxuaW1wb3J0IHsgdmlkZW9Nb2RhbCB9IGZyb20gJy4uL3ZpZGVvLW1vZGFsL3ZpZGVvLW1vZGFsJztcblxuY29uc3QgdmlkZW9UcmlnZ2VyQnRuRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdmlkZW8tdHJpZ2dlci1idG4nKTtcblxuY29uc3QgdmlkZW9UcmlnZ2VyQnRuID0gbmV3IEJ0bih7XG4gIGJ0bjogdmlkZW9UcmlnZ2VyQnRuRWwsXG4gIG1vZGFsOiB2aWRlb01vZGFsLFxufSk7XG5cbnZpZGVvVHJpZ2dlckJ0bkVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdmlkZW9UcmlnZ2VyQnRuKTtcbiIsImNsYXNzIExpZ2h0Ym94IHtcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuXG4gICAgdGhpcy5fYmFja2Ryb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYC4ke3RoaXMuX2NvbmZpZy5jbGFzc2VzLmJhY2tkcm9wfWBcbiAgICApO1xuICAgIHRoaXMuX2Nsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGAuJHt0aGlzLl9jb25maWcuY2xhc3Nlcy5jbG9zZUJ0bn1gXG4gICAgKTtcblxuICAgIHRoaXMuX3NsaWRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saWdodGJveF9fZGlhbG9nJyk7XG4gICAgdGhpcy5fY291bnRlciA9IDA7XG4gICAgdGhpcy5fYW1vdW50ID0gdGhpcy5fc2xpZGVzLmxlbmd0aDtcblxuICAgIGNvbnN0IHByZXZCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0aGlzLl9jb25maWcuY2xhc3Nlcy5wcmV2QnRufWApO1xuICAgIGNvbnN0IG5leHRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0aGlzLl9jb25maWcuY2xhc3Nlcy5uZXh0QnRufWApO1xuICAgIHByZXZCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHRoaXMubmF2aWdhdGUoZSwgLTEpKTtcbiAgICBuZXh0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB0aGlzLm5hdmlnYXRlKGUsIDEpKTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB0aGlzLm9uQ2xpY2soZSkpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlID0+IHRoaXMub25LZXlkb3duKGUpKTtcbiAgfVxuXG4gIGdldEVsZW1JbmRleChlbGVtKSB7XG4gICAgaWYgKGVsZW0uZGF0YXNldC5saWdodGJveCkgcmV0dXJuIGVsZW0uZGF0YXNldC5saWdodGJveC5tYXRjaCgvXFxkLylbMF07XG4gIH1cblxuICBuYXZpZ2F0ZShlLCBkaXJlY3Rpb24pIHtcbiAgICB0aGlzLmhpZGVEaWFsb2codGhpcy5fY3VycmVudCk7XG5cbiAgICB0aGlzLl9jb3VudGVyID0gdGhpcy5fY291bnRlciArIGRpcmVjdGlvbjtcblxuICAgIGlmIChkaXJlY3Rpb24gPT09IC0xICYmIHRoaXMuX2NvdW50ZXIgPCAwKSB0aGlzLl9jb3VudGVyID0gdGhpcy5fYW1vdW50IC0gMTtcbiAgICBpZiAoZGlyZWN0aW9uID09PSAxICYmICF0aGlzLl9zbGlkZXNbdGhpcy5fY291bnRlcl0pIHRoaXMuX2NvdW50ZXIgPSAwO1xuXG4gICAgdGhpcy5fY3VycmVudCA9IHRoaXMuX3NsaWRlc1t0aGlzLl9jb3VudGVyXTtcbiAgICB0aGlzLnNob3dEaWFsb2codGhpcy5fY3VycmVudCk7XG4gIH1cblxuICBvcGVuTGlnaHRib3goY2xpY2tlZEVsKSB7XG4gICAgY29uc3QgbmV3RGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Y2xpY2tlZEVsLmRhdGFzZXQubGlnaHRib3h9YCk7XG4gICAgY29uc3QgdmlzaWJsZURpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgLiR7dGhpcy5fY29uZmlnLmNsYXNzZXMuZGlhbG9nU3RhdGVNb2RpZmllcn1gXG4gICAgKTtcblxuICAgIHRoaXMudG9nZ2xlQmFja2Ryb3AoKTtcbiAgICBpZiAodmlzaWJsZURpYWxvZykgdGhpcy5oaWRlRGlhbG9nKHZpc2libGVEaWFsb2cpO1xuXG4gICAgdGhpcy5zaG93RGlhbG9nKG5ld0RpYWxvZyk7XG4gICAgdGhpcy5fb3BlbmVkRGlhbG9nID0gbmV3RGlhbG9nO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgfVxuXG4gIGNsb3NlTGlnaHRib3goKSB7XG4gICAgdGhpcy50b2dnbGVCYWNrZHJvcCgpO1xuICAgIGRlbGV0ZSB0aGlzLl9vcGVuZWREaWFsb2c7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICcnO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIG9uQ2xpY2soZSkge1xuICAgIGNvbnN0IGNsaWNrZWRFbCA9IGUudGFyZ2V0O1xuXG4gICAgaWYgKGNsaWNrZWRFbCA9PT0gdGhpcy5fYmFja2Ryb3AgfHwgY2xpY2tlZEVsID09PSB0aGlzLl9jbG9zZUJ0bikge1xuICAgICAgdGhpcy5jbG9zZUxpZ2h0Ym94KCk7XG4gICAgfVxuXG4gICAgaWYgKGNsaWNrZWRFbC5kYXRhc2V0LmxpZ2h0Ym94KSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLl9jb3VudGVyID0gTnVtYmVyKHRoaXMuZ2V0RWxlbUluZGV4KGNsaWNrZWRFbCkpO1xuICAgICAgdGhpcy5fY3VycmVudCA9IHRoaXMuX3NsaWRlc1t0aGlzLl9jb3VudGVyXTtcbiAgICAgIHRoaXMub3BlbkxpZ2h0Ym94KGNsaWNrZWRFbCk7XG4gICAgfVxuICB9XG5cbiAgb25LZXlkb3duKGUpIHtcbiAgICBpZiAodGhpcy5fb3BlbmVkRGlhbG9nICYmIGUuY29kZSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgIHRoaXMudG9nZ2xlQmFja2Ryb3AoKTtcbiAgICAgIGRlbGV0ZSB0aGlzLl9vcGVuZWREaWFsb2c7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJyc7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgc2hvd0RpYWxvZyhkaWFsb2cpIHtcbiAgICBkaWFsb2cuY2xhc3NMaXN0LmFkZCh0aGlzLl9jb25maWcuY2xhc3Nlcy5kaWFsb2dTdGF0ZU1vZGlmaWVyKTtcbiAgfVxuXG4gIGhpZGVEaWFsb2coZGlhbG9nKSB7XG4gICAgZGlhbG9nLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fY29uZmlnLmNsYXNzZXMuZGlhbG9nU3RhdGVNb2RpZmllcik7XG4gIH1cblxuICB0b2dnbGVCYWNrZHJvcCgpIHtcbiAgICB0aGlzLl9iYWNrZHJvcC5jbGFzc0xpc3QudG9nZ2xlKHRoaXMuX2NvbmZpZy5jbGFzc2VzLmJhY2tkcm9wU3RhdGVNb2RpZmllcik7XG4gIH1cbn1cblxuY29uc3QgY29uZmlnID0ge1xuICAvLyBhbGwgY2xhc3MgbmFtZXMgdXNlZCBpbiBIVE1MIHJlbGF0ZWQgdG8gTGlnaHRib3ggd2luZG93IGNvbXBvbmVudDpcbiAgY2xhc3Nlczoge1xuICAgIGJhY2tkcm9wOiAnbGlnaHRib3gnLFxuICAgIGJhY2tkcm9wU3RhdGVNb2RpZmllcjogJ2xpZ2h0Ym94X3Zpc2libGUnLFxuICAgIGRpYWxvZ1N0YXRlTW9kaWZpZXI6ICdsaWdodGJveF9fZGlhbG9nX3Zpc2libGUnLFxuICAgIGNsb3NlQnRuOiAnbGlnaHRib3hfX2Nsb3NlLWJ0bicsXG4gICAgcHJldkJ0bjogJ2xpZ2h0Ym94LWJ0bi1wcmV2JyxcbiAgICBuZXh0QnRuOiAnbGlnaHRib3gtYnRuLW5leHQnLFxuICAgIHZpZGVvOiAnZW1iZWQnLFxuICB9LFxufTtcblxuY29uc3QgbGlnaHRib3ggPSBuZXcgTGlnaHRib3goY29uZmlnKTtcblxuZXhwb3J0IHsgbGlnaHRib3ggfTtcbiIsIi8qIFxuICBIRUxQRVIgRlVOQ1RJT05TXG4qL1xuXG4vLyBmdW5jdGlvbiBmb3IgcmVxdWlyaW5nIGltYWdlczpcbmZ1bmN0aW9uIHJlcXVpcmVGaWxlcyhyKSB7XG4gIHIua2V5cygpLmZvckVhY2gocik7XG59XG5cbi8qKioqKioqKioqKioqXG4gKiBDU1MgUkVTRVQgKlxuICoqKioqKioqKioqKiovXG5pbXBvcnQgJy4vYmxvY2tzL19yZXNldC5zY3NzJztcblxuLyoqKioqKioqKipcbiAqIEJMT0NLUyAqXG4gKioqKioqKioqKi9cblxuaW1wb3J0ICcuL2Jsb2Nrcy9jb250YWN0cy9fY29udGFjdHMuc2Nzcyc7XG5yZXF1aXJlRmlsZXMocmVxdWlyZS5jb250ZXh0KCcuL2Jsb2Nrcy9jb250YWN0cy8nLCB0cnVlLCAvKHN2Z3xwbmd8anBnKSQvKSk7XG5cbmltcG9ydCAnLi9ibG9ja3MvcGFnZS9fcGFnZS5zY3NzJztcbmltcG9ydCAnLi9ibG9ja3MvcGFnZS9wYWdlLmpzJztcblxuaW1wb3J0ICcuL2Jsb2Nrcy90ZXh0L190ZXh0LnNjc3MnO1xuXG5pbXBvcnQgJy4vYmxvY2tzL2hlYWRpbmcvX2hlYWRpbmcuc2Nzcyc7XG5cbmltcG9ydCAnLi9ibG9ja3MvZW1iZWQvX2VtYmVkLnNjc3MnO1xuXG5pbXBvcnQgJy4vYmxvY2tzL2ljb25zL19pY29ucy5zY3NzJztcblxuaW1wb3J0ICcuL2Jsb2Nrcy9sb2dvL19sb2dvLnNjc3MnO1xuXG5pbXBvcnQgJy4vYmxvY2tzL2ltZy1zdmcvX2ltZy1zdmcuc2Nzcyc7XG5cbmltcG9ydCAnLi9ibG9ja3MvaGVhZGVyL19oZWFkZXIuc2Nzcyc7XG5cbmltcG9ydCAnLi9ibG9ja3MvbWFpbi9tYWluLmpzJztcbmltcG9ydCAnLi9ibG9ja3MvbWFpbi9fbWFpbi5zY3NzJztcblxuaW1wb3J0ICcuL2Jsb2Nrcy9iZW5lZml0czEvX2JlbmVmaXRzMS5zY3NzJztcblxuaW1wb3J0ICcuL2Jsb2Nrcy9iZW5lZml0czIvX2JlbmVmaXRzMi5zY3NzJztcblxuaW1wb3J0ICcuL2Jsb2Nrcy9iZW5lZml0czMvX2JlbmVmaXRzMy5zY3NzJztcblxuaW1wb3J0ICcuL2Jsb2Nrcy9iZW5lZml0czQvX2JlbmVmaXRzNC5zY3NzJztcblxuaW1wb3J0ICcuL2Jsb2Nrcy9iZW5lZml0czUvX2JlbmVmaXRzNS5zY3NzJztcblxuaW1wb3J0ICcuL2Jsb2Nrcy9jZXJ0aWZpY2F0ZXMvX2NlcnRpZmljYXRlcy5zY3NzJztcblxuaW1wb3J0ICcuL2Jsb2Nrcy93ZWJpbmFycy9fd2ViaW5hcnMuc2Nzcyc7XG5cbmltcG9ydCAnLi9ibG9ja3Mvb3JkZXIvX29yZGVyLnNjc3MnO1xuXG5pbXBvcnQgJy4vYmxvY2tzL29yZGVyLWNhbGN1bGF0b3IvX29yZGVyLWNhbGN1bGF0b3Iuc2Nzcyc7XG5cbi8vIGltcG9ydCAnLi9ibG9ja3MvdGVsZWdyYW0tYm90L3RlbGVncmFtLWJvdC5qcyc7XG5cbmltcG9ydCAnLi9ibG9ja3MvYnRuL19idG4uc2Nzcyc7XG4vLyBpbXBvcnQgJy4vYmxvY2tzL2J0bi9idG4uanMnO1xuXG4vLyBpbXBvcnQgJy4vYmxvY2tzL2Zvcm0tZ3JvdXAvX2Zvcm0tZ3JvdXAuc2Nzcyc7XG4vLyBpbXBvcnQgJy4vYmxvY2tzL2Zvcm0tZ3JvdXAvZm9ybS1ncm91cC5qcyc7XG5cbmltcG9ydCAnLi9ibG9ja3MvbW9kYWwvX21vZGFsLnNjc3MnO1xuaW1wb3J0ICcuL2Jsb2Nrcy9tb2RhbC9tb2RhbC5qcyc7XG5cbi8vIGltcG9ydCAnLi9ibG9ja3Mvd2ViaW5hci1zaWdudXAtbW9kYWwvd2ViaW5hci1zaWdudXAtbW9kYWwuanMnO1xuXG5pbXBvcnQgJy4vYmxvY2tzL3dlYmluYXItc2lnbnVwLWJ0bi9fd2ViaW5hci1zaWdudXAtYnRuLnNjc3MnO1xuLy8gaW1wb3J0ICcuL2Jsb2Nrcy93ZWJpbmFyLXNpZ251cC1idG4vd2ViaW5hci1zaWdudXAtYnRuLmpzJztcblxuLy8gaW1wb3J0ICcuL2Jsb2Nrcy93ZWJpbmFyLXNpZ251cC1mb3JtLWdyb3VwL3dlYmluYXItc2lnbnVwLWZvcm0tZ3JvdXAuanMnO1xuXG5pbXBvcnQgJy4vYmxvY2tzL29yZGVyLWJ0bi9fb3JkZXItYnRuLnNjc3MnO1xuLy8gaW1wb3J0ICcuL2Jsb2Nrcy9vcmRlci1idG4vb3JkZXItYnRuLmpzJztcblxuaW1wb3J0ICcuL2Jsb2Nrcy9vcmRlci1mb3JtLWdyb3VwL19vcmRlci1mb3JtLWdyb3VwLnNjc3MnO1xuLy8gaW1wb3J0ICcuL2Jsb2Nrcy9vcmRlci1mb3JtLWdyb3VwL29yZGVyLWZvcm0tZ3JvdXAuanMnO1xuXG4vLyBpbXBvcnQgJy4vYmxvY2tzL2NvbmZpcm0tb3JkZXItbW9kYWwvY29uZmlybS1vcmRlci1tb2RhbC5qcyc7XG5cbmltcG9ydCAnLi9ibG9ja3MvcmV2aWV3cy9fcmV2aWV3cy5zY3NzJztcbmltcG9ydCAnLi9ibG9ja3MvcmV2aWV3cy9yZXZpZXdzLmpzJztcblxuaW1wb3J0ICcuL2Jsb2Nrcy9mb290ZXIvX2Zvb3Rlci5zY3NzJztcblxuaW1wb3J0ICcuL2Jsb2Nrcy92aWRlby1tb2RhbC9fdmlkZW8tbW9kYWwuc2Nzcyc7XG5pbXBvcnQgJy4vYmxvY2tzL3ZpZGVvLW1vZGFsL3ZpZGVvLW1vZGFsLmpzJztcblxuaW1wb3J0ICcuL2Jsb2Nrcy9saWdodGJveC9fbGlnaHRib3guc2Nzcyc7XG5pbXBvcnQgJy4vYmxvY2tzL2xpZ2h0Ym94L2xpZ2h0Ym94LmpzJztcbiJdLCJzb3VyY2VSb290IjoiIn0=