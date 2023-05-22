import { saveCookies, removeCookies } from './modules/authorization/cookies';
import {
  openModalSettings, openModalAuthorization, openConfirmationModal, closeModal, closeAllModal,
} from './modules/interface/modal';
import { ELEMENTS, BUTTONS, MODAL } from './modules/constants';
import { checkEmail } from './modules/support_function';
import { changeName, getMyInfo } from './modules/requests';
import { getTokenCode } from './modules/authorization/token';
import { renderMyMessage } from './modules/messages/render';
import { websocket } from './modules/webSocket';

closeModal();
websocket();

MODAL.CONFIRMATION_FORM.addEventListener('submit', (e) => {
  e.preventDefault();
  saveCookies(MODAL.CONFIRMATION_INPUT.value);
  if (MODAL.CONFIRMATION_INPUT.value) {
    closeAllModal();
    openModalSettings();
  }
});

MODAL.SETTINGS_FORM.addEventListener('submit', (e) => {
  e.preventDefault();
  changeName(MODAL.SETTINGS_INPUT.value);
});

BUTTONS.SETTINGS.addEventListener('click', openModalSettings);
BUTTONS.AUTHORIZATION.addEventListener('click', openModalAuthorization);
BUTTONS.ENTER_CODE.addEventListener('click', openConfirmationModal);
ELEMENTS.MESSAGE_FORM.addEventListener('submit', renderMyMessage);
MODAL.AUTHORIZATION_FORM.addEventListener('submit', getTokenCode);
MODAL.AUTHORIZATION_INPUT.addEventListener('input', checkEmail);
BUTTONS.GET_INFO.addEventListener('click', getMyInfo);
BUTTONS.EXIT.addEventListener('click', removeCookies);
