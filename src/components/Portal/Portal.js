import {useEffect} from 'react';
import ReactDOM from 'react-dom';


export default function Portal(props) {

  let modalRoot = document.getElementById('modal-root');

  if (!modalRoot) {
    modalRoot = document.createElement('div');
    modalRoot.setAttribute('id', 'modal-root');
    document.body.appendChild(modalRoot);
  }

  const modalElement = document.createElement('div');

  useEffect(() => {
    modalRoot.appendChild(modalElement);
    return (() => modalRoot.removeChild(modalElement))
  })

  return (
    ReactDOM.createPortal(
    props.children,
    modalElement
  ));
};
