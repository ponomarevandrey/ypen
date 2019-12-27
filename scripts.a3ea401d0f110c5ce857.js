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
/******/ 	return __webpack_require__(__webpack_require__.s = 32);
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

var page__preload = document.querySelector(".page__preload");
window.addEventListener("load", function () {
  if (page__preload) page__preload.classList.remove("page__preload");
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
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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
      if (e.type === "click") {
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
    document.addEventListener("keydown", function (e) {
      return _this.onKeydown(e);
    });
    document.addEventListener("click", function (e) {
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
      if (this._openedDialog && e.code === "Escape") {
        var videoInModal = this._openedDialog.querySelector(".".concat(this._config.classes.video));

        if (videoInModal) this.stopVideo(videoInModal);
        this.toggleBackdrop();
        this._opened = false;
        document.body.style.overflow = "";
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
      document.body.style.overflow = "hidden";
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
        document.body.style.overflow = "";
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
      var iframe = element.querySelector("iframe");
      var video = element.querySelector("video");

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
    dialog: "video-dialog"
  },

  /* all class names used in HTML related to modal window component: */
  classes: {
    backdrop: "modal_video",
    backdropStateModifier: "modal_visible",
    dialogStateModifier: "modal__dialog_visible",
    closeBtn: "modal__close-btn",
    video: "embed"
  }
});

// CONCATENATED MODULE: ./src/blocks/main/main.js


var videoTriggerBtnEl = document.querySelector("#video-trigger-btn");
var videoTriggerBtn = new Btn({
  btn: videoTriggerBtnEl,
  modal: videoModal
});
videoTriggerBtnEl.addEventListener("click", videoTriggerBtn);
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

// CONCATENATED MODULE: ./src/blocks/telegram-bot/telegram-bot.js
function telegram_bot_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function telegram_bot_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function telegram_bot_createClass(Constructor, protoProps, staticProps) { if (protoProps) telegram_bot_defineProperties(Constructor.prototype, protoProps); if (staticProps) telegram_bot_defineProperties(Constructor, staticProps); return Constructor; }

var TelegramBot =
/*#__PURE__*/
function () {
  function TelegramBot(config) {
    telegram_bot_classCallCheck(this, TelegramBot);

    for (var prop in config) {
      this["".concat(prop)] = config[prop];
    }
  }

  telegram_bot_createClass(TelegramBot, [{
    key: "sendMsg",
    value: function sendMsg(data) {
      //console.log(bot.authToken, bot.chatID, bot.parseMode, bot.disableNotif);
      var newMsg = this.createOrderMsg(data);
      var url = "https://api.telegram.org/bot".concat(this.authToken, "/sendMessage?chat_id=").concat(this.chatID, "&text=\"").concat(newMsg, "\"&parse_mode=").concat(this.parseMode, "&disable_notification=").concat(this.disableNotif);
      fetch(url).then(function (response) {
        return response.json();
      }).then(function (response) {
        console.log("Response from bot: ".concat(response.result.from.first_name, " (").concat(response.result.from.username, ") "), response);
      }).catch(function (error) {
        throw new Error(error);
      });
    }
  }, {
    key: "createOrderMsg",
    value: function createOrderMsg(_ref) {
      var name = _ref.name,
          email = _ref.email,
          tel = _ref.tel,
          address = _ref.address;
      return "\u0417\u0410\u041A\u0410\u0417 \u0420\u0423\u0427\u041A\u0418 %0A %0A\n    \u0418\u043C\u044F: ".concat(name, " %0A\n    E-mail: ").concat(email, " %0A\n    \u0422\u0435\u043B\u0435\u0444\u043E\u043D: ").concat(tel, " %0A\n    \u0410\u0434\u0440\u0435\u0441: ").concat(address);
    }
  }, {
    key: "createWebinarSignupMsg",
    value: function createWebinarSignupMsg(_ref2) {
      var name = _ref2.name,
          email = _ref2.email,
          tel = _ref2.tel;
      return "\u0417\u0410\u041F\u0418\u0421\u042C \u041D\u0410 \u0412\u0415\u0411\u0418\u041D\u0410\u0420 %0A %0A \n    \u0418\u043C\u044F: ".concat(name, " %0A \n    E-mail: ").concat(email, " %0A \n    \u0422\u0435\u043B\u0435\u0444\u043E\u043D: ").concat(tel);
    }
  }]);

  return TelegramBot;
}(); //


var BotManager = function () {
  var instance;
  return (
    /*#__PURE__*/
    function () {
      function _class() {
        telegram_bot_classCallCheck(this, _class);

        if (!instance) instance = this;
        return instance;
      }

      telegram_bot_createClass(_class, [{
        key: "createBot",
        value: function createBot(config) {
          var bot = this["".concat(config.name)] = new TelegramBot(config);
          return bot;
        } // Helper function to find out bot's chatID when you create a new bot.
        //
        // Before calling this function, open Telegram and send two messages
        // with any text to your bot, otherwise the function won't be able to
        // retrieve chatID:

      }, {
        key: "retrieveChatID",
        value: function retrieveChatID(authToken) {
          var url = "https://api.telegram.org/bot".concat(authToken, "/getUpdates");
          fetch(url).then(function (response) {
            return response.json();
          }).then(function (response) {
            // Telegram chat ID is the same for all messages:
            if (response.result[0]) {
              console.log("Your Telegram bot's chatID: ".concat(response.result[0].message.chat.id));
            } else {
              throw new Error("Can't retrieve chatID. Please, open your bot's chat in Telegram app and send him a few messages");
            }
          }).catch(function (error) {
            throw new Error(error);
          });
        }
      }]);

      return _class;
    }()
  );
}();

var botManager = new BotManager();
/*
 * use botManager.retrieveChatID(<authToken>) to find out your chatID
 */

var myTelegramBot = botManager.createBot({
  name: "Andrey Ponomarev",
  authToken: "906724281:AAHXgqvLA_iKEZozDg3yML0InQBPg4nHfng",
  chatID: "338459496",
  parseMode: "Markdown",
  disableNotif: true
});
var spaceSausageBot = botManager.createBot({
  name: "Space Sausage",
  authToken: "1044567822:AAGPXUeLlAumoCzrzlnsPnN3yuxAXHqSN2o",
  chatID: "338459496",
  parseMode: "Markdown",
  disableNotif: true
});

// EXTERNAL MODULE: ./src/blocks/btn/_btn.scss
var _btn = __webpack_require__(23);

// EXTERNAL MODULE: ./src/blocks/form-group/_form-group.scss
var _form_group = __webpack_require__(24);

// CONCATENATED MODULE: ./src/blocks/form-group/form-group.js
function form_group_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function form_group_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function form_group_createClass(Constructor, protoProps, staticProps) { if (protoProps) form_group_defineProperties(Constructor.prototype, protoProps); if (staticProps) form_group_defineProperties(Constructor, staticProps); return Constructor; }

var FormGroup =
/*#__PURE__*/
function () {
  function FormGroup(config) {
    form_group_classCallCheck(this, FormGroup);

    this._config = config;
    this._orderBlock = document.querySelector("#".concat(this._config.blockID));

    for (var id in this._config.inputIDs) {
      this["".concat(id)] = document.querySelector("#".concat(this._config.inputIDs[id]));
    }
  }

  form_group_createClass(FormGroup, [{
    key: "validateName",
    value: function validateName(inputEl) {
      var regex = /^[a-zA-Zа-яА-ЯёЁ]+\s[a-zA-Zа-яА-ЯёЁ]+$/;
      var inputValue = inputEl.value;
      inputEl.parentElement.classList.remove("form-group_validation_success", "form-group_validation_error");

      if (regex.test(inputValue)) {
        inputEl.parentElement.classList.add("form-group_validation_success");
        return true;
      } else {
        inputEl.parentElement.classList.add("form-group_validation_error");
        var tip = inputEl.parentElement.querySelector(".form-group__tip");
        tip.classList.remove("form-group__tip_hidden");
      }
    }
  }, {
    key: "validateEmail",
    value: function validateEmail(inputEl) {
      var regex = /^\w+\.?\w*@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
      var inputValue = inputEl.value.toLowerCase();
      inputEl.parentElement.classList.remove("form-group_validation_success", "form-group_validation_error");

      if (regex.test(inputValue)) {
        inputEl.parentElement.classList.add("form-group_validation_success");
        return true;
      } else {
        inputEl.parentElement.classList.add("form-group_validation_error");
        var tip = inputEl.parentElement.querySelector(".form-group__tip");
        tip.classList.remove("form-group__tip_hidden");
      }
    }
  }, {
    key: "validateTel",
    value: function validateTel(inputEl) {
      var regex = /^[0-9()+-\s]+$/;
      var inputValue = inputEl.value;
      inputEl.parentElement.classList.remove("form-group_validation_success", "form-group_validation_error");

      if (regex.test(inputValue)) {
        inputEl.parentElement.classList.add("form-group_validation_success");
        return true;
      } else {
        inputEl.parentElement.classList.add("form-group_validation_error");
        var tip = inputEl.parentElement.querySelector(".form-group__tip");
        tip.classList.remove("form-group__tip_hidden");
      }
    }
  }, {
    key: "validateAddress",
    value: function validateAddress(inputEl) {
      var regex = /^.+$/;
      var inputValue = inputEl.value;
      inputEl.parentElement.classList.remove("form-group_validation_success", "form-group_validation_error");

      if (regex.test(inputValue)) {
        inputEl.parentElement.classList.add("form-group_validation_success");
        return true;
      } else {
        inputEl.parentElement.classList.add("form-group_validation_error");
        var tip = inputEl.parentElement.querySelector(".form-group__tip");
        tip.classList.remove("form-group__tip_hidden");
      }
    }
  }, {
    key: "resetInputs",
    value: function resetInputs() {
      for (var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++) {
        inputs[_key] = arguments[_key];
      }

      inputs.forEach(function (input) {
        var tip = input.parentElement.querySelector(".form-group__tip");
        tip.classList.add("form-group__tip_hidden");
        input.value = "";
        input.parentElement.classList.remove("form-group_validation_success", "form-group_validation_error");
      });
    }
  }]);

  return FormGroup;
}();


// EXTERNAL MODULE: ./src/blocks/modal/_modal.scss
var _modal = __webpack_require__(25);

// CONCATENATED MODULE: ./src/blocks/webinar-signup-modal/webinar-signup-modal.js

var webinarSignupModal = new Modal({
  IDs: {
    dialog: "webinar-sign-up-dialog"
  },

  /* all class names used in HTML related to modal window component: */
  classes: {
    backdrop: "modal_webinar-signup",
    backdropStateModifier: "modal_visible",
    dialogStateModifier: "modal__dialog_visible",
    closeBtn: "modal__close-btn",
    video: "embed"
  }
});

// EXTERNAL MODULE: ./src/blocks/webinar-signup-btn/_webinar-signup-btn.scss
var _webinar_signup_btn = __webpack_require__(26);

// CONCATENATED MODULE: ./src/blocks/webinar-signup-form-group/webinar-signup-form-group.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function webinar_signup_form_group_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function webinar_signup_form_group_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function webinar_signup_form_group_createClass(Constructor, protoProps, staticProps) { if (protoProps) webinar_signup_form_group_defineProperties(Constructor.prototype, protoProps); if (staticProps) webinar_signup_form_group_defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var WebinarSignupFormGroup =
/*#__PURE__*/
function (_FormGroup) {
  _inherits(WebinarSignupFormGroup, _FormGroup);

  function WebinarSignupFormGroup(config) {
    var _this;

    webinar_signup_form_group_classCallCheck(this, WebinarSignupFormGroup);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(WebinarSignupFormGroup).call(this, config));

    _this.name.addEventListener("focusout", function () {
      console.log(_this.name);

      _get(_getPrototypeOf(WebinarSignupFormGroup.prototype), "validateName", _assertThisInitialized(_this)).call(_assertThisInitialized(_this), _this.name);
    });

    _this.email.addEventListener("focusout", function () {
      _this.validateEmail(_this.email);
    });

    _this.tel.addEventListener("focusout", function () {
      _this.validateTel(_this.tel);
    });

    return _this;
  }

  webinar_signup_form_group_createClass(WebinarSignupFormGroup, [{
    key: "inputsData",
    get: function get() {
      return {
        name: this.name.value,
        email: this.email.value,
        tel: this.tel.value
      };
    }
  }]);

  return WebinarSignupFormGroup;
}(FormGroup);

var config = {
  // blockID: 'order',
  inputIDs: {
    name: "webinar-sign-up-name",
    email: "webinar-sign-up-email",
    tel: "webinar-sign-up-tel"
  }
};
var webinarSignupFormGroup = new WebinarSignupFormGroup(config); //console.log(webinarSignupFormGroup);


// CONCATENATED MODULE: ./src/blocks/webinar-signup-btn/webinar-signup-btn.js
function webinar_signup_btn_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { webinar_signup_btn_typeof = function _typeof(obj) { return typeof obj; }; } else { webinar_signup_btn_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return webinar_signup_btn_typeof(obj); }

function webinar_signup_btn_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function webinar_signup_btn_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function webinar_signup_btn_createClass(Constructor, protoProps, staticProps) { if (protoProps) webinar_signup_btn_defineProperties(Constructor.prototype, protoProps); if (staticProps) webinar_signup_btn_defineProperties(Constructor, staticProps); return Constructor; }

function webinar_signup_btn_possibleConstructorReturn(self, call) { if (call && (webinar_signup_btn_typeof(call) === "object" || typeof call === "function")) { return call; } return webinar_signup_btn_assertThisInitialized(self); }

function webinar_signup_btn_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function webinar_signup_btn_getPrototypeOf(o) { webinar_signup_btn_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return webinar_signup_btn_getPrototypeOf(o); }

function webinar_signup_btn_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) webinar_signup_btn_setPrototypeOf(subClass, superClass); }

