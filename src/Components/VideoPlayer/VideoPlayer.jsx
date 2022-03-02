import React from "react";
import { Card } from 'react-bootstrap';
import YoutubeEmbed from "./YoutubeEmbed";
import Comment from "../Comment/Comment";
import DisplayComment from "../CommentList/CommentList";



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
    <Card.Title>Create Comment</Card.Title>
    <Comment searchVideoID={props.searchVideoID} />
    <Card.Title>DIsplayComment</Card.Title>
    <DisplayComment searchVideoID={props.searchVideoID} />
    <Card.Title>Like/Dislike</Card.Title>
    </Card.Body>
</Card>
    </div>
  );
  }

export default VideoPlayer;
