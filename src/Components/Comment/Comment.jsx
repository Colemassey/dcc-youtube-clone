import axios from 'axios';
import React, {useState} from 'react';


const Comment = (props) => {
        const [user, setUser] = useState('')
        const [comment, setComment] = useState('')
        function handleSubmit(event) {
            event.preventDefault();
            let newComment = {
                name: user,
                comment: comment,
                reaction: 'neutral'
            };
            props.addNewPostProperty(newComment)
            setUser('')
            setComment('')
        }
        async function CreateComment(){
            let response = await axios.post('http://127.0.0.1:8000/api/comments/')
            console.log(response)
            if(response.status === 201){
                setComment()
        }
    }
        return (
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label>Name:</label>
                    <input required type='text' className="form-control" value={user} onChange={(event) => setUser(event.target.value)} />
                <label>Post:</label>
                    <input required type='text' className="form-control" value={comment} onChange={(event) => setComment(event.target.value)} />
                    <button type='submit' className="btn btn-primary" style={{'marginTop': '1em'}}>Post</button>
                </div>
            </form>
        );
    }
export default Comment;