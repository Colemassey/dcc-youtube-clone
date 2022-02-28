import React from "react";
import YoutubeEmbed from "./YoutubeEmbed";

function VideoPlayer() {
  return (
    <div className="App">
      <h1>Youtube Embed</h1>
      <YoutubeEmbed embedId={setSearchVideoID} />
    </div>
  );
}
export default VideoPlayer;
