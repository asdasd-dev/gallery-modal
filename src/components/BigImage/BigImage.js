import React from 'react';
import './BigImage.scss'

export default function BigImage(props) {
  return (
    <div className="BigImage">
      <img src={props.src}></img>
    </div>
  );
};