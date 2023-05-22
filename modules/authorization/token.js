import Cookies from 'js-cookie';
import { MODAL, HTML, REQUESTS } from '../constants';
import { checkEmail } from '../support_function';

export async function getToken(email) {
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

export function getTokenCode(e) {
  e.preventDefault();

  if (checkEmail() && e.submitter.id === 'modalBtnGetCode') {
    getToken(MODAL.AUTHORIZATION_INPUT.value);
    MODAL.AUTHORIZATION_FORM.reset();
  }
}

export function checkToken() {
  if (Cookies.get('token')) {
    return Cookies.get('token');
  } console.log('Token error');
}

export function checkTokenStartApp() {
  if (Cookies.get('token')) {
    MODAL.AUTHORIZATION.classList.add('modal-hide');
    return true;
  } return false;
}
