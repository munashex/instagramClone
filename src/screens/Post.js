import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import '../styles/post/post.css'
import {useState} from 'react'
import {storage} from '../configs/firebase'
import {ref, uploadBytes} from '@firebase/storage'
import {useNavigate} from 'react-router-dom'
import {v4} from 'uuid'



function Post() {

   const navigate = useNavigate()

    const[uploadImage, setUploadImage] = useState(null) 
   
  
    const sendImage = () => {
      if(uploadImage === null) return;  
      let imageRef = ref(storage, `images/${uploadImage.name + v4()}`)
      uploadBytes(imageRef, uploadImage).then(() => {
        localStorage.setItem("image", uploadImage.name)
        navigate('/user')
      })
  
    }

    
    

  return (
    <div className='imageContainer'>
        <Form.Group controlId="formFileSm" className="imageForm">
        <Form.Label  className="imageLabel">Select Image</Form.Label>
        <Form.Control type="file" size="sm" onChange={(e) => setUploadImage(e.target.files[0])} />
      </Form.Group>
      <Button onClick={sendImage} variant="dark" className="uploadBtn">Upload</Button>
    
    </div>
  )
}

export default Post