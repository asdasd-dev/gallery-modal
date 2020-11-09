import React from 'react';
import './Comments.scss'

export default function Comments(props) {
  return (
    <div className='Comments'>
      {props.comments.length ? 
        props.comments.map(comment => {
        let datetime = new Date(comment.date);
        return (
          <div className="comment" key={comment.id}>
            <p className="comment-date">{datetime.getDate()}.{datetime.getMonth() + 1}.{datetime.getFullYear()}</p>
            <p className="comment-text">{comment.text}</p>
          </div>
        );
        })
        :
        props.empty()
      }
    </div>
  );
};