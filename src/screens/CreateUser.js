import React, {useState} from 'react'
import {Button} from 'react-bootstrap';
import {db} from '../configs/firebase'
import {collection, addDoc} from 'firebase/firestore'
import '../styles/createuser/styles.css'
import {useNavigate} from 'react-router-dom'

function CreateUser() {


  let navigate = useNavigate()

const [newName, setName] = useState('') 
const [newUserName, setUsername] = useState('')



const usersCollectionRef = collection(db, "users")


const addUser = async () => {

  await addDoc(usersCollectionRef, {name: newName, username: newUserName})
  .then(() => {
    navigate('/user')
  })
  .catch((error) => {
     alert(error)
  })
}



  return (
    <div className='createUserContainer'>
        <div className='createBox'>
        
        <img 
        className='createLogo'
        alt="instagram"
        src='https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png'
     />

     <div className="createFields">
       <input className='createInputs' placeholder="Name" 
        onChange={(e) => setName(e.target.value)}
       /> 
       <input 
       onChange={(e) => setUsername(e.target.value)} 
       type="text" style={{marginTop: 10}}
       placeholder="Username"
        className="createInputs"  />

      <Button 
       className="createBtn" onClick={addUser}
       disabled={newName.length < 2 || newUserName < 2}
       >Submit</Button>
     </div>
     
        </div>
    </div>
  )
}

export default CreateUser