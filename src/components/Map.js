import React from "react";
import Maptest from './Maptest'


function Map(props) {
  return (
    <div className="map">
      <Maptest room={props.room} setRoom={props.setRoom} />
    </div>
  );
}

export default Map;