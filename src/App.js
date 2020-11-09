import logo from './logo.svg';
import './App.scss';
import Gallery from './components/Gallery/Gallery';
import Footer from './components/Footer/Footer';
import useModal from './hooks/useModal';
import Modal from './components/Modal/Modal';
import { useState, useEffect } from 'react';
import BigImage from './components/BigImage/BigImage';
import CommentForm from './components/CommentForm/CommentForm';
import Comments from './components/Comments/Comments';

function App() {

  const { open, openModal, closeModal } = useModal();
  let [isMobile, setIsMobile] = useState(document.documentElement.clientWidth < 480);

  useEffect(() => {
    setIsMobile(document.documentElement.clientWidth < 768);
  });

  let [imageInfo, setImageInfo] = useState(undefined);

  let handleImageClick = async (id, e) => {
    fetch("https://boiling-refuge-66454.herokuapp.com/images/" + id)
      .then(response => response.json())
      .then(result => {
        setImageInfo(result);
        openModal();
        document.documentElement.scrollTop = 0;
      })
  }

  let handleModalClose = () => {
    closeModal();
    setImageInfo(undefined);
  }

  let handlePostComment = async (name, commentText) => {
    let formData = new FormData();
    formData.append("name", name);
    formData.append("text", commentText);
    fetch('https://boiling-refuge-66454.herokuapp.com/images/' + imageInfo.id + '/comments', {
      method: 'POST',
      body: formData,
    })
      .then(response => alert('status: ' + response.status))
  }

  return (
    <>
      <div className="App">
        <div className="content">
          <h1>Test App</h1>
          <Gallery imagesUrl="https://boiling-refuge-66454.herokuapp.com/images" openModal={handleImageClick}/>
        </div>
        <Footer />
        {open ? (
          <Modal close={handleModalClose} mobile={isMobile}>
            {!isMobile ? 
              <div style={{display: "flex", padding: "40px"}}>
                <div style={{display: "flex", flexDirection: "column"}}>
                  <BigImage src={imageInfo.url}/>
                  <CommentForm onSubmit={handlePostComment}/>
                </div>
                <Comments comments={imageInfo.comments} empty={() => <div>No comments</div>} />
              </div>
              : 
              <div>
                <BigImage src={imageInfo.url} />
                <Comments comments={imageInfo.comments} empty={() => <div>No comments</div>} />
                <div style={{padding: "0 20px"}}>
                  <CommentForm onSubmit={handlePostComment}/>
                </div>
              </div>
            }
          </Modal>
        ) : null}
      </div>
    </>
  )
}

export default App;
