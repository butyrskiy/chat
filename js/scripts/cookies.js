import Cookies from 'js-cookie';

export function saveCookies(token) {
  Cookies.set('token', token);
}
