import '../styles/LoginStyles/login.css'
import {Button} from 'react-bootstrap';
import { FcGoogle} from "react-icons/fc";
import {useNavigate} from 'react-router-dom'
import {useState} from 'react'
import {auth} from '../configs/firebase';
import {createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import HaveAccount from '../components/signup/haveAccount';

function SignUp() {

    let navigate= useNavigate() 

    const [email, setEmail] = useState("") 
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)

    
   const Register = async() =>  {
   await createUserWithEmailAndPassword(auth, email, password) 
   .then(() => {
      navigate("/")
   })
   .catch((error) => {
     setError("Email exist or wrong password")

     setTimeout(() => {
        setError("")
     }, 4000);
   })
   
   }

   const provider = new GoogleAuthProvider()

   const signUpWithGoogle = async () => {
    await signInWithPopup(auth, provider)  
    .then((result) => {
       navigate("/createuser")
    })
    .catch((err) => console.log(err))
   }

  return (
    <div className="outerContainer">
      <div className='container'>  
     <div className='loginBox'>
     <img 
        className='logo'
        alt="instagram"
        src='https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png'
     />

      {error&& <code className="error">{error}</code>}
     <div className="inputFields">
     <input type="text" className='inputs'  
        placeholder="Email" 
        onChange={(e) => setEmail(e.target.value)}
     /> 
     <input type="text" style={{marginTop: 10}} 
     className="inputs" 
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
     />
     <Button variant="primary"  disabled={password.length < 6}
     className="sm btn" onClick={Register}>Sign up</Button>
     </div>
    
    <div className="or">
     <div className="line" style={{marginLeft: 20}}></div>
     <h6>OR</h6>
     <div className="line" style={{marginRight: 23}}></div>
    </div>

    <div className="instaLogin" onClick={signUpWithGoogle}>
      <FcGoogle size={27}/>
      <h6 style={{marginLeft: 12, marginTop: 2, cursor: "pointer"}}>Sign Up In With Google</h6>
    </div>

     </div>
       
       <div className='dontHaveAcc'>
        <HaveAccount/>
       </div>
     
 
    </div>
    </div>
  )
}

export default SignUp