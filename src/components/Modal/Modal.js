import React from 'react';

const Modal = ({type, closeModal, removeCompleted}) => {

    const insideClose = ()=>{
        closeModal();
        if(type){
            removeCompleted(true)
        }
        else {
            removeCompleted(false)
        }
    }

    return (
        <div className='modal-wrapper'>
            <div className='modal-window'>
                <h2>Remove all {type} tasks?</h2>
                <div>
                    <button className='disable-btn' onClick={()=>insideClose()}>Yes</button>
                    <button className='disable-btn' onClick={()=>closeModal()}>No</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;