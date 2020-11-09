import React from 'react';
import Portal from '../Portal/Portal';
import './Modal.scss'

const Modal = (props) => {
    return (
        <Portal>
            <div className='Modal'>
                <div className='flex-container'>
                    <div className={'modal-content' + (props.mobile ? ' mobile' : '')}>
                        {props.render ? props.render(props.children) : props.children}
                        <img className='close-modal' src='Close.png' onClick={props.close} />
                    </div>
                </div>
                <div className='blackout' />
            </div>
        </Portal>
    )
}

export default Modal;