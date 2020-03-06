import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";

function Chat(props) {
  const [newMessage, setNewMessage] = useState("");
  const [user, setUser] = localStorage.getItem("user");

  const element = document.getElementsByClassName('messages');

  const updateScroll = () => {
    element.scrollTop = element.scrollHeight;
  };

  const handleChange = e => {
    e.preventDefault();
    setNewMessage(e.target.value);
  };

  const handleSubmit = e => {
    console.log(user);
    e.preventDefault();
    props.setChats([
      {
        message: `${user} says: "` + newMessage + `"`,
        time: new Date().toTimeString()
      }, ...props.chats
    ]);
    setNewMessage("");
    var frm = document.getElementsByClassName("enter")[0];
    frm.reset();
    updateScroll();
  };

  return (
    <div className="chat">
      <div className="messages">
        {props.chats.map(chat => (
          <>
            <div className="chats">
              <span className="time">[{chat.time.slice(0, 8)}] </span>
              {chat.message}
            </div>
          </>
        ))}
      </div>
      {props.loggedIn ? (
        <form className="enter" onSubmit={handleSubmit}>
          >> <span className="spacer" />{" "}
          <TextField
            name="newMessage"
            type="text"
            placeholder="  got something to say?"
            onChange={handleChange}
            fullWidth
            style={{ width: 480 }}
          />
        </form>
      ) : (
        <noscript />
      )}
    </div>
  );
}

export default Chat;
