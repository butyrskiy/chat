import Cookies from 'js-cookie';
import { MODAL } from './constants';

export function saveCookies(token) {
  Cookies.set('token', token);
}

export function checkCookie() {
  if (Cookies.get('token')) {
    MODAL.AUTHORIZATION.classList.add('modal-hide');
  }
}
