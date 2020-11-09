import React, { useState } from 'react';
import './CommentForm.scss'

export default function CommentForm(props) {
  let [name, setName] = useState('');
  let [commentText, setCommentText] = useState('');

  return (
    <div className="CommentForm">
      <form className="form-element">
        <input type='text' placeholder="Your name" onChange={e => setName(e.target.value)}/>
        <input type='text' placeholder="Your comment" onChange={e => setCommentText(e.target.value)}/>
        <input type='submit' value="Post comment" onClick={(e) => {
          props.onSubmit(name, commentText);
          e.preventDefault();
        }}/>
      </form>
    </div>
  )
};