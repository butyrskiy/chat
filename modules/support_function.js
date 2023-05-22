import { VALID, MODAL } from './constants';

const INPUT = MODAL.AUTHORIZATION_INPUT;

export function checkEmail() {
  if (VALID.EMAIL_REGEXP.test(INPUT.value)) {
    INPUT.classList.add('isValid');
    return true;
  }
}
