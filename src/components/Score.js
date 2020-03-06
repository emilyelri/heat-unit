import React from "react";
import rooms from '../assets/rooms'

function Score(props) {

  return (
    <div className="score">
      <p className="loc">You are currently in a <p className="rm">{rooms[props.room].title}.</p></p>
      <h2>🔥 scovilles 🔥</h2>
      <h3>{props.score}</h3>
    </div>
  );
}

export default Score;