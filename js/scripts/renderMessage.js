import { ELEMENTS } from './constants';

export function renderAllMessage(data) {
  const memberMessageTemp = memberMessageTemplate.content.cloneNode(true);

  const messageArr = data.messages;
  console.log(messageArr);

  messageArr.forEach((element) => {
    const msg = document.createElement('div');
    const msgBlock = document.createElement('div');
    const msgText = document.createElement('span');
    const msgTime = document.createElement('div');
    msg.classList.add('i-message', 'message');
    msgBlock.classList.add('i-message__block');
    msgText.classList.add('i-message__text');
    msgTime.classList.add('i-message__time', 'message-time');
    msg.append(msgBlock);
    msgBlock.append(msgText);
    msgBlock.append(msgTime);
    ELEMENTS.MEMBER_MESSAGE_BOX.append(msg);

    msgText.textContent = element.text;

    const time = new Date(element.createdAt);
    const timeMsg = `${time.getHours()}:${time.getMinutes()}`;

    msgTime.textContent = timeMsg;
  });
}
