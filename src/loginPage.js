import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "./firebase.js";
import {Link} from "react-router-dom";
import './loginPage.css';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { isValidUser } from './reduxTool/validSlice.js'
import TwitterIcon from '@mui/icons-material/Twitter';

function LoginPage () {
    const[error, setError]=useState(false);
    const[email, setEmail]=useState("");
    const[password, setPassword]=useState(""); 
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function emailHandler(e){
        setEmail(e.target.value);
    }
    function passwordHandler(e){
        setPassword(e.target.value);
    }
    function submitHandler(e){
        e.preventDefault();
        console.log(email, password);
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    console.log(userCredential);
    const user = userCredential.user;
    console.log(user);
    setError(false);
    dispatch(isValidUser());
    navigate("/");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage)
    setError(true);
  });
        setEmail("");
        setPassword("");
    } 
 
 return (
    <div className='main'>
     <TwitterIcon className='twitterIcon'/> 
        <h1>Sign in to Twitter</h1>
        {error && <p className="errorMsg">"Wrong Email and Password"</p>}
        <form onSubmit={submitHandler}>
            <input className="input" value={email} onChange={emailHandler} type="text"  placeholder="enter email" />
            <input className="input" value={password} onChange={passwordHandler} type="password" placeholder="enter password" />
            <button className="button">Login</button>
        </form>
        <div className="haveAcc">
       <p>New User? click on </p>
       <Link to='/Signup'>Sign Up</Link>
       </div>
    </div>
 )}


export default LoginPage;