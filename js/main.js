import { saveCookies, checkCookie } from './scripts/cookies';
import {
  openModalSettings, openModalAuthorization, openConfirmationModal, closeModal, closeAllModal,
} from './scripts/modal';
import {
  ELEMENTS, BUTTONS, MODAL, REQUESTS, HTML,
} from './scripts/constants';
import { checkEmail } from './scripts/support_function';
import { changeName, getMessage, getMyInfo } from './scripts/requests';

function renderMyMessage(e) {
  e.preventDefault();
  if (ELEMENTS.MESSAGE_INPUT.value === '') return;

  // eslint-disable-next-line no-undef
  const iMessageTemp = iMessageTemplate.content.cloneNode(true);
  iMessageTemp.querySelector('.i-message__text').textContent = ELEMENTS.MESSAGE_INPUT.value;

  ELEMENTS.I_MESSAGE_BOX.append(iMessageTemp);

  ELEMENTS.MESSAGE_FORM.reset();
}

async function getAuthorizationCode(email) {
  try {
    const response = await fetch(REQUESTS.URL_USER, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      MODAL.BODY_AUTH.insertAdjacentHTML('beforeend', HTML.SERVICE_MESSAGE_GETCODE);
    }
  } catch (e) {
    alert(e);
  }
}

MODAL.AUTHORIZATION_FORM.addEventListener('submit', (e) => {
  e.preventDefault();

  if (checkEmail() && e.submitter.id === 'modalBtnGetCode') {
    getAuthorizationCode(MODAL.AUTHORIZATION_INPUT.value);
    MODAL.AUTHORIZATION_FORM.reset();
  }
});

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
MODAL.AUTHORIZATION_INPUT.addEventListener('input', checkEmail);
BUTTONS.GET_INFO.addEventListener('click', getMyInfo);

closeModal();
checkCookie();
getMessage();
