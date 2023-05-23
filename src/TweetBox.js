import React from 'react'
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { useState } from 'react';
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import BallotOutlinedIcon from '@mui/icons-material/BallotOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import PendingActionsOutlinedIcon from '@mui/icons-material/PendingActionsOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import './TweetBox.css' 
import {db} from './firebase.js';
import { collection, addDoc } from "firebase/firestore";
import { useSelector } from 'react-redux'
import  { useEffect } from 'react';
import { query, onSnapshot } from "firebase/firestore";

function TweetBox() {
  const emailId = useSelector((state) => state.counter.emailId)
  const [tweetMsg, setTweetMsg]=useState("");
  const [userName, setuserName]=useState([]);
  const [emailStr, setEmailStr]=useState("");
  useEffect(()=>{ 
    const q = query(collection(db, "tweetBox"));
    console.log(q);
    onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if(doc.data().email===emailId){
        console.log(doc.data().email);
          setuserName(doc.data().userName);
          const emailString=doc.data().email;
          const index=emailString.indexOf("@");
          const str=emailString.substring(0,index);
          console.log(str);
          setEmailStr(str);
        }
      });    
    });   
  },[emailId]);
  function msgHandler(event){
    setTweetMsg(event.target.value);
  }
  function sendMsg(event){
    event.preventDefault();
    uploadData();
  }

  async function uploadData(){
    await addDoc(collection(db, "posts"),{
      displayName:userName,
      username:emailStr,
      verified:false,
      text:tweetMsg,
      isLiked:false,
      likeCount: 0,
      cmtCount:0,
      avatar:"https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    });
    setTweetMsg("");
        }
       
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
      <Avatar src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"></Avatar>
      <input onChange={msgHandler} value={tweetMsg} placeholder="What's hapenning?" type='text'></input> 
        </div>
        <div className="icons">
        <div className="onlyIcons">
        <PhotoOutlinedIcon></PhotoOutlinedIcon>
        <GifBoxOutlinedIcon></GifBoxOutlinedIcon>
        <BallotOutlinedIcon></BallotOutlinedIcon>
        <SentimentSatisfiedOutlinedIcon></SentimentSatisfiedOutlinedIcon>
        <PendingActionsOutlinedIcon></PendingActionsOutlinedIcon>      
        <LocationOnOutlinedIcon></LocationOnOutlinedIcon>
       </div>
        <Button onClick={sendMsg} className="tweetBox__tweetButton">Tweet</Button>
        </div>
      </form>
    </div>
  )
}

export default TweetBox
