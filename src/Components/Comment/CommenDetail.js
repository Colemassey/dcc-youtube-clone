import React from 'react';

const CommentDetail = (props)=>{
    return (
<div className="comment">
        <div className="content">
          <a href="/" className="author">
            {props.author}
          </a>
          <div className="metadata">
            <span className="date">
              {props.posted}
            </span>
          </div>
          <div className="text">
            {props.text}
          </div>
        </div>
      </div>
    );
};

export default CommentDetail;