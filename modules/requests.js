import Cookies from 'js-cookie';
import {
  MODAL, HTML, REQUESTS, ELEMENTS,
} from './constants';
import { renderAllMessage, rebderMyInfo } from './messages/render';

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
      ELEMENTS.MODAL_MYINFO.innerHTML = '';
      ELEMENTS.MODAL_MYINFO.insertAdjacentHTML('beforeend', HTML.SERVICE_MESSAGE_SETNAME);
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

export async function getMyInfo() {
  try {
    const response = await fetch(REQUESTS.URL_GET_NAME, {
      headers: {
        method: 'GET',
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: `Bearer ${Cookies.get('token')}`,
      },
    });
    const res = await response.json();
    ELEMENTS.MODAL_MYINFO.innerHTML = '';
    rebderMyInfo(res);
  } catch (e) {
    console.log(e);
  }
}
