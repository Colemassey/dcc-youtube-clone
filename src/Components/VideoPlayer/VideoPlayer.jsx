import React from "react";
import YoutubeEmbed from "./YoutubeEmbed";
import HomePage from "../HomePage/HomePage";

function VideoPlayer() {
  return (
    <div className="App">
      <h1>Youtube Embed</h1>
      <YoutubeEmbed embedId={searchVideoID} />
    </div>
  );
}
export default VideoPlayer;
