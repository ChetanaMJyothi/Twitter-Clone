import React, { useState } from "react";
import {  createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "./firebase.js";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { isValidUser } from './reduxTool/validSlice.js'
import './signUpPage.css';
import TwitterIcon from '@mui/icons-material/Twitter';

function SignUpPage () { 
    const[emailSign, setEmail]=useState("");
    const[passwordSign, setPassword]=useState(""); 
    const[error, setError]=useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    function emailSignHandler(e){
        setEmail(e.target.value);
    }
    function passwordSignHandler(e){
        setPassword(e.target.value);
    }
    function SignUpHandler(e){
        e.preventDefault();
        createUserWithEmailAndPassword(auth, emailSign, passwordSign)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          setError(false);
          dispatch(isValidUser());
          navigate("/");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode,errorMessage);
          setError(true);
        });
    }
    return (
            <div className='main'>
             <TwitterIcon className='twitterIcon'/> 
             <h1>Sign in to Twitter</h1>
             {error && <p className="errorMsg">"Your account is already registered , Click on login"</p>}
            <form onSubmit={SignUpHandler}>
            <input className="input" value={emailSign} onChange={emailSignHandler} type="text"  placeholder="enter email" />
            <input className="input" value={passwordSign} onChange={passwordSignHandler} type="password" placeholder="enter password" />
            <button className="button">Sign Up</button>
            <div className="haveAcc">
            <p>Already have an account?</p>
            <Link to='/login' >Login</Link>
            </div>
        </form>
        </div>
    )
}
export default SignUpPage;