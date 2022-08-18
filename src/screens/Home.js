import React, {useState} from 'react'
import { BsPlusSquare} from 'react-icons/bs'
import { AiOutlineHeart} from 'react-icons/ai'
import { TbSend } from 'react-icons/tb'
import { MdOutlineGridOn } from 'react-icons/md'
import {AiOutlinePlusCircle} from 'react-icons/ai'
import '../styles/home/home.css'
import Modal from 'react-bootstrap/Modal';
import {useNavigate} from 'react-router-dom'
import Image from './Image'


function Home() {

  let navigate= useNavigate()

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true) 
  const handleClose = () => setShow(false);

  return (
    <div className='UserContainer'>
      <div className="userHeader">
       <img 
       className="imgLog"
       alt="instagram"
       src='https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png'/>
    
       <div className='headerIcons'>
       <BsPlusSquare size={27} className="icon" onClick={handleShow}/> 
       <AiOutlineHeart size={27} className="icon"/> 
       <TbSend size={27} className="icon"/>
       </div>
      </div>

      <div className="modal">
      <Modal show={show} onHide={handleClose} size="sm" className="modal">
      <Modal.Title className="post" onClick={() => navigate('/post')}>Post 
      <MdOutlineGridOn className="realIcon" style={{marginLeft: 15}} size={22}/></Modal.Title>

      <Modal.Title className="story" onClick={() => navigate('/story')}>Story  
      <AiOutlinePlusCircle className="realIcon" size={22}/></Modal.Title>
       </Modal>
      </div>
      
      <Image/>
    </div>
  )
}


export default Home