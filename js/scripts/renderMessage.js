/* eslint-disable no-undef */
import { ELEMENTS } from './constants';

export function renderAllMessage(data) {
  const messageData = data.messages;

  messageData.forEach((element) => {
    const memberMessageTemp = memberMessageTemplate.content.cloneNode(true);

    memberMessageTemp.querySelector('.member-message__text').textContent = element.text;
    memberMessageTemp.querySelector('.memberName').textContent = `${element.user.name}:`;

    ELEMENTS.MEMBER_MESSAGE_BOX.append(memberMessageTemp);
  });
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
