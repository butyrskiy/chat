import { messageForm, messageInput, iMessageBox } from "../modules/constants.js";

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