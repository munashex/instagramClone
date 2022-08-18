import React from 'react' 
import {useNavigate} from 'react-router-dom'
import './style.css'


function CreateAccount() {

  let navigate = useNavigate() 

  return (
    <div className='containerAcc'>
        <div className='registerRedirect' onClick={() => navigate("/signup")}> 
        <code style={{color: "black"}}>Don't have an account?</code>
          <code className="signupRedirect">Sign up</code>
        </div>
    </div>
  )
}

export default CreateAccount