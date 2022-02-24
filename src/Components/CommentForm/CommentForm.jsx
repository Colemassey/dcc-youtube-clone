import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {Form, Button} from 'react-bootstrap';


const CommentForm = (props) => {

    const [comment, setComment] = useState('');

    const handleSubmit = (event) =>{
        event.preventDefault();
          let comments = {
          comment: comment
        }

        props.loginUser(comments)
    }

    return (
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formUsername">
          <Form.Label>{ user.username }</Form.Label>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicComment">
          <Form.Control type="text" placeholder="Add a comment" onChange={(event) => setComment(event.target.value)}/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Cancel
        </Button>
        <Button variant="primary" type="submit">
          Reply
        </Button>
      </Form>
    );
}
 
export default CommentForm;