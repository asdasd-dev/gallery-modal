import React, {useState, useEffect} from 'react';
import './Gallery.scss'
import GalleryImage from '../GalleryImage/GalleryImage'

export default function Gallery(props) {

  let [fetchStatus, setFetchStatus] = useState({images: [], isLoaded: false});
  let [error, setError] = useState(undefined);

  useEffect(() => {
    if (!fetchStatus.isLoaded) {
      fetch(props.imagesUrl)
        .then(response => response.json())
        .then(result => {
          setFetchStatus({images: result, isLoaded: true});
        }
          , error => setError(error));
    }
  });
  

  return (
    <div className="Gallery">
      {
        !fetchStatus.isLoaded ? <p>Loading...</p> :
        error ? <p>{error.message}</p> :
        fetchStatus.images.map(image => <GalleryImage key={image.id} src={image.url} openModal={props.openModal.bind(null, image.id)}/>)
      }
    </div>
  );
};