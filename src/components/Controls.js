import React from "react";
import axios from "axios";
import rooms from "../assets/rooms";
import axiosWithAuth from "../utils/axiosWithAuth";

function Controls(props) {
  const room = props.room;
  let add = 100;

  const shouts = [
    "Muy caliente!",
    "Hot hot hot!",
    "Spiiiiiiicy!",
    "Feel the burn!"
  ];

  var keysDown = {
    37: false,
    38: false,
    39: false,
    40: false
  };

  async function handleFight(e) {
    e.preventDefault();
    let rnge = rooms[room].s;
    let spice = Math.floor(Math.random() * (rnge[1] - rnge[0]) + rnge[0]);
    let holler = shouts[Math.floor(Math.random() * (3 - 1) + 1)];
    let chance = props.score / spice;
    if (chance < 0.05) {
      chance = 0.1;
    } else if (chance > 0.9) {
      chance = 0.9;
    }
    let actual = Math.random();

    await props.setChats([
      {
        message: `This ${rooms[room].description} has ${spice} scoville heat units!!`,
        time: new Date().toTimeString()
      },
      ...props.chats
    ]);

    if (actual >= chance) {
      props.setScore(props.score + spice);
      localStorage.setItem("score", props.score);
      props.setChats([
        {
          message: `${holler} You gained ${spice} scovilles.`,
          time: new Date().toTimeString()
        },
        ...props.chats
      ]);
    } else {
      props.setScore(props.score - spice);
      localStorage.setItem("score", props.score);
      props.setChats([
        {
          message: `Oh no, you weren't spicy enough! You've lost ${spice} scovilles.`,
          time: new Date().toTimeString()
        },
        ...props.chats
      ]);
    }
  }

  const handleInvestigate = e => {
    e.preventDefault();
    props.setChats([
      {
        message: `${rooms[room].description}`,
        time: new Date().toTimeString()
      },
      ...props.chats
    ]);

    // axios.get(`https://heat-unit.herokuapp.com/adventure/room/${room}`)
    // .then(res => {
    //   console.log(res)
    // })
    // .catch(err => {
    //   console.log(err)
    // })
  };

  const handleArrow = num => {};

  return (
    <div className="controls">
      <div className="actions">
        <div className="action" onClick={handleFight}>
          ⚔️
        </div>
        <div className="action" onClick={handleInvestigate}>
          🔍
        </div>
      </div>
      <div className="arrows">
        <div className="arrow" onClick={handleArrow(38)}>
          ↑
        </div>
        <div className="arrows-bottom">
          <div className="arrow" onClick={handleArrow(37)}>
            ←
          </div>
          <div className="arrow" onClick={handleArrow(40)}>
            ↓
          </div>
          <div className="arrow" onClick={handleArrow(39)}>
            →
          </div>
        </div>
      </div>
    </div>
  );
}

export default Controls;
