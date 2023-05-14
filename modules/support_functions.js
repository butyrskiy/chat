import { modal, closeBtn, modalSettings, modalAuthorization, modalConfirmation } from "./constants.js";

export { closeAllModal, openModalSettings, openModalAuthorization, openConfirmationModal, closeCurrentModal };

function closeAllModal() {
    modal.forEach(item => {
        item.classList.add('modal-hide');
    });
}

function openModalSettings() {
    modalSettings.classList.remove('modal-hide');
}

function openModalAuthorization() {
    modalAuthorization.classList.remove('modal-hide');
}

function openConfirmationModal(e) {
    e.preventDefault();
    modalConfirmation.classList.remove('modal-hide');
}

function closeCurrentModal() {
    closeBtn.forEach(item => {
        item.addEventListener('click', closeAllModal);
    });
}