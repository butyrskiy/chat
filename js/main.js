import { saveCookies } from './scripts/cookies';

import {
  closeAllModal, openModalSettings, openModalAuthorization, openConfirmationModal, closeCurrentModal,
} from './scripts/modal';

import {
  ELEMENTS, BUTTONS, MODAL, REQUESTS,
} from './scripts/constants';

closeAllModal();
closeCurrentModal();

function sendMessage(e) {
  e.preventDefault();
  if (ELEMENTS.MESSAGE_INPUT.value === '') return;

  // eslint-disable-next-line no-undef
  const iMessageTemp = iMessageTemplate.content.cloneNode(true);
  iMessageTemp.querySelector('span').textContent = ELEMENTS.MESSAGE_INPUT.value;

  ELEMENTS.I_MESSAGE_BOX.append(iMessageTemp);

  ELEMENTS.MESSAGE_INPUT.value = '';
}

async function getAuthorizationCode(email) {
  try {
    const response = await fetch(REQUESTS.URL_GET_TOKEN, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({ email }),
    });
    const res = await response.json();
    console.log(res);
  } catch (e) {
    console.error(e);
  }
}

MODAL.AUTHORIZATION_FORN.addEventListener('submit', (e) => {
  e.preventDefault();
  const emailValue = MODAL.AUTHORIZATION_INPUT.value;

  getAuthorizationCode(emailValue);
});

MODAL.CONFIRMATION_FORM.addEventListener('submit', (e) => {
  e.preventDefault();
  saveCookies(MODAL.CONFIRMATION_INPUT.value);
  MODAL.CONFIRMATION_FORM.reset();
});

BUTTONS.SETTINGS.addEventListener('click', openModalSettings);
BUTTONS.AUTHORIZATION.addEventListener('click', openModalAuthorization);
BUTTONS.ENTER_CODE.addEventListener('click', openConfirmationModal);
ELEMENTS.MESSAGE_FORM.addEventListener('submit', sendMessage);
