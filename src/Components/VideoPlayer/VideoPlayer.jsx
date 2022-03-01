import React from "react";
import { Card } from 'react-bootstrap';
import YoutubeEmbed from "./YoutubeEmbed";



function VideoPlayer(props) {
  return (
    <div className="App">
   <Card style={{ width: '72rem' }}>
   <Card.Header>Youtube Playa</Card.Header>
<Card.Title>Press the button Playa</Card.Title>
{/* Iframe is in the Youtubeembed component */}
<YoutubeEmbed embedId={props.searchVideoID} /> 
  <Card.Body>
    <Card.Title>Video Title goes here</Card.Title>
    <Card.Text>
      Youtube video description goes here
    </Card.Text>
    </Card.Body>
</Card>
    </div>
  );
  }

export default VideoPlayer;
