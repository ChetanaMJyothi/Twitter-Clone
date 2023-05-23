import React, { useState } from "react";
import {  createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "./firebase.js";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { isValidUser, userName } from './reduxTool/validSlice.js'
import './signUpPage.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import {db} from './firebase.js';
import { collection, addDoc } from "firebase/firestore";
function SignUpPage () { 
    const[emailSign, setEmail]=useState("");
    const[passwordSign, setPassword]=useState(""); 
    const[error, setError]=useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [disName, setdisName]=useState("");
    function nameHandler(e){
        setdisName(e.target.value);
    }
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
        console.log(user.auth.email); 

          dispatch(userName(emailSign));
          dispatch(isValidUser());
        

          navigate("/");
          uploadData();
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode,errorMessage);
          setError(true);
        });
    }

    async function uploadData(){
        await addDoc(collection(db, "tweetBox"),{
          email:emailSign,
          userName:disName,
        });
        
        }
    return (
            <div className='main'>
             <TwitterIcon className='twitterIcon'/> 
             <h1>Sign in to Twitter</h1>
             {error && <p className="errorMsg">"Your account is already registered , Click on login"</p>}
            <form onSubmit={SignUpHandler}>
            <input className="input" value={disName} onChange={nameHandler} type="text" placeholder="enter your name" />
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