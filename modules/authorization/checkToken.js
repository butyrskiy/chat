import Cookies from 'js-cookie';
import { MODAL } from '../constants';

export function checkToken() {
  if (Cookies.get('token')) {
    MODAL.AUTHORIZATION.classList.add('modal-hide');
  }
}
