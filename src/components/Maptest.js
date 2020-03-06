import React, { useEffect } from "react";
import avatar from '../assets/avi.png';

function Maptest(props) {
  var ctx = null;
  var gameMap = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
    0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
    0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
    0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
    0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
    0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ];
  var indices = {
    '1-21': 0,
    '2-21': 1,
    '3-21': 2,
    '4-21': 3,
    '5-21': 4,
    '6-21': 5,
    '7-21': 6,
    '8-21': 7,
    '9-21': 8,
    '10-21': 9,
    '11-21': 9,
    '12-21': 10,
    '12-20': 11,
    '12-19': 12,
    '11-19': 13,
    '10-19': 14,
    '9-19': 15,
    '8-19': 16,
    '7-19': 17,
    '6-19': 18,
    '5-19': 19,
    '4-19': 20,
    '3-19': 21,
    '2-19': 22,
    '1-19': 23,
    '1-18': 23,
    '1-17': 24,
    '2-17': 25,
    '3-17': 26,
    '4-17': 27,
    '5-17': 28,
    '6-17': 29,
    '7-17': 30,
    '8-17': 31,
    '9-17': 32,
    '10-17': 33,
    '11-17': 34,
    '12-17': 35,
    '12-16': 35,
    '12-15': 36,
    '11-15': 37,
    '10-15': 38,
    '9-15': 39,
    '8-15': 40,
    '7-15': 41,
    '6-15': 42,
    '5-15': 43,
    '4-15': 44,
    '3-15': 45,
    '2-15': 46,
    '1-15': 47,
    '1-14': 47,
    '1-13': 48,
    '2-13': 49,
    '3-13': 50,
    '4-13': 51,
    '5-13': 52,
    '6-13': 53,
    '7-13': 54,
    '8-13': 55,
    '9-13': 56,
    '10-13': 57,
    '11-13': 58,
    '12-13': 59,
    '12-12': 59,
    '12-11': 60,
    '11-11': 61,
    '10-11': 62,
    '9-11': 63,
    '8-11': 64,
    '7-11': 65,
    '6-11': 66,
    '5-11': 67,
    '4-11': 68,
    '3-11': 69,
    '2-11': 70,
    '1-11': 71,
    '1-10': 71,
    '1-9': 72,
    '2-9': 73,
    '3-9': 74,
    '4-9': 75,
    '5-9': 76,
    '6-9': 77,
    '7-9': 78,
    '8-9': 79,
    '9-9': 80,
    '10-9': 81,
    '11-9': 82,
    '12-9': 83,
    '12-8': 83,
    '12-7': 84,
    '11-7': 85,
    '10-7': 86,
    '9-7': 87,
    '8-7': 88,
    '7-7': 89,
    '6-7': 90,
    '5-7': 91,
    '4-7': 92,
    '3-7': 93,
    '2-7': 94,
    '1-7': 95,
    '1-6': 95,
    '1-5': 96,
    '2-5': 97,
    '3-5': 98,
    '4-5': 99,
    '5-5': 0,
    '6-5': 1,
    '7-5': 2,
    '8-5': 3,
    '9-5': 4,
    '10-5': 5,
    '11-5': 6,
    '12-5': 7,
    '12-4': 7,
    '12-3': 8,
    '11-3': 9,
    '10-3': 10,
    '9-3': 11,
    '8-3': 12,
    '7-3': 13,
    '6-3': 14,
    '5-3': 15,
    '4-3': 16,
    '3-3': 17,
    '2-3': 18,
    '1-3': 19,
    '1-2': 19,
    '1-1': 20,
    '2-1': 21,
    '3-1': 23,
    '4-1': 24,
    '5-1': 25,
    '6-1': 26,
    '7-1': 27,
    '8-1': 28,
    '9-1': 29,
    '10-1': 30,
    '11-1': 31,
    '12-1': 32
  }

  var tileW = 40,
    tileH = 40;
  var mapW = 14,
    mapH = 23;
  var currentSecond = 0,
    frameCount = 0,
    framesLastSecond = 0,
    lastFrameTime = 0;

  var keysDown = {
    37: false,
    38: false,
    39: false,
    40: false
  };

  var viewport = {
    screen: [0, 0],
    startTile: [0, 0],
    endTile: [0, 0],
    offset: [0, 0],
    update: function(px, py) {
      this.offset[0] = Math.floor(this.screen[0] / 2 - px);
      this.offset[1] = Math.floor(this.screen[1] / 2 - py);

      var tile = [Math.floor(px / tileW), Math.floor(py / tileH)];

      // this.startTile[0] = 0
      // this.startTile[1] = 0     

      this.startTile[0] = tile[0] - 1 - Math.ceil(this.screen[0] / 2 / tileW);  //2
      this.startTile[1] = tile[1] - 1 - Math.ceil(this.screen[1] / 2 / tileH);  //27

      if (this.startTile[0] < 0) {
        this.startTile[0] = 0;
      }
      if (this.startTile[1] < 0) {
        this.startTile[1] = 0;
      }

      this.endTile[0] = tile[0] + 1 + Math.ceil(this.screen[0] / 2 / tileW);
      this.endTile[1] = tile[1] + 1 + Math.ceil(this.screen[1] / 2 / tileH);

      if (this.endTile[0] >= mapW) {
        this.endTile[0] = mapW - 1;
      }
      if (this.endTile[1] >= mapH) {
        this.endTile[1] = mapH - 1;
      }
    }
  };

  var player = new Character();

  function Character() {
    this.tileFrom = [1, 1];
    this.tileTo = [1, 21];
    this.timeMoved = 0;
    this.dimensions = [30, 30];
    this.position = [45, 45];
    this.delayMove = 200;
  }
  Character.prototype.placeAt = function(x, y) {
    this.tileFrom = [x, y];
    this.tileTo = [x, y];
    this.position = [
      tileW * x + (tileW - this.dimensions[0]) / 2,
      tileH * y + (tileH - this.dimensions[1]) / 2
    ];
  };
  Character.prototype.processMovement = function(t) {
    if (
      this.tileFrom[0] == this.tileTo[0] &&
      this.tileFrom[1] == this.tileTo[1]
    ) {
      return false;
    }

    if (t - this.timeMoved >= this.delayMove) {
      this.placeAt(this.tileTo[0], this.tileTo[1]);
      console.log(player.tileTo[0], player.tileTo[1]);
      var cur = `${player.tileTo[0]}-${player.tileTo[1]}`;
      props.setRoom(indices[cur]);
    } else {
      this.position[0] =
        this.tileFrom[0] * tileW + (tileW - this.dimensions[0]) / 2;
      this.position[1] =
        this.tileFrom[1] * tileH + (tileH - this.dimensions[1]) / 2;

      if (this.tileTo[0] != this.tileFrom[0]) {
        var diff = (tileW / this.delayMove) * (t - this.timeMoved);
        this.position[0] += this.tileTo[0] < this.tileFrom[0] ? 0 - diff : diff;
      }
      if (this.tileTo[1] != this.tileFrom[1]) {
        var diff = (tileH / this.delayMove) * (t - this.timeMoved);
        this.position[1] += this.tileTo[1] < this.tileFrom[1] ? 0 - diff : diff;
      }

      this.position[0] = Math.round(this.position[0]);
      this.position[1] = Math.round(this.position[1]);
    }

    return true;

  };

  function toIndex(x, y) {
    return y * mapW + x;
  }

  window.onload = function() {
    // useEffect(() => {
    //     forceUpdate()
    // })

    ctx = document.getElementById("game").getContext("2d");
    requestAnimationFrame(drawGame);
    ctx.font = "bold 10pt sans-serif";

    window.addEventListener("keydown", function(e) {
      if (e.keyCode >= 37 && e.keyCode <= 40) {
        keysDown[e.keyCode] = true;
      }
    });
    window.addEventListener("keyup", function(e) {
      if (e.keyCode >= 37 && e.keyCode <= 40) {
        keysDown[e.keyCode] = false;
      }
    });

    viewport.screen = [
      document.getElementById("game").width,
      document.getElementById("game").height
    ];
  };

  function drawGame() {
    if (ctx == null) {
      return;
    }

    var currentFrameTime = Date.now();
    var timeElapsed = currentFrameTime - lastFrameTime;

    var sec = Math.floor(Date.now() / 1000);
    if (sec !== currentSecond) {
      currentSecond = sec;
      framesLastSecond = frameCount;
      frameCount = 1;
    } else {
      frameCount++;
    }

    if (!player.processMovement(currentFrameTime)) {
      if (
        keysDown[38] &&
        player.tileFrom[1] > 0 &&
        gameMap[toIndex(player.tileFrom[0], player.tileFrom[1] - 1)] === 1
      ) {
        player.tileTo[1] -= 1;
      } else if (
        keysDown[40] &&
        player.tileFrom[1] < mapH - 1 &&
        gameMap[toIndex(player.tileFrom[0], player.tileFrom[1] + 1)] === 1
      ) {
        player.tileTo[1] += 1;
      } else if (
        keysDown[37] &&
        player.tileFrom[0] > 0 &&
        gameMap[toIndex(player.tileFrom[0] - 1, player.tileFrom[1])] === 1
      ) {
        player.tileTo[0] -= 1;
      } else if (
        keysDown[39] &&
        player.tileFrom[0] < mapW - 1 &&
        gameMap[toIndex(player.tileFrom[0] + 1, player.tileFrom[1])] === 1
      ) {
        player.tileTo[0] += 1;
      }

      if (
        player.tileFrom[0] !== player.tileTo[0] ||
        player.tileFrom[1] !== player.tileTo[1]
      ) {
        player.timeMoved = currentFrameTime;
      }
    }

    viewport.update(
      player.position[0] + player.dimensions[0] / 2,
      player.position[1] + player.dimensions[1] / 2
    );

    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, viewport.screen[0], viewport.screen[1]);

    for (var y = viewport.startTile[1]; y <= viewport.endTile[1]; ++y) {
      for (var x = viewport.startTile[0]; x <= viewport.endTile[0]; ++x) {
        switch (gameMap[y * mapW + x]) {
          case 0:
            ctx.fillStyle = "#685b48";
            break;
          default:
            ctx.fillStyle = "#fff";
        }

        ctx.fillRect(
          viewport.offset[0] + x * tileW,
          viewport.offset[1] + y * tileH,
          tileW,
          tileH
        );
      }
    }

    ctx.fillStyle = "#fff";

    ctx.fillRect(
      viewport.offset[0] + player.position[0],
      viewport.offset[1] + player.position[1],
      player.dimensions[0],
      player.dimensions[1]
    );

    ctx.fillStyle = "#ff0000";
    ctx.fillText("FPS: " + framesLastSecond, 10, 20);

    lastFrameTime = currentFrameTime;
    requestAnimationFrame(drawGame);
  }
  return (
    <div className="mapstyle">
      <canvas id="game" width="1120px" height="450"></canvas>
      <img id="img" src={avatar} width={'2%'} height={'auto'} style={{position: 'absolute', left: '49%', top: 380}}/>
    </div>
  );
}

export default Maptest;