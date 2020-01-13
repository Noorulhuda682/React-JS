import React,{Component,useState} from 'react';
import {Modal,Button} from 'react-bootstrap';
import style from './style.css'


const modal = () => {
  
  function  Example(){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const copy = (e) => { console.log(e.target.innerHTML,e.timeStamp); }
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
        <p onCopy={copy}>copied a clipboard</p>
        <Modal show={show} onHide={handleClose}  centered>
        <div>
          <div className="modal-block">
            <p className="msg">Etes vous sur que "  Nom " " Prenon " ne s'est pas presente au travail le "Date" ?  </p>
            <div className="btns-block">
                <button className="btn-left" onClick={handleClose}>
                    Non
                </button>
                <button className="btn-right" onClick={handleClose}>
                    Qui
                </button>
            </div>
          </div> 
        </div> 
        </Modal>
      </>
    );
  }

   
    return (
        <Example/>
    );
}

export default modal;
