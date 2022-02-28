import React from "react";
import { Card } from 'react-bootstrap';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import YoutubeEmbed from "./YoutubeEmbed";

function VideoPlayer() {
  return (
    <div className="App">
   <Card style={{ width: '72rem' }}>
   <Card.Header>Youtube Playa</Card.Header>
<Card.Title>Press the button Playa</Card.Title>
<YoutubeEmbed embedId="rokGy0huYEA" />
  <Card.Body>
    <Card.Title>Video Title goes here</Card.Title>
    <Card.Text>
      Youtube video description goes here
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Video Reccomendation goes here</ListGroupItem>
    <ListGroupItem>Video Reccomendation goes here</ListGroupItem>
    <ListGroupItem>Video Reccomendation goes here</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="#">Links if we want</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
    </div>
  );
}
export default VideoPlayer;
