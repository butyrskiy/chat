import Cookies from 'js-cookie';
import { MODAL, HTML, REQUESTS } from './constants';
import { renderAllMessage } from './renderMessage';

export async function changeName(setName) {
  try {
    const response = await fetch(REQUESTS.URL_USER, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: `Bearer ${Cookies.get('token')}`,
      },
      body: JSON.stringify({ name: setName }),
    });
    if (response.ok) {
      MODAL.BODY_SETT.insertAdjacentHTML('beforeend', HTML.SERVICE_MESSAGE_SETNAME);
      MODAL.SETTINGS_FORM.reset();
    }
  } catch (error) {
    alert(error);
  }
}

export async function getMessage() {
  try {
    const response = await fetch(REQUESTS.URL_GET_MESSAGE, {
      headers: {
        method: 'GET',
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: `Bearer ${Cookies.get('token')}`,
      },
    });
    const res = await response.json();
    renderAllMessage(res);
  } catch (e) {
    console.log(e);
  }
}

// Todo. Create a button that will display the current name
async function getMyName() {
  try {
    const response = await fetch(REQUESTS.URL_GET_NAME, {
      headers: {
        method: 'GET',
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: `Bearer ${Cookies.get('token')}`,
      },
    });
    const res = await response.json();
    console.log(res);
  } catch (e) {
    console.log(e);
  }
}

// getMyName();
