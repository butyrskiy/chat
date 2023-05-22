import { checkToken } from './authorization/token';
import { getMessage } from './messages/getMessage';

let socket;
const token = checkToken();

export function websocket() {
  socket = new WebSocket(`wss://edu.strada.one/websockets?${token}`);
  socket.onopen = () => {
    console.log('Connection established');
    getMessage();
  };

  socket.onclose = () => {
    console.log('Connection closed');
    if (checkToken) {
      websocket();
    } else console.log('Token error');
  };

  socket.onmessage = () => getMessage();
}

export function sendMessage(message) {
  socket.send(JSON.stringify({ text: message }));
}