function webinar_signup_btn_setPrototypeOf(o, p) { webinar_signup_btn_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return webinar_signup_btn_setPrototypeOf(o, p); }

/*
 * Telegram API Doc:
 * https://core.telegram.org/bots/api#available-methods
 *
 * Bot for creating new bots:
 * https://telegram.me/botfather
 * How to use: https://core.telegram.org/bots
 *
 */





var webinar_signup_btn_WebinarSignupBtn =
/*#__PURE__*/
function (_Btn) {
  webinar_signup_btn_inherits(WebinarSignupBtn, _Btn);

  function WebinarSignupBtn(config) {
    webinar_signup_btn_classCallCheck(this, WebinarSignupBtn);

    return webinar_signup_btn_possibleConstructorReturn(this, webinar_signup_btn_getPrototypeOf(WebinarSignupBtn).call(this, config));
  }

  webinar_signup_btn_createClass(WebinarSignupBtn, [{
    key: "handleEvent",
    value: function handleEvent(e) {
      var _this = this;

      if (e.type === "click") {
        var isValid = webinarSignupFormGroup.validateName(webinarSignupFormGroup.name) && webinarSignupFormGroup.validateEmail(webinarSignupFormGroup.email) && webinarSignupFormGroup.validateTel(webinarSignupFormGroup.tel);

        if (isValid) {
          this._config.bots.forEach(function (bot) {
            bot.sendMsg(webinarSignupFormGroup.inputsData);
          });

          this._config.btn.textContent = "Спасибо!";
          setTimeout(function () {
            webinarSignupModal.closeModal(_this._config.modal.dialog);
            webinarSignupFormGroup.resetInputs(webinarSignupFormGroup.name, webinarSignupFormGroup.email, webinarSignupFormGroup.tel);
            _this._config.btn.textContent = "Записаться на вебинар";
          }, this._config.timeoutBeforeBtnTextChange);
        } else throw new Error("Invalid input");
      }
    }
  }, {
    key: "sendInputTo",
    value: function sendInputTo(bots) {
      bots.forEach(function (bot) {
        // console.log(bot.authToken, bot.chatID, bot.parseMode, bot.disableNotif);
        var url = "https://api.telegram.org/bot".concat(bot.authToken, "/sendMessage?chat_id=").concat(bot.chatID, "&text=\"").concat(bot.createWebinarSignupMsg(webinarSignupFormGroup.inputsData), "\"&parse_mode=").concat(bot.parseMode, "&disable_notification=").concat(bot.disableNotif);
        fetch(url).then(function (response) {
          return response.json();
        }).then(function (response) {
          console.log("Response from bot: ".concat(response.result.from.first_name, " (").concat(response.result.from.username, ") "), response);
        }).catch(function (error) {
          throw new Error(error);
        });
      });
    }
  }]);

  return WebinarSignupBtn;
}(Btn); //


var webinarSignupTriggerBtnEl = document.querySelector("#webinar-signup-trigger-btn");
var webinarSignupTriggerBtn = new Btn({
  btn: webinarSignupTriggerBtnEl,
  modal: webinarSignupModal
});
webinarSignupTriggerBtnEl.addEventListener("click", webinarSignupTriggerBtn); //

var webinarSignupBtnEl = document.querySelector("#webinar-signup-btn");
var webinarSignupBtn = new webinar_signup_btn_WebinarSignupBtn({
  btn: webinarSignupBtnEl,
  modal: webinarSignupModal,
  timeoutBeforeBtnTextChange: 2000,
  bots: [myTelegramBot, spaceSausageBot]
});
webinarSignupBtnEl.addEventListener("click", webinarSignupBtn);
// EXTERNAL MODULE: ./src/blocks/order-btn/_order-btn.scss
var _order_btn = __webpack_require__(27);

// CONCATENATED MODULE: ./src/blocks/confirm-order-modal/confirm-order-modal.js

var confirmOrderModal = new Modal({
  IDs: {
    dialog: "confirm-order-dialog"
  },

  /* all class names used in HTML related to modal window component: */
  classes: {
    backdrop: "modal_confirm-order",
    backdropStateModifier: "modal_visible",
    dialogStateModifier: "modal__dialog_visible",
    closeBtn: "modal__close-btn"
  }
});

// CONCATENATED MODULE: ./src/blocks/order-form-group/order-form-group.js
function order_form_group_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { order_form_group_typeof = function _typeof(obj) { return typeof obj; }; } else { order_form_group_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return order_form_group_typeof(obj); }

function order_form_group_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function order_form_group_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function order_form_group_createClass(Constructor, protoProps, staticProps) { if (protoProps) order_form_group_defineProperties(Constructor.prototype, protoProps); if (staticProps) order_form_group_defineProperties(Constructor, staticProps); return Constructor; }

function order_form_group_possibleConstructorReturn(self, call) { if (call && (order_form_group_typeof(call) === "object" || typeof call === "function")) { return call; } return order_form_group_assertThisInitialized(self); }

function order_form_group_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function order_form_group_getPrototypeOf(o) { order_form_group_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return order_form_group_getPrototypeOf(o); }

function order_form_group_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) order_form_group_setPrototypeOf(subClass, superClass); }

function order_form_group_setPrototypeOf(o, p) { order_form_group_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return order_form_group_setPrototypeOf(o, p); }



var OrderFormGroup =
/*#__PURE__*/
function (_FormGroup) {
  order_form_group_inherits(OrderFormGroup, _FormGroup);

  function OrderFormGroup(config) {
    var _this;

    order_form_group_classCallCheck(this, OrderFormGroup);

    _this = order_form_group_possibleConstructorReturn(this, order_form_group_getPrototypeOf(OrderFormGroup).call(this, config));

    _this.name.addEventListener("focusout", function () {
      _this.validateName(_this.name);
    });

    _this.email.addEventListener("focusout", function () {
      _this.validateEmail(_this.email);
    });

    _this.tel.addEventListener("focusout", function () {
      _this.validateTel(_this.tel);
    });

    _this.address.addEventListener("focusout", function () {
      _this.validateAddress(_this.address);
    });

    return _this;
  }

  order_form_group_createClass(OrderFormGroup, [{
    key: "displayConfirmMsg",
    value: function displayConfirmMsg() {
      var confirmMsg = document.querySelector(".order__confirm-msg");
      confirmMsg.classList.remove("order__confirm-msg_hidden");
    }
  }, {
    key: "inputsData",
    get: function get() {
      return {
        name: this.name.value,
        email: this.email.value,
        tel: this.tel.value,
        address: this.address.value
      };
    }
  }]);

  return OrderFormGroup;
}(FormGroup);

var order_form_group_config = {
  blockID: "order",
  inputIDs: {
    name: "order-name",
    email: "order-email",
    tel: "order-tel",
    address: "order-address"
  }
};
var orderFormGroup = new OrderFormGroup(order_form_group_config);

// CONCATENATED MODULE: ./src/blocks/order-btn/order-btn.js
function order_btn_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { order_btn_typeof = function _typeof(obj) { return typeof obj; }; } else { order_btn_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return order_btn_typeof(obj); }

function order_btn_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function order_btn_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function order_btn_createClass(Constructor, protoProps, staticProps) { if (protoProps) order_btn_defineProperties(Constructor.prototype, protoProps); if (staticProps) order_btn_defineProperties(Constructor, staticProps); return Constructor; }

function order_btn_possibleConstructorReturn(self, call) { if (call && (order_btn_typeof(call) === "object" || typeof call === "function")) { return call; } return order_btn_assertThisInitialized(self); }

function order_btn_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function order_btn_getPrototypeOf(o) { order_btn_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return order_btn_getPrototypeOf(o); }

function order_btn_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) order_btn_setPrototypeOf(subClass, superClass); }

function order_btn_setPrototypeOf(o, p) { order_btn_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return order_btn_setPrototypeOf(o, p); }

/*
 * Telegram API Doc:
 * https://core.telegram.org/bots/api#available-methods
 *
 * Bot for creating new bots:
 * https://telegram.me/botfather
 * How to use: https://core.telegram.org/bots
 *
 */





var order_btn_OrderBtn =
/*#__PURE__*/
function (_Btn) {
  order_btn_inherits(OrderBtn, _Btn);

  function OrderBtn(config) {
    order_btn_classCallCheck(this, OrderBtn);

    return order_btn_possibleConstructorReturn(this, order_btn_getPrototypeOf(OrderBtn).call(this, config));
  }

  order_btn_createClass(OrderBtn, [{
    key: "handleEvent",
    value: function handleEvent(e) {
      if (e.type === "click") {
        var isValid = orderFormGroup.validateName(orderFormGroup.name) && orderFormGroup.validateEmail(orderFormGroup.email) && orderFormGroup.validateTel(orderFormGroup.tel) && orderFormGroup.validateAddress(orderFormGroup.address);

        if (isValid) {
          this._config.bots.forEach(function (bot) {
            bot.sendMsg(orderFormGroup.inputsData);
          });

          confirmOrderModal.openModal(this._config.modal.dialog);
          orderFormGroup.resetInputs(orderFormGroup.name, orderFormGroup.email, orderFormGroup.tel, orderFormGroup.address);
        } else throw new Error("Invalid input");
      }
    }
  }]);

  return OrderBtn;
}(Btn);

var orderBtnEl = document.querySelector("#order-trigger-btn");
var orderBtn = new order_btn_OrderBtn({
  btn: orderBtnEl,
  modal: confirmOrderModal,
  timeoutBeforeBtnTextChange: 2000,
  bots: [myTelegramBot, spaceSausageBot]
});
orderBtnEl.addEventListener("click", orderBtn);
// EXTERNAL MODULE: ./src/blocks/order-form-group/_order-form-group.scss
var _order_form_group = __webpack_require__(28);

// EXTERNAL MODULE: ./src/blocks/footer/_footer.scss
var _footer = __webpack_require__(29);

// EXTERNAL MODULE: ./src/blocks/video-modal/_video-modal.scss
var _video_modal = __webpack_require__(30);

