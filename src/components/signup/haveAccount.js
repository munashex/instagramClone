import React from 'react' 
import {useNavigate} from 'react-router-dom'
import './style.css'


function HaveAccount() {

  let navigate = useNavigate() 

  return (
    <div className='containerAcc'>
        <div className='loginRedirect' onClick={() => navigate("/")}> 
        <code style={{color: "black"}}>Have account?</code>
          <code className="loginlink">Log in</code>
        </div>
    </div>
  )
}

export default HaveAccount