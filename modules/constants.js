const messageForm = document.querySelector('.send-message__form'),
      messageInput = document.querySelector('.send-message__input'),
      iMessageBox = document.querySelector('.i-message-box'),
      authorizationForm = document.querySelector('.modal-authorization__form'),
      emailInput = document.querySelector('.modal-authorization__form-input'),
      settingsBtn = document.querySelector('.header__btn--settings'),
      authorizationBtn = document.querySelector('.header__btn--exit'),
      enterCodeBtn = document.getElementById('modalBtnEnterCode'),
      closeBtn = document.querySelectorAll('.modal__close-btn'),
      modal = document.querySelectorAll('.modal'),
      modalAuthorization = document.querySelector('.modal-authorization'),
      modalSettings = document.querySelector('.modal-settings'),
      modalConfirmation = document.querySelector('.modal-confirmation');
    

const getCodeURL = 'https://edu.strada.one/api/user';

export { messageForm, messageInput, iMessageBox, authorizationForm, emailInput, settingsBtn, authorizationBtn, getCodeURL, closeBtn, modal, modalAuthorization, modalSettings, modalConfirmation, enterCodeBtn };