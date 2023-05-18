import { saveCookies } from './scripts/cookies';

import {
  openModalSettings, openModalAuthorization, openConfirmationModal, closeModal,
} from './scripts/modal';

import {
  ELEMENTS, BUTTONS, MODAL, REQUESTS, HTML,
} from './scripts/constants';

import { checkEmail } from './scripts/support_function';

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

    if (response.ok) {
      MODAL.BODY_AUTH.insertAdjacentHTML('beforeend', HTML.SERVICE_MESSAGE);
    }
  } catch (e) {
    console.error(e);
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
  MODAL.CONFIRMATION_FORM.reset();
});

BUTTONS.SETTINGS.addEventListener('click', openModalSettings);
BUTTONS.AUTHORIZATION.addEventListener('click', openModalAuthorization);
BUTTONS.ENTER_CODE.addEventListener('click', openConfirmationModal);
ELEMENTS.MESSAGE_FORM.addEventListener('submit', sendMessage);
MODAL.AUTHORIZATION_INPUT.addEventListener('input', checkEmail);

closeModal();
