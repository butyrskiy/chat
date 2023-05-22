import { MODAL } from '../constants';

export function openModalSettings() {
  MODAL.SETTINGS.classList.remove('modal-hide');
}

export function openModalAuthorization() {
  MODAL.AUTHORIZATION.classList.remove('modal-hide');
}

export function openConfirmationModal() {
  MODAL.CONFIRMATION.classList.remove('modal-hide');
}

export function closeAllModal() {
  MODAL.ALL_MODAL.forEach((item) => {
    item.classList.add('modal-hide');
  });
}

export function closeCurrentModal(e) {
  if (e.target.classList.contains('modal__close-btn')) {
    closeAllModal();
  }
}

export function closeModal() {
  MODAL.ALL_MODAL.forEach((item) => {
    item.addEventListener('click', closeCurrentModal);
  });
}
