import Cookies from 'js-cookie';
import { REQUESTS } from '../constants';
// eslint-disable-next-line import/no-cycle
import { renderAllMessage } from './render';
import { checkTokenStartApp } from '../authorization/token';

export async function getMessage() {
  if (checkTokenStartApp()) {
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
}
