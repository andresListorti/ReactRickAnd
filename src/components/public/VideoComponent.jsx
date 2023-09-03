import React from "react";

function VideoComponent({ video })  {
  return (
    <div>
      <p>Este es el mio</p>
      <a href={video.url}>
        <h3>{video.title}</h3>
        <p>{video.description}</p>
      </a>
    </div>
  );
};

export default VideoComponent;
