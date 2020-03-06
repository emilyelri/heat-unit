import React, { useState, useEffect } from "react";

import Map from "./Map";
import Chat from "./Chat";
import Controls from "./Controls";
import Score from "./Score";

const Console = (props) => {

  const [score, setScore] = useState(0);
  localStorage.setItem('score', score)
  const [chats, setChats] = useState([]);
  const [room, setRoom] = useState(0);

    return (
      <div className="console">
        <Map room={room} setRoom={setRoom} />
        <div className="interface">
          <Chat chats={chats} setChats={setChats} loggedIn={props.loggedIn} />
          <Controls score={score} setScore={setScore}  chats={chats} setChats={setChats} room={room} />
          <Score  score={score} room={room} />
        </div>
      </div>
    );
  }

export default Console;