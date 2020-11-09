import React from 'react';
import './GalleryImage.scss';


export default function GalleryImage (props) {  
  return (
    <div className="GalleryImage">
      <img src={props.src} onClick={props.openModal}></img>
    </div>
  );
};