import React from "react";
import { Card } from 'react-bootstrap';
import YoutubeEmbed from "./YoutubeEmbed";



function VideoPlayer(props) {
  // console.log(props.searchVideoID)
  // console.log(props.videoTitle)
  return (
    <div className="App">
   <Card style={{ width: '100rem' }}>
{/* Iframe is in the Youtubeembed component */}
<YoutubeEmbed embedId={props.searchVideoID} /> 
  <Card.Body>
    <Card.Title>{props.videoTitle}</Card.Title>
    <Card.Text>
     {props.videoDescription}
    </Card.Text>
    {/* <Comment /> */}
    </Card.Body>
</Card>
    </div>
  );
  }

export default VideoPlayer;
