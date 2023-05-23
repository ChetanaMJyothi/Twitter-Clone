import React, { useEffect } from 'react';
import './Feed.css';
import TweetBox from './TweetBox.js';
import Post from './Post.js';
import {useState} from 'react';
import {db} from './firebase.js';
import { collection, query, onSnapshot } from "firebase/firestore";
import FlipMove from 'react-flip-move';
import { useSelector } from 'react-redux'
function Feed() {
  const isUserAuth = useSelector((state) => state.counter.value)
  const [posts, setPosts]=useState([]);
   useEffect(()=>{  
    const q = query(collection(db, "posts"));
    console.log(q);
    onSnapshot(q, (querySnapshot) => {
      setPosts([]);
      querySnapshot.forEach((doc) => {
        setPosts((prevObj)=>
        [...prevObj,doc.data()]
        )
        console.log(doc.data());
      });    
    });   
  },[]) 
console.log(posts);
  return (
    <div className="feed">
     {/*  Header */}
    <div className="feed__header">
      <h2>Home</h2>
      <div className="feed_column">
      <div className="for_you">
      <h3>For you</h3>
      <div></div>
      </div>
      <h3>Following</h3>
      </div>
    </div>
     {/*  Tweet Box */}
   {isUserAuth && <TweetBox />}
    <FlipMove>
     {posts.map(post=>{
      console.log(post.cmtCount)
      return(
      <Post
    key={post.text}
    displayName={post.displayName}
    username={post.username}
    verified={post.verified}
    text={post.text}
    avatar={post.avatar}
    likeCount={post.likeCount}
    isLiked={post.isLiked}
    cmtCount={post.cmtCount}>
   
    </Post> 
     )   
    }
    )} 
    </FlipMove>
    </div>
  )
}

export default Feed
