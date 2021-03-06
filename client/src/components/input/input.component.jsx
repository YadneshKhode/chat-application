import React from "react";
import { IconButton } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
const Input = React.memo(({ message, setMessage, sendMessage }) => {
  // Input field of chat application calls sendMessage which is a function in parent component which emits the message to server 
  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Type a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
        />
      </form>
      <IconButton onClick={(e) => sendMessage(e)}>
        <SendIcon className="white" />
      </IconButton>
    </>
  );
});

export default Input;
