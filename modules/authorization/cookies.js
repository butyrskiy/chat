import Cookies from 'js-cookie';

export function saveCookies(token) {
  Cookies.set('token', token);
}

export function removeCookies() {
  Cookies.remove('token');
}
