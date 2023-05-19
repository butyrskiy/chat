export const ELEMENTS = {
  MESSAGE_FORM: document.querySelector('.send-message__form'),
  MESSAGE_INPUT: document.querySelector('.send-message__input'),
  I_MESSAGE_BOX: document.querySelector('.i-message-box'),
  MEMBER_MESSAGE_BOX: document.querySelector('.member-message-box'),
};

export const MODAL = {
  ALL_MODAL: document.querySelectorAll('.modal'),
  BODY_AUTH: document.getElementById('modalBodyAuthorization'),
  BODY_SETT: document.getElementById('modalBodySettings'),
  AUTHORIZATION: document.querySelector('.modal-authorization'),
  SETTINGS: document.querySelector('.modal-settings'),
  SETTINGS_FORM: document.querySelector('.modal-settings__form'),
  SETTINGS_INPUT: document.querySelector('.modal-settings__form-input'),
  CONFIRMATION: document.querySelector('.modal-confirmation'),
  AUTHORIZATION_FORM: document.querySelector('.modal-authorization__form'),
  AUTHORIZATION_INPUT: document.querySelector('.modal-authorization__form-input'),
  CONFIRMATION_FORM: document.querySelector('.modal-confirmation__form'),
  CONFIRMATION_INPUT: document.querySelector('.modal-confirmation__form-input'),
};

export const BUTTONS = {
  SETTINGS: document.querySelector('.header__btn--settings'),
  AUTHORIZATION: document.querySelector('.header__btn--exit'),
  ENTER_CODE: document.getElementById('modalBtnEnterCode'),
  CLOSE: document.querySelectorAll('.modal__close-btn'),
};

export const REQUESTS = {
  URL_USER: 'https://edu.strada.one/api/user',
  URL_GET_NAME: 'https://edu.strada.one/api/user/me',
  URL_GET_MESSAGE: 'https://edu.strada.one/api/messages/',
};

export const VALID = {
  EMAIL_REGEXP: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
};

export const HTML = {
  SERVICE_MESSAGE_GETCODE: `<span class="service-message">
  Request has been sent. Check your mail
</span>`,
  SERVICE_MESSAGE_SETNAME: `<span class="service-message">
  Your name has been change!
  </span>`,
};
