/* eslint-disable no-undef */
import { ELEMENTS } from '../constants';
// eslint-disable-next-line import/no-cycle
import { sendMessage } from '../webSocket';

export function renderMyMessage(e) {
  e.preventDefault();
  const message = ELEMENTS.MESSAGE_INPUT.value;

  if (ELEMENTS.MESSAGE_INPUT.value === '') return;

  sendMessage(message);

  ELEMENTS.MESSAGE_FORM.reset();
}

export function renderAllMessage(data) {
  const messageData = data.messages;
  const fragment = document.createDocumentFragment();

  messageData.reverse().forEach((element) => {
    const iMessageTemp = iMessageTemplate.content.cloneNode(true);
    const memberMessageTemp = memberMessageTemplate.content.cloneNode(true);

    if (element.user.email === 'd.butyrskiy@gmail.com') {
      iMessageTemp.querySelector('.i-message__text').textContent = element.text;

      fragment.append(iMessageTemp);
    } else {
      memberMessageTemp.querySelector('.member-message__text').textContent = element.text;
      memberMessageTemp.querySelector('.memberName').textContent = `${element.user.name}:`;
      fragment.append(memberMessageTemp);
    }
  });

  ELEMENTS.MESSAGE_BOX.append(fragment);
}

export function rebderMyInfo(data) {
  const {
    _id, name, email, token,
  } = data;

  const getInfoTemp = getInfoTemplate.content.cloneNode(true);

  getInfoTemp.querySelector('.myinfo__email-value').textContent = email;
  getInfoTemp.querySelector('.myinfo__id-value').textContent = _id;
  getInfoTemp.querySelector('.myinfo__name-value').textContent = name;
  getInfoTemp.querySelector('.myinfo__token-value').textContent = `${token.slice(0, 20)}...`;

  ELEMENTS.MODAL_MYINFO.append(getInfoTemp);
}