// EXTERNAL MODULE: ./src/blocks/lightbox/_lightbox.scss
var _lightbox = __webpack_require__(31);

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
    this._slides = document.querySelectorAll(".lightbox__dialog");
    this._counter = 0;
    this._amount = this._slides.length;
    var prevBtn = document.querySelector("#".concat(this._config.classes.prevBtn));
    var nextBtn = document.querySelector("#".concat(this._config.classes.nextBtn));
    prevBtn.addEventListener("click", function (e) {
      return _this.navigate(e, -1);
    });
    nextBtn.addEventListener("click", function (e) {
      return _this.navigate(e, 1);
    });
    document.addEventListener("click", function (e) {
      return _this.onClick(e);
    });
    document.addEventListener("keydown", function (e) {
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
      document.body.style.overflow = "hidden";
    }
  }, {
    key: "closeLightbox",
    value: function closeLightbox() {
      this.toggleBackdrop();
      delete this._openedDialog;
      document.body.style.overflow = "";
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
      if (this._openedDialog && e.code === "Escape") {
        this.toggleBackdrop();
        delete this._openedDialog;
        document.body.style.overflow = "";
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

var lightbox_config = {
  // all class names used in HTML related to Lightbox window component:
  classes: {
    backdrop: "lightbox",
    backdropStateModifier: "lightbox_visible",
    dialogStateModifier: "lightbox__dialog_visible",
    closeBtn: "lightbox__close-btn",
    prevBtn: "lightbox-btn-prev",
    nextBtn: "lightbox-btn-next",
    video: "embed"
  }
};
var lightbox = new Lightbox(lightbox_config);

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



































 // import './blocks/reviews/_reviews.scss';
// import './blocks/reviews/reviews.js';







/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9fcmVzZXQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2NvbnRhY3RzL19jb250YWN0cy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvY29udGFjdHMgc3luYyAoc3ZnfHBuZ3xqcGcpJCIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2NvbnRhY3RzL3Nwcml0ZS5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9wYWdlL19wYWdlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9wYWdlL3BhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy90ZXh0L190ZXh0LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9oZWFkaW5nL19oZWFkaW5nLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9lbWJlZC9fZW1iZWQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2ljb25zL19pY29ucy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvbG9nby9fbG9nby5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvaW1nLXN2Zy9faW1nLXN2Zy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvaGVhZGVyL19oZWFkZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL21haW4vX21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2JlbmVmaXRzMS9fYmVuZWZpdHMxLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9iZW5lZml0czIvX2JlbmVmaXRzMi5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvYmVuZWZpdHMzL19iZW5lZml0czMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2JlbmVmaXRzNC9fYmVuZWZpdHM0LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9iZW5lZml0czUvX2JlbmVmaXRzNS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvY2VydGlmaWNhdGVzL19jZXJ0aWZpY2F0ZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL3dlYmluYXJzL193ZWJpbmFycy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3Mvb3JkZXIvX29yZGVyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9vcmRlci1jYWxjdWxhdG9yL19vcmRlci1jYWxjdWxhdG9yLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9idG4vX2J0bi5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvZm9ybS1ncm91cC9fZm9ybS1ncm91cC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvbW9kYWwvX21vZGFsLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy93ZWJpbmFyLXNpZ251cC1idG4vX3dlYmluYXItc2lnbnVwLWJ0bi5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3Mvb3JkZXItYnRuL19vcmRlci1idG4uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL29yZGVyLWZvcm0tZ3JvdXAvX29yZGVyLWZvcm0tZ3JvdXAuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2Zvb3Rlci9fZm9vdGVyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy92aWRlby1tb2RhbC9fdmlkZW8tbW9kYWwuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2xpZ2h0Ym94L19saWdodGJveC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvYnRuL2J0bi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL21vZGFsL21vZGFsLmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvdmlkZW8tbW9kYWwvdmlkZW8tbW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9tYWluL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy90ZWxlZ3JhbS1ib3QvdGVsZWdyYW0tYm90LmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvZm9ybS1ncm91cC9mb3JtLWdyb3VwLmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3Mvd2ViaW5hci1zaWdudXAtbW9kYWwvd2ViaW5hci1zaWdudXAtbW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy93ZWJpbmFyLXNpZ251cC1mb3JtLWdyb3VwL3dlYmluYXItc2lnbnVwLWZvcm0tZ3JvdXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy93ZWJpbmFyLXNpZ251cC1idG4vd2ViaW5hci1zaWdudXAtYnRuLmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvY29uZmlybS1vcmRlci1tb2RhbC9jb25maXJtLW9yZGVyLW1vZGFsLmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3Mvb3JkZXItZm9ybS1ncm91cC9vcmRlci1mb3JtLWdyb3VwLmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3Mvb3JkZXItYnRuL29yZGVyLWJ0bi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2xpZ2h0Ym94L2xpZ2h0Ym94LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJwYWdlX19wcmVsb2FkIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsInJlbW92ZSIsIkJ0biIsImNvbmZpZyIsIl9jb25maWciLCJlIiwidHlwZSIsInByZXZlbnREZWZhdWx0IiwibW9kYWwiLCJvcGVuTW9kYWwiLCJkaWFsb2ciLCJpZCIsImNsYXNzTmFtZSIsIk1vZGFsIiwiX2JhY2tkcm9wIiwiY2xhc3NlcyIsImJhY2tkcm9wIiwiX29wZW5lZCIsIl9jbG9zZUJ0biIsImNsb3NlQnRuIiwiSURzIiwib25LZXlkb3duIiwib25DbGljayIsImNsaWNrZWRFbCIsInRhcmdldCIsImNsb3NlTW9kYWwiLCJfb3BlbmVkRGlhbG9nIiwiY29kZSIsInZpZGVvSW5Nb2RhbCIsInZpZGVvIiwic3RvcFZpZGVvIiwidG9nZ2xlQmFja2Ryb3AiLCJib2R5Iiwic3R5bGUiLCJvdmVyZmxvdyIsInRvZ2dsZSIsImJhY2tkcm9wU3RhdGVNb2RpZmllciIsIm5ld0RpYWxvZyIsInZpc2libGVEaWFsb2ciLCJkaWFsb2dTdGF0ZU1vZGlmaWVyIiwiaGlkZURpYWxvZyIsInNob3dEaWFsb2ciLCJlbCIsInZpZGVvQmxvY2siLCJhZGQiLCJlbGVtZW50IiwiaWZyYW1lIiwiaWZyYW1lU3JjIiwic3JjIiwicGF1c2UiLCJ2aWRlb01vZGFsIiwidmlkZW9UcmlnZ2VyQnRuRWwiLCJ2aWRlb1RyaWdnZXJCdG4iLCJidG4iLCJUZWxlZ3JhbUJvdCIsInByb3AiLCJkYXRhIiwibmV3TXNnIiwiY3JlYXRlT3JkZXJNc2ciLCJ1cmwiLCJhdXRoVG9rZW4iLCJjaGF0SUQiLCJwYXJzZU1vZGUiLCJkaXNhYmxlTm90aWYiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwicmVzdWx0IiwiZnJvbSIsImZpcnN0X25hbWUiLCJ1c2VybmFtZSIsImNhdGNoIiwiZXJyb3IiLCJFcnJvciIsIm5hbWUiLCJlbWFpbCIsInRlbCIsImFkZHJlc3MiLCJCb3RNYW5hZ2VyIiwiaW5zdGFuY2UiLCJib3QiLCJtZXNzYWdlIiwiY2hhdCIsImJvdE1hbmFnZXIiLCJteVRlbGVncmFtQm90IiwiY3JlYXRlQm90Iiwic3BhY2VTYXVzYWdlQm90IiwiRm9ybUdyb3VwIiwiX29yZGVyQmxvY2siLCJibG9ja0lEIiwiaW5wdXRJRHMiLCJpbnB1dEVsIiwicmVnZXgiLCJpbnB1dFZhbHVlIiwidmFsdWUiLCJwYXJlbnRFbGVtZW50IiwidGVzdCIsInRpcCIsInRvTG93ZXJDYXNlIiwiaW5wdXRzIiwiZm9yRWFjaCIsImlucHV0Iiwid2ViaW5hclNpZ251cE1vZGFsIiwiV2ViaW5hclNpZ251cEZvcm1Hcm91cCIsInZhbGlkYXRlRW1haWwiLCJ2YWxpZGF0ZVRlbCIsIndlYmluYXJTaWdudXBGb3JtR3JvdXAiLCJXZWJpbmFyU2lnbnVwQnRuIiwiaXNWYWxpZCIsInZhbGlkYXRlTmFtZSIsImJvdHMiLCJzZW5kTXNnIiwiaW5wdXRzRGF0YSIsInRleHRDb250ZW50Iiwic2V0VGltZW91dCIsInJlc2V0SW5wdXRzIiwidGltZW91dEJlZm9yZUJ0blRleHRDaGFuZ2UiLCJjcmVhdGVXZWJpbmFyU2lnbnVwTXNnIiwid2ViaW5hclNpZ251cFRyaWdnZXJCdG5FbCIsIndlYmluYXJTaWdudXBUcmlnZ2VyQnRuIiwid2ViaW5hclNpZ251cEJ0bkVsIiwid2ViaW5hclNpZ251cEJ0biIsImNvbmZpcm1PcmRlck1vZGFsIiwiT3JkZXJGb3JtR3JvdXAiLCJ2YWxpZGF0ZUFkZHJlc3MiLCJjb25maXJtTXNnIiwib3JkZXJGb3JtR3JvdXAiLCJPcmRlckJ0biIsIm9yZGVyQnRuRWwiLCJvcmRlckJ0biIsIkxpZ2h0Ym94IiwiX3NsaWRlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJfY291bnRlciIsIl9hbW91bnQiLCJsZW5ndGgiLCJwcmV2QnRuIiwibmV4dEJ0biIsIm5hdmlnYXRlIiwiZWxlbSIsImRhdGFzZXQiLCJsaWdodGJveCIsIm1hdGNoIiwiZGlyZWN0aW9uIiwiX2N1cnJlbnQiLCJjbG9zZUxpZ2h0Ym94IiwiTnVtYmVyIiwiZ2V0RWxlbUluZGV4Iiwib3BlbkxpZ2h0Ym94IiwicmVxdWlyZUZpbGVzIiwiciIsImtleXMiLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FB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QUFNakMsZUFBTSxHQUFHO0FBQ2I7QUFDQVksU0FBTyxFQUFFO0FBQ1BDLFlBQVEsRUFBRSxVQURIO0FBRVBvQix5QkFBcUIsRUFBRSxrQkFGaEI7QUFHUEcsdUJBQW1CLEVBQUUsMEJBSGQ7QUFJUHBCLFlBQVEsRUFBRSxxQkFKSDtBQUtQd0gsV0FBTyxFQUFFLG1CQUxGO0FBTVBDLFdBQU8sRUFBRSxtQkFORjtBQU9QL0csU0FBSyxFQUFFO0FBUEE7QUFGSSxDQUFmO0FBYUEsSUFBTW1ILFFBQVEsR0FBRyxJQUFJWCxRQUFKLENBQWFsSSxlQUFiLENBQWpCOzs7QUMvR0E7OztBQUlBO0FBQ0EsU0FBU3FKLFlBQVQsQ0FBc0JDLENBQXRCLEVBQXlCO0FBQ3ZCQSxHQUFDLENBQUNDLElBQUYsR0FBU25ELE9BQVQsQ0FBaUJrRCxDQUFqQjtBQUNEO0FBRUQ7Ozs7O0FBR0E7QUFFQTs7OztBQUlBO0FBQ0FELFlBQVksQ0FBQ0csc0JBQUQsQ0FBWjtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7Q0FJQTtBQUNBOztBQUVBO0FBRUE7QUFDQTtBQUVBIiwiZmlsZSI6InNjcmlwdHMuYTNlYTQwMWQwZjExMGM1Y2U4NTcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi4vXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzMik7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vc3ByaXRlLnN2Z1wiOiAzXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gMjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvc3ByaXRlLnN2Z1wiOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImNvbnN0IHBhZ2VfX3ByZWxvYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhZ2VfX3ByZWxvYWRcIik7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxuICBcImxvYWRcIixcbiAgKCkgPT4ge1xuICAgIGlmIChwYWdlX19wcmVsb2FkKSBwYWdlX19wcmVsb2FkLmNsYXNzTGlzdC5yZW1vdmUoXCJwYWdlX19wcmVsb2FkXCIpO1xuICB9LFxuICBmYWxzZVxuKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImNsYXNzIEJ0biB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcbiAgfVxuXG4gIGhhbmRsZUV2ZW50KGUpIHtcbiAgICBpZiAoZS50eXBlID09PSBcImNsaWNrXCIpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMuX2NvbmZpZy5tb2RhbC5vcGVuTW9kYWwodGhpcy5fY29uZmlnLm1vZGFsLmRpYWxvZyk7XG4gICAgfVxuICB9XG5cbiAgZmluZEVsQnlJRChpZCkge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpZH1gKTtcbiAgfVxuXG4gIGZpbmRFbEJ5Q2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2NsYXNzTmFtZX1gKTtcbiAgfVxufVxuXG5leHBvcnQgeyBCdG4gfTtcbiIsImNsYXNzIE1vZGFsIHtcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuXG4gICAgdGhpcy5fYmFja2Ryb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYC4ke3RoaXMuX2NvbmZpZy5jbGFzc2VzLmJhY2tkcm9wfWBcbiAgICApO1xuICAgIHRoaXMuX29wZW5lZCA9IGZhbHNlO1xuICAgIHRoaXMuX2Nsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGAuJHt0aGlzLl9jb25maWcuY2xhc3Nlcy5iYWNrZHJvcH0gLiR7dGhpcy5fY29uZmlnLmNsYXNzZXMuY2xvc2VCdG59YFxuICAgICk7XG4gICAgdGhpcy5kaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0aGlzLl9jb25maWcuSURzLmRpYWxvZ31gKTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGUgPT4gdGhpcy5vbktleWRvd24oZSkpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHRoaXMub25DbGljayhlKSk7XG4gIH1cblxuICAvLyBjb25maXJtIG9yZGVyIG1vZGE6XG4gIG9uQ2xpY2soZSkge1xuICAgIGNvbnN0IGNsaWNrZWRFbCA9IGUudGFyZ2V0O1xuXG4gICAgaWYgKGNsaWNrZWRFbCA9PT0gdGhpcy5fYmFja2Ryb3AgfHwgY2xpY2tlZEVsID09PSB0aGlzLl9jbG9zZUJ0bikge1xuICAgICAgdGhpcy5jbG9zZU1vZGFsKHRoaXMuZGlhbG9nKTsgLy8gd2ViaW5hciBzaWdudXAgbW9kYWw6IHRoaXMuY2xvc2VNb2RhbCgpO1xuICAgIH1cbiAgfVxuXG4gIG9uS2V5ZG93bihlKSB7XG4gICAgaWYgKHRoaXMuX29wZW5lZERpYWxvZyAmJiBlLmNvZGUgPT09IFwiRXNjYXBlXCIpIHtcbiAgICAgIGNvbnN0IHZpZGVvSW5Nb2RhbCA9IHRoaXMuX29wZW5lZERpYWxvZy5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgLiR7dGhpcy5fY29uZmlnLmNsYXNzZXMudmlkZW99YFxuICAgICAgKTtcbiAgICAgIGlmICh2aWRlb0luTW9kYWwpIHRoaXMuc3RvcFZpZGVvKHZpZGVvSW5Nb2RhbCk7XG4gICAgICB0aGlzLnRvZ2dsZUJhY2tkcm9wKCk7XG4gICAgICB0aGlzLl9vcGVuZWQgPSBmYWxzZTtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcIlwiO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZUJhY2tkcm9wKCkge1xuICAgIHRoaXMuX2JhY2tkcm9wLmNsYXNzTGlzdC50b2dnbGUodGhpcy5fY29uZmlnLmNsYXNzZXMuYmFja2Ryb3BTdGF0ZU1vZGlmaWVyKTtcbiAgfVxuXG4gIG9wZW5Nb2RhbChkaWFsb2cpIHtcbiAgICBjb25zdCBuZXdEaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtkaWFsb2cuaWR9YCk7XG4gICAgY29uc3QgdmlzaWJsZURpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgLiR7dGhpcy5fY29uZmlnLmNsYXNzZXMuZGlhbG9nU3RhdGVNb2RpZmllcn1gXG4gICAgKTtcbiAgICB0aGlzLl9vcGVuZWQgPSAhdGhpcy5fb3BlbmVkO1xuXG4gICAgdGhpcy50b2dnbGVCYWNrZHJvcCgpO1xuXG4gICAgaWYgKHZpc2libGVEaWFsb2cpIHRoaXMuaGlkZURpYWxvZyh2aXNpYmxlRGlhbG9nKTtcblxuICAgIHRoaXMuc2hvd0RpYWxvZyhuZXdEaWFsb2cpO1xuICAgIHRoaXMuX29wZW5lZERpYWxvZyA9IG5ld0RpYWxvZztcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcbiAgfVxuXG4gIGNsb3NlTW9kYWwoZWwpIHtcbiAgICBpZiAodGhpcy5fb3BlbmVkKSB7XG4gICAgICAvLyBoYW5kbGUgdmlkZW86XG4gICAgICBjb25zdCB2aWRlb0Jsb2NrID1cbiAgICAgICAgdGhpcy5fb3BlbmVkRGlhbG9nICYmXG4gICAgICAgIHRoaXMuX29wZW5lZERpYWxvZy5xdWVyeVNlbGVjdG9yKGAuJHt0aGlzLl9jb25maWcuY2xhc3Nlcy52aWRlb31gKTtcbiAgICAgIGlmICh2aWRlb0Jsb2NrKSB0aGlzLnN0b3BWaWRlbyh2aWRlb0Jsb2NrKTtcbiAgICAgIC8vXG5cbiAgICAgIHRoaXMuX29wZW5lZCA9ICF0aGlzLl9vcGVuZWQ7XG5cbiAgICAgIHRoaXMudG9nZ2xlQmFja2Ryb3AoKTtcbiAgICAgIGRlbGV0ZSB0aGlzLl9vcGVuZWREaWFsb2c7XG4gICAgICB0aGlzLmhpZGVEaWFsb2coZWwpO1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiXCI7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgaGlkZURpYWxvZyhkaWFsb2cpIHtcbiAgICBkaWFsb2cuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9jb25maWcuY2xhc3Nlcy5kaWFsb2dTdGF0ZU1vZGlmaWVyKTtcbiAgfVxuICBzaG93RGlhbG9nKGRpYWxvZykge1xuICAgIGRpYWxvZy5jbGFzc0xpc3QuYWRkKHRoaXMuX2NvbmZpZy5jbGFzc2VzLmRpYWxvZ1N0YXRlTW9kaWZpZXIpO1xuICB9XG5cbiAgc3RvcFZpZGVvKGVsZW1lbnQpIHtcbiAgICAvKiBTdG9wIGFuIGlmcmFtZSBvciBIVE1MNSA8dmlkZW8+IGZyb20gcGxheWluZy5cbiAgICAgcGFyYW0geyBlbGVtZW50fSAtIHRoZSBlbGVtZW50IHRoYXQgY29udGFpbnMgdGhlIHZpZGVvICovXG4gICAgY29uc3QgaWZyYW1lID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiaWZyYW1lXCIpO1xuICAgIGNvbnN0IHZpZGVvID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwidmlkZW9cIik7XG5cbiAgICBpZiAoaWZyYW1lKSB7XG4gICAgICBjb25zdCBpZnJhbWVTcmMgPSBpZnJhbWUuc3JjO1xuICAgICAgaWZyYW1lLnNyYyA9IGlmcmFtZVNyYztcbiAgICB9XG5cbiAgICBpZiAodmlkZW8pIHZpZGVvLnBhdXNlKCk7XG4gIH1cbn1cblxuZXhwb3J0IHsgTW9kYWwgfTtcbiIsImltcG9ydCB7IE1vZGFsIH0gZnJvbSBcIi4uL21vZGFsL21vZGFsXCI7XG5cbmNvbnN0IHZpZGVvTW9kYWwgPSBuZXcgTW9kYWwoe1xuICBJRHM6IHtcbiAgICBkaWFsb2c6IFwidmlkZW8tZGlhbG9nXCIsXG4gIH0sXG4gIC8qIGFsbCBjbGFzcyBuYW1lcyB1c2VkIGluIEhUTUwgcmVsYXRlZCB0byBtb2RhbCB3aW5kb3cgY29tcG9uZW50OiAqL1xuICBjbGFzc2VzOiB7XG4gICAgYmFja2Ryb3A6IFwibW9kYWxfdmlkZW9cIixcbiAgICBiYWNrZHJvcFN0YXRlTW9kaWZpZXI6IFwibW9kYWxfdmlzaWJsZVwiLFxuICAgIGRpYWxvZ1N0YXRlTW9kaWZpZXI6IFwibW9kYWxfX2RpYWxvZ192aXNpYmxlXCIsXG4gICAgY2xvc2VCdG46IFwibW9kYWxfX2Nsb3NlLWJ0blwiLFxuICAgIHZpZGVvOiBcImVtYmVkXCIsXG4gIH0sXG59KTtcblxuZXhwb3J0IHsgdmlkZW9Nb2RhbCB9O1xuIiwiaW1wb3J0IHsgQnRuIH0gZnJvbSBcIi4uL2J0bi9idG5cIjtcblxuaW1wb3J0IHsgdmlkZW9Nb2RhbCB9IGZyb20gXCIuLi92aWRlby1tb2RhbC92aWRlby1tb2RhbFwiO1xuXG5jb25zdCB2aWRlb1RyaWdnZXJCdG5FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdmlkZW8tdHJpZ2dlci1idG5cIik7XG5cbmNvbnN0IHZpZGVvVHJpZ2dlckJ0biA9IG5ldyBCdG4oe1xuICBidG46IHZpZGVvVHJpZ2dlckJ0bkVsLFxuICBtb2RhbDogdmlkZW9Nb2RhbCxcbn0pO1xuXG52aWRlb1RyaWdnZXJCdG5FbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdmlkZW9UcmlnZ2VyQnRuKTtcbiIsImNsYXNzIFRlbGVncmFtQm90IHtcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgZm9yIChsZXQgcHJvcCBpbiBjb25maWcpIHtcbiAgICAgIHRoaXNbYCR7cHJvcH1gXSA9IGNvbmZpZ1twcm9wXTtcbiAgICB9XG4gIH1cblxuICBzZW5kTXNnKGRhdGEpIHtcbiAgICAvL2NvbnNvbGUubG9nKGJvdC5hdXRoVG9rZW4sIGJvdC5jaGF0SUQsIGJvdC5wYXJzZU1vZGUsIGJvdC5kaXNhYmxlTm90aWYpO1xuICAgIGNvbnN0IG5ld01zZyA9IHRoaXMuY3JlYXRlT3JkZXJNc2coZGF0YSk7XG4gICAgY29uc3QgdXJsID0gYGh0dHBzOi8vYXBpLnRlbGVncmFtLm9yZy9ib3Qke3RoaXMuYXV0aFRva2VufS9zZW5kTWVzc2FnZT9jaGF0X2lkPSR7dGhpcy5jaGF0SUR9JnRleHQ9XCIke25ld01zZ31cIiZwYXJzZV9tb2RlPSR7dGhpcy5wYXJzZU1vZGV9JmRpc2FibGVfbm90aWZpY2F0aW9uPSR7dGhpcy5kaXNhYmxlTm90aWZ9YDtcblxuICAgIGZldGNoKHVybClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgIGBSZXNwb25zZSBmcm9tIGJvdDogJHtyZXNwb25zZS5yZXN1bHQuZnJvbS5maXJzdF9uYW1lfSAoJHtyZXNwb25zZS5yZXN1bHQuZnJvbS51c2VybmFtZX0pIGAsXG4gICAgICAgICAgcmVzcG9uc2VcbiAgICAgICAgKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IpO1xuICAgICAgfSk7XG4gIH1cblxuICBjcmVhdGVPcmRlck1zZyh7IG5hbWUsIGVtYWlsLCB0ZWwsIGFkZHJlc3MgfSkge1xuICAgIHJldHVybiBg0JfQkNCa0JDQlyDQoNCj0KfQmtCYICUwQSAlMEFcbiAgICDQmNC80Y86ICR7bmFtZX0gJTBBXG4gICAgRS1tYWlsOiAke2VtYWlsfSAlMEFcbiAgICDQotC10LvQtdGE0L7QvTogJHt0ZWx9ICUwQVxuICAgINCQ0LTRgNC10YE6ICR7YWRkcmVzc31gO1xuICB9XG5cbiAgY3JlYXRlV2ViaW5hclNpZ251cE1zZyh7IG5hbWUsIGVtYWlsLCB0ZWwgfSkge1xuICAgIHJldHVybiBg0JfQkNCf0JjQodCsINCd0JAg0JLQldCR0JjQndCQ0KAgJTBBICUwQSBcbiAgICDQmNC80Y86ICR7bmFtZX0gJTBBIFxuICAgIEUtbWFpbDogJHtlbWFpbH0gJTBBIFxuICAgINCi0LXQu9C10YTQvtC9OiAke3RlbH1gO1xuICB9XG59XG5cbi8vXG5cbmNvbnN0IEJvdE1hbmFnZXIgPSAoZnVuY3Rpb24oKSB7XG4gIGxldCBpbnN0YW5jZTtcblxuICByZXR1cm4gY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgaWYgKCFpbnN0YW5jZSkgaW5zdGFuY2UgPSB0aGlzO1xuICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cblxuICAgIGNyZWF0ZUJvdChjb25maWcpIHtcbiAgICAgIGNvbnN0IGJvdCA9ICh0aGlzW2Ake2NvbmZpZy5uYW1lfWBdID0gbmV3IFRlbGVncmFtQm90KGNvbmZpZykpO1xuICAgICAgcmV0dXJuIGJvdDtcbiAgICB9XG5cbiAgICAvLyBIZWxwZXIgZnVuY3Rpb24gdG8gZmluZCBvdXQgYm90J3MgY2hhdElEIHdoZW4geW91IGNyZWF0ZSBhIG5ldyBib3QuXG4gICAgLy9cbiAgICAvLyBCZWZvcmUgY2FsbGluZyB0aGlzIGZ1bmN0aW9uLCBvcGVuIFRlbGVncmFtIGFuZCBzZW5kIHR3byBtZXNzYWdlc1xuICAgIC8vIHdpdGggYW55IHRleHQgdG8geW91ciBib3QsIG90aGVyd2lzZSB0aGUgZnVuY3Rpb24gd29uJ3QgYmUgYWJsZSB0b1xuICAgIC8vIHJldHJpZXZlIGNoYXRJRDpcbiAgICByZXRyaWV2ZUNoYXRJRChhdXRoVG9rZW4pIHtcbiAgICAgIGNvbnN0IHVybCA9IGBodHRwczovL2FwaS50ZWxlZ3JhbS5vcmcvYm90JHthdXRoVG9rZW59L2dldFVwZGF0ZXNgO1xuXG4gICAgICBmZXRjaCh1cmwpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgLy8gVGVsZWdyYW0gY2hhdCBJRCBpcyB0aGUgc2FtZSBmb3IgYWxsIG1lc3NhZ2VzOlxuICAgICAgICAgIGlmIChyZXNwb25zZS5yZXN1bHRbMF0pIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgICBgWW91ciBUZWxlZ3JhbSBib3QncyBjaGF0SUQ6ICR7cmVzcG9uc2UucmVzdWx0WzBdLm1lc3NhZ2UuY2hhdC5pZH1gXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgIFwiQ2FuJ3QgcmV0cmlldmUgY2hhdElELiBQbGVhc2UsIG9wZW4geW91ciBib3QncyBjaGF0IGluIFRlbGVncmFtIGFwcCBhbmQgc2VuZCBoaW0gYSBmZXcgbWVzc2FnZXNcIlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9O1xufSkoKTtcblxuY29uc3QgYm90TWFuYWdlciA9IG5ldyBCb3RNYW5hZ2VyKCk7XG5cbi8qXG4gKiB1c2UgYm90TWFuYWdlci5yZXRyaWV2ZUNoYXRJRCg8YXV0aFRva2VuPikgdG8gZmluZCBvdXQgeW91ciBjaGF0SURcbiAqL1xuXG5jb25zdCBteVRlbGVncmFtQm90ID0gYm90TWFuYWdlci5jcmVhdGVCb3Qoe1xuICBuYW1lOiBcIkFuZHJleSBQb25vbWFyZXZcIixcbiAgYXV0aFRva2VuOiBcIjkwNjcyNDI4MTpBQUhYZ3F2TEFfaUtFWm96RGczeU1MMEluUUJQZzRuSGZuZ1wiLFxuICBjaGF0SUQ6IFwiMzM4NDU5NDk2XCIsXG4gIHBhcnNlTW9kZTogXCJNYXJrZG93blwiLFxuICBkaXNhYmxlTm90aWY6IHRydWUsXG59KTtcblxuY29uc3Qgc3BhY2VTYXVzYWdlQm90ID0gYm90TWFuYWdlci5jcmVhdGVCb3Qoe1xuICBuYW1lOiBcIlNwYWNlIFNhdXNhZ2VcIixcbiAgYXV0aFRva2VuOiBcIjEwNDQ1Njc4MjI6QUFHUFhVZUxsQXVtb0N6cnpsbnNQbk4zeXV4QVhIcVNOMm9cIixcbiAgY2hhdElEOiBcIjMzODQ1OTQ5NlwiLFxuICBwYXJzZU1vZGU6IFwiTWFya2Rvd25cIixcbiAgZGlzYWJsZU5vdGlmOiB0cnVlLFxufSk7XG5cbmV4cG9ydCB7IG15VGVsZWdyYW1Cb3QsIHNwYWNlU2F1c2FnZUJvdCB9O1xuIiwiY2xhc3MgRm9ybUdyb3VwIHtcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuXG4gICAgdGhpcy5fb3JkZXJCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3RoaXMuX2NvbmZpZy5ibG9ja0lEfWApO1xuXG4gICAgZm9yIChsZXQgaWQgaW4gdGhpcy5fY29uZmlnLmlucHV0SURzKSB7XG4gICAgICB0aGlzW2Ake2lkfWBdID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dGhpcy5fY29uZmlnLmlucHV0SURzW2lkXX1gKTtcbiAgICB9XG4gIH1cblxuICB2YWxpZGF0ZU5hbWUoaW5wdXRFbCkge1xuICAgIGNvbnN0IHJlZ2V4ID0gL15bYS16QS1a0LAt0Y/QkC3Qr9GR0IFdK1xcc1thLXpBLVrQsC3Rj9CQLdCv0ZHQgV0rJC87XG4gICAgY29uc3QgaW5wdXRWYWx1ZSA9IGlucHV0RWwudmFsdWU7XG5cbiAgICBpbnB1dEVsLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcbiAgICAgIFwiZm9ybS1ncm91cF92YWxpZGF0aW9uX3N1Y2Nlc3NcIixcbiAgICAgIFwiZm9ybS1ncm91cF92YWxpZGF0aW9uX2Vycm9yXCJcbiAgICApO1xuXG4gICAgaWYgKHJlZ2V4LnRlc3QoaW5wdXRWYWx1ZSkpIHtcbiAgICAgIGlucHV0RWwucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZm9ybS1ncm91cF92YWxpZGF0aW9uX3N1Y2Nlc3NcIik7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5wdXRFbC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJmb3JtLWdyb3VwX3ZhbGlkYXRpb25fZXJyb3JcIik7XG4gICAgICBjb25zdCB0aXAgPSBpbnB1dEVsLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLWdyb3VwX190aXBcIik7XG4gICAgICB0aXAuY2xhc3NMaXN0LnJlbW92ZShcImZvcm0tZ3JvdXBfX3RpcF9oaWRkZW5cIik7XG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGVFbWFpbChpbnB1dEVsKSB7XG4gICAgY29uc3QgcmVnZXggPSAvXlxcdytcXC4/XFx3KkBbYS16QS1aX10rP1xcLlthLXpBLVpdezIsM30kLztcbiAgICBjb25zdCBpbnB1dFZhbHVlID0gaW5wdXRFbC52YWx1ZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgaW5wdXRFbC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXG4gICAgICBcImZvcm0tZ3JvdXBfdmFsaWRhdGlvbl9zdWNjZXNzXCIsXG4gICAgICBcImZvcm0tZ3JvdXBfdmFsaWRhdGlvbl9lcnJvclwiXG4gICAgKTtcblxuICAgIGlmIChyZWdleC50ZXN0KGlucHV0VmFsdWUpKSB7XG4gICAgICBpbnB1dEVsLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImZvcm0tZ3JvdXBfdmFsaWRhdGlvbl9zdWNjZXNzXCIpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlucHV0RWwucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZm9ybS1ncm91cF92YWxpZGF0aW9uX2Vycm9yXCIpO1xuICAgICAgY29uc3QgdGlwID0gaW5wdXRFbC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS1ncm91cF9fdGlwXCIpO1xuICAgICAgdGlwLmNsYXNzTGlzdC5yZW1vdmUoXCJmb3JtLWdyb3VwX190aXBfaGlkZGVuXCIpO1xuICAgIH1cbiAgfVxuXG4gIHZhbGlkYXRlVGVsKGlucHV0RWwpIHtcbiAgICBjb25zdCByZWdleCA9IC9eWzAtOSgpKy1cXHNdKyQvO1xuICAgIGNvbnN0IGlucHV0VmFsdWUgPSBpbnB1dEVsLnZhbHVlO1xuXG4gICAgaW5wdXRFbC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXG4gICAgICBcImZvcm0tZ3JvdXBfdmFsaWRhdGlvbl9zdWNjZXNzXCIsXG4gICAgICBcImZvcm0tZ3JvdXBfdmFsaWRhdGlvbl9lcnJvclwiXG4gICAgKTtcblxuICAgIGlmIChyZWdleC50ZXN0KGlucHV0VmFsdWUpKSB7XG4gICAgICBpbnB1dEVsLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImZvcm0tZ3JvdXBfdmFsaWRhdGlvbl9zdWNjZXNzXCIpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlucHV0RWwucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZm9ybS1ncm91cF92YWxpZGF0aW9uX2Vycm9yXCIpO1xuICAgICAgY29uc3QgdGlwID0gaW5wdXRFbC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS1ncm91cF9fdGlwXCIpO1xuICAgICAgdGlwLmNsYXNzTGlzdC5yZW1vdmUoXCJmb3JtLWdyb3VwX190aXBfaGlkZGVuXCIpO1xuICAgIH1cbiAgfVxuXG4gIHZhbGlkYXRlQWRkcmVzcyhpbnB1dEVsKSB7XG4gICAgY29uc3QgcmVnZXggPSAvXi4rJC87XG4gICAgY29uc3QgaW5wdXRWYWx1ZSA9IGlucHV0RWwudmFsdWU7XG5cbiAgICBpbnB1dEVsLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcbiAgICAgIFwiZm9ybS1ncm91cF92YWxpZGF0aW9uX3N1Y2Nlc3NcIixcbiAgICAgIFwiZm9ybS1ncm91cF92YWxpZGF0aW9uX2Vycm9yXCJcbiAgICApO1xuXG4gICAgaWYgKHJlZ2V4LnRlc3QoaW5wdXRWYWx1ZSkpIHtcbiAgICAgIGlucHV0RWwucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZm9ybS1ncm91cF92YWxpZGF0aW9uX3N1Y2Nlc3NcIik7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5wdXRFbC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJmb3JtLWdyb3VwX3ZhbGlkYXRpb25fZXJyb3JcIik7XG4gICAgICBjb25zdCB0aXAgPSBpbnB1dEVsLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLWdyb3VwX190aXBcIik7XG4gICAgICB0aXAuY2xhc3NMaXN0LnJlbW92ZShcImZvcm0tZ3JvdXBfX3RpcF9oaWRkZW5cIik7XG4gICAgfVxuICB9XG5cbiAgcmVzZXRJbnB1dHMoLi4uaW5wdXRzKSB7XG4gICAgaW5wdXRzLmZvckVhY2goaW5wdXQgPT4ge1xuICAgICAgY29uc3QgdGlwID0gaW5wdXQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tZ3JvdXBfX3RpcFwiKTtcbiAgICAgIHRpcC5jbGFzc0xpc3QuYWRkKFwiZm9ybS1ncm91cF9fdGlwX2hpZGRlblwiKTtcbiAgICAgIGlucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgIGlucHV0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcbiAgICAgICAgXCJmb3JtLWdyb3VwX3ZhbGlkYXRpb25fc3VjY2Vzc1wiLFxuICAgICAgICBcImZvcm0tZ3JvdXBfdmFsaWRhdGlvbl9lcnJvclwiXG4gICAgICApO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCB7IEZvcm1Hcm91cCB9O1xuIiwiaW1wb3J0IHsgTW9kYWwgfSBmcm9tIFwiLi4vbW9kYWwvbW9kYWxcIjtcblxuY29uc3Qgd2ViaW5hclNpZ251cE1vZGFsID0gbmV3IE1vZGFsKHtcbiAgSURzOiB7XG4gICAgZGlhbG9nOiBcIndlYmluYXItc2lnbi11cC1kaWFsb2dcIixcbiAgfSxcbiAgLyogYWxsIGNsYXNzIG5hbWVzIHVzZWQgaW4gSFRNTCByZWxhdGVkIHRvIG1vZGFsIHdpbmRvdyBjb21wb25lbnQ6ICovXG4gIGNsYXNzZXM6IHtcbiAgICBiYWNrZHJvcDogXCJtb2RhbF93ZWJpbmFyLXNpZ251cFwiLFxuICAgIGJhY2tkcm9wU3RhdGVNb2RpZmllcjogXCJtb2RhbF92aXNpYmxlXCIsXG4gICAgZGlhbG9nU3RhdGVNb2RpZmllcjogXCJtb2RhbF9fZGlhbG9nX3Zpc2libGVcIixcbiAgICBjbG9zZUJ0bjogXCJtb2RhbF9fY2xvc2UtYnRuXCIsXG4gICAgdmlkZW86IFwiZW1iZWRcIixcbiAgfSxcbn0pO1xuXG5leHBvcnQgeyB3ZWJpbmFyU2lnbnVwTW9kYWwgfTtcbiIsImltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gXCIuLi9mb3JtLWdyb3VwL2Zvcm0tZ3JvdXBcIjtcblxuY2xhc3MgV2ViaW5hclNpZ251cEZvcm1Hcm91cCBleHRlbmRzIEZvcm1Hcm91cCB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICB0aGlzLm5hbWUuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMubmFtZSk7XG4gICAgICBzdXBlci52YWxpZGF0ZU5hbWUodGhpcy5uYW1lKTtcbiAgICB9KTtcblxuICAgIHRoaXMuZW1haWwuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsICgpID0+IHtcbiAgICAgIHRoaXMudmFsaWRhdGVFbWFpbCh0aGlzLmVtYWlsKTtcbiAgICB9KTtcblxuICAgIHRoaXMudGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCAoKSA9PiB7XG4gICAgICB0aGlzLnZhbGlkYXRlVGVsKHRoaXMudGVsKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldCBpbnB1dHNEYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiB0aGlzLm5hbWUudmFsdWUsXG4gICAgICBlbWFpbDogdGhpcy5lbWFpbC52YWx1ZSxcbiAgICAgIHRlbDogdGhpcy50ZWwudmFsdWUsXG4gICAgfTtcbiAgfVxufVxuXG5jb25zdCBjb25maWcgPSB7XG4gIC8vIGJsb2NrSUQ6ICdvcmRlcicsXG4gIGlucHV0SURzOiB7XG4gICAgbmFtZTogXCJ3ZWJpbmFyLXNpZ24tdXAtbmFtZVwiLFxuICAgIGVtYWlsOiBcIndlYmluYXItc2lnbi11cC1lbWFpbFwiLFxuICAgIHRlbDogXCJ3ZWJpbmFyLXNpZ24tdXAtdGVsXCIsXG4gIH0sXG59O1xuXG5jb25zdCB3ZWJpbmFyU2lnbnVwRm9ybUdyb3VwID0gbmV3IFdlYmluYXJTaWdudXBGb3JtR3JvdXAoY29uZmlnKTtcbi8vY29uc29sZS5sb2cod2ViaW5hclNpZ251cEZvcm1Hcm91cCk7XG5leHBvcnQgeyB3ZWJpbmFyU2lnbnVwRm9ybUdyb3VwIH07XG4iLCIvKlxuICogVGVsZWdyYW0gQVBJIERvYzpcbiAqIGh0dHBzOi8vY29yZS50ZWxlZ3JhbS5vcmcvYm90cy9hcGkjYXZhaWxhYmxlLW1ldGhvZHNcbiAqXG4gKiBCb3QgZm9yIGNyZWF0aW5nIG5ldyBib3RzOlxuICogaHR0cHM6Ly90ZWxlZ3JhbS5tZS9ib3RmYXRoZXJcbiAqIEhvdyB0byB1c2U6IGh0dHBzOi8vY29yZS50ZWxlZ3JhbS5vcmcvYm90c1xuICpcbiAqL1xuXG5pbXBvcnQgeyBCdG4gfSBmcm9tIFwiLi4vYnRuL2J0blwiO1xuXG5pbXBvcnQgeyB3ZWJpbmFyU2lnbnVwTW9kYWwgfSBmcm9tIFwiLi4vd2ViaW5hci1zaWdudXAtbW9kYWwvd2ViaW5hci1zaWdudXAtbW9kYWxcIjtcbmltcG9ydCB7IG15VGVsZWdyYW1Cb3QsIHNwYWNlU2F1c2FnZUJvdCB9IGZyb20gXCIuLi90ZWxlZ3JhbS1ib3QvdGVsZWdyYW0tYm90XCI7XG5pbXBvcnQgeyB3ZWJpbmFyU2lnbnVwRm9ybUdyb3VwIH0gZnJvbSBcIi4uL3dlYmluYXItc2lnbnVwLWZvcm0tZ3JvdXAvd2ViaW5hci1zaWdudXAtZm9ybS1ncm91cFwiO1xuXG5jbGFzcyBXZWJpbmFyU2lnbnVwQnRuIGV4dGVuZHMgQnRuIHtcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgc3VwZXIoY29uZmlnKTtcbiAgfVxuXG4gIGhhbmRsZUV2ZW50KGUpIHtcbiAgICBpZiAoZS50eXBlID09PSBcImNsaWNrXCIpIHtcbiAgICAgIGNvbnN0IGlzVmFsaWQgPVxuICAgICAgICB3ZWJpbmFyU2lnbnVwRm9ybUdyb3VwLnZhbGlkYXRlTmFtZSh3ZWJpbmFyU2lnbnVwRm9ybUdyb3VwLm5hbWUpICYmXG4gICAgICAgIHdlYmluYXJTaWdudXBGb3JtR3JvdXAudmFsaWRhdGVFbWFpbCh3ZWJpbmFyU2lnbnVwRm9ybUdyb3VwLmVtYWlsKSAmJlxuICAgICAgICB3ZWJpbmFyU2lnbnVwRm9ybUdyb3VwLnZhbGlkYXRlVGVsKHdlYmluYXJTaWdudXBGb3JtR3JvdXAudGVsKTtcblxuICAgICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgICAgdGhpcy5fY29uZmlnLmJvdHMuZm9yRWFjaChib3QgPT4ge1xuICAgICAgICAgIGJvdC5zZW5kTXNnKHdlYmluYXJTaWdudXBGb3JtR3JvdXAuaW5wdXRzRGF0YSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuX2NvbmZpZy5idG4udGV4dENvbnRlbnQgPSBcItCh0L/QsNGB0LjQsdC+IVwiO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHdlYmluYXJTaWdudXBNb2RhbC5jbG9zZU1vZGFsKHRoaXMuX2NvbmZpZy5tb2RhbC5kaWFsb2cpO1xuICAgICAgICAgIHdlYmluYXJTaWdudXBGb3JtR3JvdXAucmVzZXRJbnB1dHMoXG4gICAgICAgICAgICB3ZWJpbmFyU2lnbnVwRm9ybUdyb3VwLm5hbWUsXG4gICAgICAgICAgICB3ZWJpbmFyU2lnbnVwRm9ybUdyb3VwLmVtYWlsLFxuICAgICAgICAgICAgd2ViaW5hclNpZ251cEZvcm1Hcm91cC50ZWxcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgdGhpcy5fY29uZmlnLmJ0bi50ZXh0Q29udGVudCA9IFwi0JfQsNC/0LjRgdCw0YLRjNGB0Y8g0L3QsCDQstC10LHQuNC90LDRgFwiO1xuICAgICAgICB9LCB0aGlzLl9jb25maWcudGltZW91dEJlZm9yZUJ0blRleHRDaGFuZ2UpO1xuICAgICAgfSBlbHNlIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgaW5wdXRcIik7XG4gICAgfVxuICB9XG5cbiAgc2VuZElucHV0VG8oYm90cykge1xuICAgIGJvdHMuZm9yRWFjaChib3QgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coYm90LmF1dGhUb2tlbiwgYm90LmNoYXRJRCwgYm90LnBhcnNlTW9kZSwgYm90LmRpc2FibGVOb3RpZik7XG5cbiAgICAgIGNvbnN0IHVybCA9IGBodHRwczovL2FwaS50ZWxlZ3JhbS5vcmcvYm90JHtcbiAgICAgICAgYm90LmF1dGhUb2tlblxuICAgICAgfS9zZW5kTWVzc2FnZT9jaGF0X2lkPSR7Ym90LmNoYXRJRH0mdGV4dD1cIiR7Ym90LmNyZWF0ZVdlYmluYXJTaWdudXBNc2coXG4gICAgICAgIHdlYmluYXJTaWdudXBGb3JtR3JvdXAuaW5wdXRzRGF0YVxuICAgICAgKX1cIiZwYXJzZV9tb2RlPSR7Ym90LnBhcnNlTW9kZX0mZGlzYWJsZV9ub3RpZmljYXRpb249JHtib3QuZGlzYWJsZU5vdGlmfWA7XG5cbiAgICAgIGZldGNoKHVybClcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgIGBSZXNwb25zZSBmcm9tIGJvdDogJHtyZXNwb25zZS5yZXN1bHQuZnJvbS5maXJzdF9uYW1lfSAoJHtyZXNwb25zZS5yZXN1bHQuZnJvbS51c2VybmFtZX0pIGAsXG4gICAgICAgICAgICByZXNwb25zZVxuICAgICAgICAgICk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cblxuLy9cblxuY29uc3Qgd2ViaW5hclNpZ251cFRyaWdnZXJCdG5FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gIFwiI3dlYmluYXItc2lnbnVwLXRyaWdnZXItYnRuXCJcbik7XG5cbmNvbnN0IHdlYmluYXJTaWdudXBUcmlnZ2VyQnRuID0gbmV3IEJ0bih7XG4gIGJ0bjogd2ViaW5hclNpZ251cFRyaWdnZXJCdG5FbCxcbiAgbW9kYWw6IHdlYmluYXJTaWdudXBNb2RhbCxcbn0pO1xuXG53ZWJpbmFyU2lnbnVwVHJpZ2dlckJ0bkVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB3ZWJpbmFyU2lnbnVwVHJpZ2dlckJ0bik7XG5cbi8vXG5cbmNvbnN0IHdlYmluYXJTaWdudXBCdG5FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd2ViaW5hci1zaWdudXAtYnRuXCIpO1xuXG5jb25zdCB3ZWJpbmFyU2lnbnVwQnRuID0gbmV3IFdlYmluYXJTaWdudXBCdG4oe1xuICBidG46IHdlYmluYXJTaWdudXBCdG5FbCxcbiAgbW9kYWw6IHdlYmluYXJTaWdudXBNb2RhbCxcbiAgdGltZW91dEJlZm9yZUJ0blRleHRDaGFuZ2U6IDIwMDAsXG4gIGJvdHM6IFtteVRlbGVncmFtQm90LCBzcGFjZVNhdXNhZ2VCb3RdLFxufSk7XG5cbndlYmluYXJTaWdudXBCdG5FbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgd2ViaW5hclNpZ251cEJ0bik7XG4iLCJpbXBvcnQgeyBNb2RhbCB9IGZyb20gXCIuLi9tb2RhbC9tb2RhbFwiO1xuXG5jb25zdCBjb25maXJtT3JkZXJNb2RhbCA9IG5ldyBNb2RhbCh7XG4gIElEczoge1xuICAgIGRpYWxvZzogXCJjb25maXJtLW9yZGVyLWRpYWxvZ1wiLFxuICB9LFxuICAvKiBhbGwgY2xhc3MgbmFtZXMgdXNlZCBpbiBIVE1MIHJlbGF0ZWQgdG8gbW9kYWwgd2luZG93IGNvbXBvbmVudDogKi9cbiAgY2xhc3Nlczoge1xuICAgIGJhY2tkcm9wOiBcIm1vZGFsX2NvbmZpcm0tb3JkZXJcIixcbiAgICBiYWNrZHJvcFN0YXRlTW9kaWZpZXI6IFwibW9kYWxfdmlzaWJsZVwiLFxuICAgIGRpYWxvZ1N0YXRlTW9kaWZpZXI6IFwibW9kYWxfX2RpYWxvZ192aXNpYmxlXCIsXG4gICAgY2xvc2VCdG46IFwibW9kYWxfX2Nsb3NlLWJ0blwiLFxuICB9LFxufSk7XG5cbmV4cG9ydCB7IGNvbmZpcm1PcmRlck1vZGFsIH07XG4iLCJpbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tIFwiLi4vZm9ybS1ncm91cC9mb3JtLWdyb3VwXCI7XG5cbmNsYXNzIE9yZGVyRm9ybUdyb3VwIGV4dGVuZHMgRm9ybUdyb3VwIHtcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgc3VwZXIoY29uZmlnKTtcblxuICAgIHRoaXMubmFtZS5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgKCkgPT4ge1xuICAgICAgdGhpcy52YWxpZGF0ZU5hbWUodGhpcy5uYW1lKTtcbiAgICB9KTtcblxuICAgIHRoaXMuZW1haWwuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsICgpID0+IHtcbiAgICAgIHRoaXMudmFsaWRhdGVFbWFpbCh0aGlzLmVtYWlsKTtcbiAgICB9KTtcblxuICAgIHRoaXMudGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCAoKSA9PiB7XG4gICAgICB0aGlzLnZhbGlkYXRlVGVsKHRoaXMudGVsKTtcbiAgICB9KTtcbiAgICB0aGlzLmFkZHJlc3MuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsICgpID0+IHtcbiAgICAgIHRoaXMudmFsaWRhdGVBZGRyZXNzKHRoaXMuYWRkcmVzcyk7XG4gICAgfSk7XG4gIH1cblxuICBkaXNwbGF5Q29uZmlybU1zZygpIHtcbiAgICBjb25zdCBjb25maXJtTXNnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vcmRlcl9fY29uZmlybS1tc2dcIik7XG4gICAgY29uZmlybU1zZy5jbGFzc0xpc3QucmVtb3ZlKFwib3JkZXJfX2NvbmZpcm0tbXNnX2hpZGRlblwiKTtcbiAgfVxuXG4gIGdldCBpbnB1dHNEYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiB0aGlzLm5hbWUudmFsdWUsXG4gICAgICBlbWFpbDogdGhpcy5lbWFpbC52YWx1ZSxcbiAgICAgIHRlbDogdGhpcy50ZWwudmFsdWUsXG4gICAgICBhZGRyZXNzOiB0aGlzLmFkZHJlc3MudmFsdWUsXG4gICAgfTtcbiAgfVxufVxuXG5jb25zdCBjb25maWcgPSB7XG4gIGJsb2NrSUQ6IFwib3JkZXJcIixcbiAgaW5wdXRJRHM6IHtcbiAgICBuYW1lOiBcIm9yZGVyLW5hbWVcIixcbiAgICBlbWFpbDogXCJvcmRlci1lbWFpbFwiLFxuICAgIHRlbDogXCJvcmRlci10ZWxcIixcbiAgICBhZGRyZXNzOiBcIm9yZGVyLWFkZHJlc3NcIixcbiAgfSxcbn07XG5cbmNvbnN0IG9yZGVyRm9ybUdyb3VwID0gbmV3IE9yZGVyRm9ybUdyb3VwKGNvbmZpZyk7XG5cbmV4cG9ydCB7IG9yZGVyRm9ybUdyb3VwIH07XG4iLCIvKlxuICogVGVsZWdyYW0gQVBJIERvYzpcbiAqIGh0dHBzOi8vY29yZS50ZWxlZ3JhbS5vcmcvYm90cy9hcGkjYXZhaWxhYmxlLW1ldGhvZHNcbiAqXG4gKiBCb3QgZm9yIGNyZWF0aW5nIG5ldyBib3RzOlxuICogaHR0cHM6Ly90ZWxlZ3JhbS5tZS9ib3RmYXRoZXJcbiAqIEhvdyB0byB1c2U6IGh0dHBzOi8vY29yZS50ZWxlZ3JhbS5vcmcvYm90c1xuICpcbiAqL1xuaW1wb3J0IHsgQnRuIH0gZnJvbSBcIi4uL2J0bi9idG5cIjtcblxuaW1wb3J0IHsgY29uZmlybU9yZGVyTW9kYWwgfSBmcm9tIFwiLi4vY29uZmlybS1vcmRlci1tb2RhbC9jb25maXJtLW9yZGVyLW1vZGFsXCI7XG5pbXBvcnQgeyBteVRlbGVncmFtQm90LCBzcGFjZVNhdXNhZ2VCb3QgfSBmcm9tIFwiLi4vdGVsZWdyYW0tYm90L3RlbGVncmFtLWJvdFwiO1xuaW1wb3J0IHsgb3JkZXJGb3JtR3JvdXAgfSBmcm9tIFwiLi4vb3JkZXItZm9ybS1ncm91cC9vcmRlci1mb3JtLWdyb3VwXCI7XG5cbmNsYXNzIE9yZGVyQnRuIGV4dGVuZHMgQnRuIHtcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgc3VwZXIoY29uZmlnKTtcbiAgfVxuXG4gIGhhbmRsZUV2ZW50KGUpIHtcbiAgICBpZiAoZS50eXBlID09PSBcImNsaWNrXCIpIHtcbiAgICAgIGNvbnN0IGlzVmFsaWQgPVxuICAgICAgICBvcmRlckZvcm1Hcm91cC52YWxpZGF0ZU5hbWUob3JkZXJGb3JtR3JvdXAubmFtZSkgJiZcbiAgICAgICAgb3JkZXJGb3JtR3JvdXAudmFsaWRhdGVFbWFpbChvcmRlckZvcm1Hcm91cC5lbWFpbCkgJiZcbiAgICAgICAgb3JkZXJGb3JtR3JvdXAudmFsaWRhdGVUZWwob3JkZXJGb3JtR3JvdXAudGVsKSAmJlxuICAgICAgICBvcmRlckZvcm1Hcm91cC52YWxpZGF0ZUFkZHJlc3Mob3JkZXJGb3JtR3JvdXAuYWRkcmVzcyk7XG5cbiAgICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICAgIHRoaXMuX2NvbmZpZy5ib3RzLmZvckVhY2goYm90ID0+IHtcbiAgICAgICAgICBib3Quc2VuZE1zZyhvcmRlckZvcm1Hcm91cC5pbnB1dHNEYXRhKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uZmlybU9yZGVyTW9kYWwub3Blbk1vZGFsKHRoaXMuX2NvbmZpZy5tb2RhbC5kaWFsb2cpO1xuICAgICAgICBvcmRlckZvcm1Hcm91cC5yZXNldElucHV0cyhcbiAgICAgICAgICBvcmRlckZvcm1Hcm91cC5uYW1lLFxuICAgICAgICAgIG9yZGVyRm9ybUdyb3VwLmVtYWlsLFxuICAgICAgICAgIG9yZGVyRm9ybUdyb3VwLnRlbCxcbiAgICAgICAgICBvcmRlckZvcm1Hcm91cC5hZGRyZXNzXG4gICAgICAgICk7XG4gICAgICB9IGVsc2UgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBpbnB1dFwiKTtcbiAgICB9XG4gIH1cbn1cblxuY29uc3Qgb3JkZXJCdG5FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3JkZXItdHJpZ2dlci1idG5cIik7XG5cbmNvbnN0IG9yZGVyQnRuID0gbmV3IE9yZGVyQnRuKHtcbiAgYnRuOiBvcmRlckJ0bkVsLFxuICBtb2RhbDogY29uZmlybU9yZGVyTW9kYWwsXG4gIHRpbWVvdXRCZWZvcmVCdG5UZXh0Q2hhbmdlOiAyMDAwLFxuICBib3RzOiBbbXlUZWxlZ3JhbUJvdCwgc3BhY2VTYXVzYWdlQm90XSxcbn0pO1xuXG5vcmRlckJ0bkVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvcmRlckJ0bik7XG4iLCJjbGFzcyBMaWdodGJveCB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcblxuICAgIHRoaXMuX2JhY2tkcm9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGAuJHt0aGlzLl9jb25maWcuY2xhc3Nlcy5iYWNrZHJvcH1gXG4gICAgKTtcbiAgICB0aGlzLl9jbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgLiR7dGhpcy5fY29uZmlnLmNsYXNzZXMuY2xvc2VCdG59YFxuICAgICk7XG5cbiAgICB0aGlzLl9zbGlkZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxpZ2h0Ym94X19kaWFsb2dcIik7XG4gICAgdGhpcy5fY291bnRlciA9IDA7XG4gICAgdGhpcy5fYW1vdW50ID0gdGhpcy5fc2xpZGVzLmxlbmd0aDtcblxuICAgIGNvbnN0IHByZXZCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0aGlzLl9jb25maWcuY2xhc3Nlcy5wcmV2QnRufWApO1xuICAgIGNvbnN0IG5leHRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0aGlzLl9jb25maWcuY2xhc3Nlcy5uZXh0QnRufWApO1xuICAgIHByZXZCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4gdGhpcy5uYXZpZ2F0ZShlLCAtMSkpO1xuICAgIG5leHRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4gdGhpcy5uYXZpZ2F0ZShlLCAxKSk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB0aGlzLm9uQ2xpY2soZSkpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGUgPT4gdGhpcy5vbktleWRvd24oZSkpO1xuICB9XG5cbiAgZ2V0RWxlbUluZGV4KGVsZW0pIHtcbiAgICBpZiAoZWxlbS5kYXRhc2V0LmxpZ2h0Ym94KSByZXR1cm4gZWxlbS5kYXRhc2V0LmxpZ2h0Ym94Lm1hdGNoKC9cXGQvKVswXTtcbiAgfVxuXG4gIG5hdmlnYXRlKGUsIGRpcmVjdGlvbikge1xuICAgIHRoaXMuaGlkZURpYWxvZyh0aGlzLl9jdXJyZW50KTtcblxuICAgIHRoaXMuX2NvdW50ZXIgPSB0aGlzLl9jb3VudGVyICsgZGlyZWN0aW9uO1xuXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gLTEgJiYgdGhpcy5fY291bnRlciA8IDApIHRoaXMuX2NvdW50ZXIgPSB0aGlzLl9hbW91bnQgLSAxO1xuICAgIGlmIChkaXJlY3Rpb24gPT09IDEgJiYgIXRoaXMuX3NsaWRlc1t0aGlzLl9jb3VudGVyXSkgdGhpcy5fY291bnRlciA9IDA7XG5cbiAgICB0aGlzLl9jdXJyZW50ID0gdGhpcy5fc2xpZGVzW3RoaXMuX2NvdW50ZXJdO1xuICAgIHRoaXMuc2hvd0RpYWxvZyh0aGlzLl9jdXJyZW50KTtcbiAgfVxuXG4gIG9wZW5MaWdodGJveChjbGlja2VkRWwpIHtcbiAgICBjb25zdCBuZXdEaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtjbGlja2VkRWwuZGF0YXNldC5saWdodGJveH1gKTtcbiAgICBjb25zdCB2aXNpYmxlRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGAuJHt0aGlzLl9jb25maWcuY2xhc3Nlcy5kaWFsb2dTdGF0ZU1vZGlmaWVyfWBcbiAgICApO1xuXG4gICAgdGhpcy50b2dnbGVCYWNrZHJvcCgpO1xuICAgIGlmICh2aXNpYmxlRGlhbG9nKSB0aGlzLmhpZGVEaWFsb2codmlzaWJsZURpYWxvZyk7XG5cbiAgICB0aGlzLnNob3dEaWFsb2cobmV3RGlhbG9nKTtcbiAgICB0aGlzLl9vcGVuZWREaWFsb2cgPSBuZXdEaWFsb2c7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XG4gIH1cblxuICBjbG9zZUxpZ2h0Ym94KCkge1xuICAgIHRoaXMudG9nZ2xlQmFja2Ryb3AoKTtcbiAgICBkZWxldGUgdGhpcy5fb3BlbmVkRGlhbG9nO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcIlwiO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIG9uQ2xpY2soZSkge1xuICAgIGNvbnN0IGNsaWNrZWRFbCA9IGUudGFyZ2V0O1xuXG4gICAgaWYgKGNsaWNrZWRFbCA9PT0gdGhpcy5fYmFja2Ryb3AgfHwgY2xpY2tlZEVsID09PSB0aGlzLl9jbG9zZUJ0bikge1xuICAgICAgdGhpcy5jbG9zZUxpZ2h0Ym94KCk7XG4gICAgfVxuXG4gICAgaWYgKGNsaWNrZWRFbC5kYXRhc2V0LmxpZ2h0Ym94KSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLl9jb3VudGVyID0gTnVtYmVyKHRoaXMuZ2V0RWxlbUluZGV4KGNsaWNrZWRFbCkpO1xuICAgICAgdGhpcy5fY3VycmVudCA9IHRoaXMuX3NsaWRlc1t0aGlzLl9jb3VudGVyXTtcbiAgICAgIHRoaXMub3BlbkxpZ2h0Ym94KGNsaWNrZWRFbCk7XG4gICAgfVxuICB9XG5cbiAgb25LZXlkb3duKGUpIHtcbiAgICBpZiAodGhpcy5fb3BlbmVkRGlhbG9nICYmIGUuY29kZSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgdGhpcy50b2dnbGVCYWNrZHJvcCgpO1xuICAgICAgZGVsZXRlIHRoaXMuX29wZW5lZERpYWxvZztcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcIlwiO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIHNob3dEaWFsb2coZGlhbG9nKSB7XG4gICAgZGlhbG9nLmNsYXNzTGlzdC5hZGQodGhpcy5fY29uZmlnLmNsYXNzZXMuZGlhbG9nU3RhdGVNb2RpZmllcik7XG4gIH1cblxuICBoaWRlRGlhbG9nKGRpYWxvZykge1xuICAgIGRpYWxvZy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2NvbmZpZy5jbGFzc2VzLmRpYWxvZ1N0YXRlTW9kaWZpZXIpO1xuICB9XG5cbiAgdG9nZ2xlQmFja2Ryb3AoKSB7XG4gICAgdGhpcy5fYmFja2Ryb3AuY2xhc3NMaXN0LnRvZ2dsZSh0aGlzLl9jb25maWcuY2xhc3Nlcy5iYWNrZHJvcFN0YXRlTW9kaWZpZXIpO1xuICB9XG59XG5cbmNvbnN0IGNvbmZpZyA9IHtcbiAgLy8gYWxsIGNsYXNzIG5hbWVzIHVzZWQgaW4gSFRNTCByZWxhdGVkIHRvIExpZ2h0Ym94IHdpbmRvdyBjb21wb25lbnQ6XG4gIGNsYXNzZXM6IHtcbiAgICBiYWNrZHJvcDogXCJsaWdodGJveFwiLFxuICAgIGJhY2tkcm9wU3RhdGVNb2RpZmllcjogXCJsaWdodGJveF92aXNpYmxlXCIsXG4gICAgZGlhbG9nU3RhdGVNb2RpZmllcjogXCJsaWdodGJveF9fZGlhbG9nX3Zpc2libGVcIixcbiAgICBjbG9zZUJ0bjogXCJsaWdodGJveF9fY2xvc2UtYnRuXCIsXG4gICAgcHJldkJ0bjogXCJsaWdodGJveC1idG4tcHJldlwiLFxuICAgIG5leHRCdG46IFwibGlnaHRib3gtYnRuLW5leHRcIixcbiAgICB2aWRlbzogXCJlbWJlZFwiLFxuICB9LFxufTtcblxuY29uc3QgbGlnaHRib3ggPSBuZXcgTGlnaHRib3goY29uZmlnKTtcblxuZXhwb3J0IHsgbGlnaHRib3ggfTtcbiIsIi8qIFxuICBIRUxQRVIgRlVOQ1RJT05TXG4qL1xuXG4vLyBmdW5jdGlvbiBmb3IgcmVxdWlyaW5nIGltYWdlczpcbmZ1bmN0aW9uIHJlcXVpcmVGaWxlcyhyKSB7XG4gIHIua2V5cygpLmZvckVhY2gocik7XG59XG5cbi8qKioqKioqKioqKioqXG4gKiBDU1MgUkVTRVQgKlxuICoqKioqKioqKioqKiovXG5pbXBvcnQgXCIuL2Jsb2Nrcy9fcmVzZXQuc2Nzc1wiO1xuXG4vKioqKioqKioqKlxuICogQkxPQ0tTICpcbiAqKioqKioqKioqL1xuXG5pbXBvcnQgXCIuL2Jsb2Nrcy9jb250YWN0cy9fY29udGFjdHMuc2Nzc1wiO1xucmVxdWlyZUZpbGVzKHJlcXVpcmUuY29udGV4dChcIi4vYmxvY2tzL2NvbnRhY3RzL1wiLCB0cnVlLCAvKHN2Z3xwbmd8anBnKSQvKSk7XG5cbmltcG9ydCBcIi4vYmxvY2tzL3BhZ2UvX3BhZ2Uuc2Nzc1wiO1xuaW1wb3J0IFwiLi9ibG9ja3MvcGFnZS9wYWdlLmpzXCI7XG5cbmltcG9ydCBcIi4vYmxvY2tzL3RleHQvX3RleHQuc2Nzc1wiO1xuXG5pbXBvcnQgXCIuL2Jsb2Nrcy9oZWFkaW5nL19oZWFkaW5nLnNjc3NcIjtcblxuaW1wb3J0IFwiLi9ibG9ja3MvZW1iZWQvX2VtYmVkLnNjc3NcIjtcblxuaW1wb3J0IFwiLi9ibG9ja3MvaWNvbnMvX2ljb25zLnNjc3NcIjtcblxuaW1wb3J0IFwiLi9ibG9ja3MvbG9nby9fbG9nby5zY3NzXCI7XG5cbmltcG9ydCBcIi4vYmxvY2tzL2ltZy1zdmcvX2ltZy1zdmcuc2Nzc1wiO1xuXG5pbXBvcnQgXCIuL2Jsb2Nrcy9oZWFkZXIvX2hlYWRlci5zY3NzXCI7XG5cbmltcG9ydCBcIi4vYmxvY2tzL21haW4vbWFpbi5qc1wiO1xuaW1wb3J0IFwiLi9ibG9ja3MvbWFpbi9fbWFpbi5zY3NzXCI7XG5cbmltcG9ydCBcIi4vYmxvY2tzL2JlbmVmaXRzMS9fYmVuZWZpdHMxLnNjc3NcIjtcblxuaW1wb3J0IFwiLi9ibG9ja3MvYmVuZWZpdHMyL19iZW5lZml0czIuc2Nzc1wiO1xuXG5pbXBvcnQgXCIuL2Jsb2Nrcy9iZW5lZml0czMvX2JlbmVmaXRzMy5zY3NzXCI7XG5cbmltcG9ydCBcIi4vYmxvY2tzL2JlbmVmaXRzNC9fYmVuZWZpdHM0LnNjc3NcIjtcblxuaW1wb3J0IFwiLi9ibG9ja3MvYmVuZWZpdHM1L19iZW5lZml0czUuc2Nzc1wiO1xuXG5pbXBvcnQgXCIuL2Jsb2Nrcy9jZXJ0aWZpY2F0ZXMvX2NlcnRpZmljYXRlcy5zY3NzXCI7XG5cbmltcG9ydCBcIi4vYmxvY2tzL3dlYmluYXJzL193ZWJpbmFycy5zY3NzXCI7XG5cbmltcG9ydCBcIi4vYmxvY2tzL29yZGVyL19vcmRlci5zY3NzXCI7XG5cbmltcG9ydCBcIi4vYmxvY2tzL29yZGVyLWNhbGN1bGF0b3IvX29yZGVyLWNhbGN1bGF0b3Iuc2Nzc1wiO1xuXG5pbXBvcnQgXCIuL2Jsb2Nrcy90ZWxlZ3JhbS1ib3QvdGVsZWdyYW0tYm90LmpzXCI7XG5cbmltcG9ydCBcIi4vYmxvY2tzL2J0bi9fYnRuLnNjc3NcIjtcbmltcG9ydCBcIi4vYmxvY2tzL2J0bi9idG4uanNcIjtcblxuaW1wb3J0IFwiLi9ibG9ja3MvZm9ybS1ncm91cC9fZm9ybS1ncm91cC5zY3NzXCI7XG5pbXBvcnQgXCIuL2Jsb2Nrcy9mb3JtLWdyb3VwL2Zvcm0tZ3JvdXAuanNcIjtcblxuaW1wb3J0IFwiLi9ibG9ja3MvbW9kYWwvX21vZGFsLnNjc3NcIjtcbmltcG9ydCBcIi4vYmxvY2tzL21vZGFsL21vZGFsLmpzXCI7XG5cbmltcG9ydCBcIi4vYmxvY2tzL3dlYmluYXItc2lnbnVwLW1vZGFsL3dlYmluYXItc2lnbnVwLW1vZGFsLmpzXCI7XG5cbmltcG9ydCBcIi4vYmxvY2tzL3dlYmluYXItc2lnbnVwLWJ0bi9fd2ViaW5hci1zaWdudXAtYnRuLnNjc3NcIjtcbmltcG9ydCBcIi4vYmxvY2tzL3dlYmluYXItc2lnbnVwLWJ0bi93ZWJpbmFyLXNpZ251cC1idG4uanNcIjtcblxuaW1wb3J0IFwiLi9ibG9ja3Mvd2ViaW5hci1zaWdudXAtZm9ybS1ncm91cC93ZWJpbmFyLXNpZ251cC1mb3JtLWdyb3VwLmpzXCI7XG5cbmltcG9ydCBcIi4vYmxvY2tzL29yZGVyLWJ0bi9fb3JkZXItYnRuLnNjc3NcIjtcbmltcG9ydCBcIi4vYmxvY2tzL29yZGVyLWJ0bi9vcmRlci1idG4uanNcIjtcblxuaW1wb3J0IFwiLi9ibG9ja3Mvb3JkZXItZm9ybS1ncm91cC9fb3JkZXItZm9ybS1ncm91cC5zY3NzXCI7XG5pbXBvcnQgXCIuL2Jsb2Nrcy9vcmRlci1mb3JtLWdyb3VwL29yZGVyLWZvcm0tZ3JvdXAuanNcIjtcblxuaW1wb3J0IFwiLi9ibG9ja3MvY29uZmlybS1vcmRlci1tb2RhbC9jb25maXJtLW9yZGVyLW1vZGFsLmpzXCI7XG5cbi8vIGltcG9ydCAnLi9ibG9ja3MvcmV2aWV3cy9fcmV2aWV3cy5zY3NzJztcbi8vIGltcG9ydCAnLi9ibG9ja3MvcmV2aWV3cy9yZXZpZXdzLmpzJztcblxuaW1wb3J0IFwiLi9ibG9ja3MvZm9vdGVyL19mb290ZXIuc2Nzc1wiO1xuXG5pbXBvcnQgXCIuL2Jsb2Nrcy92aWRlby1tb2RhbC9fdmlkZW8tbW9kYWwuc2Nzc1wiO1xuaW1wb3J0IFwiLi9ibG9ja3MvdmlkZW8tbW9kYWwvdmlkZW8tbW9kYWwuanNcIjtcblxuaW1wb3J0IFwiLi9ibG9ja3MvbGlnaHRib3gvX2xpZ2h0Ym94LnNjc3NcIjtcbmltcG9ydCBcIi4vYmxvY2tzL2xpZ2h0Ym94L2xpZ2h0Ym94LmpzXCI7XG4iXSwic291cmNlUm9vdCI6IiJ9