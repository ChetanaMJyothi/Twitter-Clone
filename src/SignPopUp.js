import React, { useState } from "react";
import ChatBubbleRoundedIcon from '@mui/icons-material/ChatBubbleRounded';
import CloseIcon from '@mui/icons-material/Close';
import './SignPopUp.css';
import {Link} from "react-router-dom";
import { useSelector } from 'react-redux'

function SignPopUp(props){
  const isUserAuth = useSelector((state) => state.counter.value)
console.log("SignPopUp");
   function closehandler(){
    console.log("Closed");
    props.onClick();
   }
    if(!isUserAuth){ 
return (
    <div className="popup">
    <CloseIcon className='close' onClick={closehandler}></CloseIcon>
    <ChatBubbleRoundedIcon className="chat"></ChatBubbleRoundedIcon>   
    <h1>Reply to join the conversation</h1>
    <p>Once you join Twitter, you can respond to non aesthetic things’s Tweet.</p>
   <Link to="login" className="link">Log in</Link>
   <Link to="Signup" className="link">Sign up</Link>
    </div>
)
    } 
}
export default SignPopUp;