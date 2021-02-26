import ChatActionTypes from "./chat.type";

export const addUser = (name) => ({
  type: ChatActionTypes.ADD_USERNAME,
  payload: name,
});
export const addRoom = (room) => ({
  type: ChatActionTypes.ADD_ROOM,
  payload: room,
});
export const addCurrentMessage = (message) => ({
  type: ChatActionTypes.ADD_CURRENT_MESSAGE,
  payload: message,
});
export const addToMessages = (message) => ({
  type: ChatActionTypes.ADD_TO_MESSAGES,
  payload: message,
});