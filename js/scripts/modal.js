import { MODAL, BUTTONS } from './constants';

export function closeAllModal() {
  MODAL.ALL_MODAL.forEach((item) => {
    item.classList.add('modal-hide');
  });
}

export function openModalSettings() {
  MODAL.SETTINGS.classList.remove('modal-hide');
}

export function openModalAuthorization() {
  MODAL.AUTHORIZATION.classList.remove('modal-hide');
}

export function openConfirmationModal(e) {
  e.preventDefault();
  MODAL.CONFIRMATION.classList.remove('modal-hide');
}

export function closeCurrentModal() {
  BUTTONS.CLOSE.forEach((item) => {
    item.addEventListener('click', closeAllModal);
  });
}
