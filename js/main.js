import { messageForm, messageInput, iMessageBox, authorizationForm, emailInput, getCodeURL, settingsBtn, authorizationBtn, enterCodeBtn } from "../modules/constants.js";

import { closeAllModal, openModalSettings, openModalAuthorization, openConfirmationModal, closeCurrentModal } from "../modules/support_functions.js";

closeAllModal();
closeCurrentModal();

settingsBtn.addEventListener('click', openModalSettings);
authorizationBtn.addEventListener('click', openModalAuthorization);
enterCodeBtn.addEventListener('click', openConfirmationModal);


function sendMessage(e) {
    e.preventDefault();
    if(messageInput.value === '') return;

    // eslint-disable-next-line no-undef
    const iMessageTemp = iMessageTemplate.content.cloneNode(true);
    iMessageTemp.querySelector('span').textContent = messageInput.value;

    iMessageBox.append(iMessageTemp);

    messageInput.value = '';
}

messageForm.addEventListener('submit', sendMessage);


async function getAuthorizationCode(email) {
    try {
        const response = await fetch(getCodeURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({email}),
        });
            const res = await response.json();
            console.log(res);
        } catch(e) {
            console.log(e);
        }
}


authorizationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailValue = emailInput.value;

    getAuthorizationCode(emailValue);
});