import React,{forwardRef, useState} from 'react'
import { Avatar } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import RepeatIcon from '@mui/icons-material/Repeat';
import PublishIcon from '@mui/icons-material/Publish';
import PollOutlinedIcon from '@mui/icons-material/PollOutlined';
import './Post.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FormDialog from './FormDialog';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { useSelector } from 'react-redux'
import SignPopUp from './SignPopUp.js';

const Post = forwardRef((props,ref)=>

  { 
  const isUserAuth = useSelector((state) => state.counter.value)
    const [liked, setLiked]=useState(false);
    const [noLike, setNoLike] = useState(props.likeCount);
    const [cmtCount, setCmtCount] = useState(props.cmtCount);
    const [dialog, setDialog] = useState(false);
    const [open, setOpen]=useState(false);
    
    function commentHandler(){
      if(isUserAuth){
      setDialog(true); 
      } 
      else{
        setOpen(!open);
      }
    }
    function cmtCountHandler(){
      setCmtCount((prevCount)=>{
        return prevCount+1})
      setDialog(false); 

    }
    function likeHandler(e){
      if(isUserAuth){
      setLiked(!liked);
      console.log(liked);
      if(!liked){
      setNoLike((prevCount)=>{
        return prevCount+1
      })
    }
    else{
      setNoLike((prevCount)=>{
        return prevCount-1
      })
    }
    }
    else{
      setOpen(!open);
    }
  }
  function openHandler(){
    setOpen(!open);
  }
 
  return (
    <div className='post' ref={ref}>
      {open && <SignPopUp onClick={openHandler} ></SignPopUp>}

      <div className='post__avatar'>
       <Avatar src={props.avatar} alt=""></Avatar>
    </div>
    <div className='post__body'>
      <div className="post__header">
        <div className="post__headerText">
          <h3>
            {props.displayName} <span className="post__headerSpecial">
             {props.verified && <VerifiedIcon className="post__badge"></VerifiedIcon>}
            @{props.username}
            </span>
          </h3>
        </div>
        <div className="post__headerDescription">
          <p>{props.text}</p>
        </div>
      </div>
      <div className='post__footer'>
      <ChatBubbleIcon fontSize="small" onClick={commentHandler} className='chatIcon'/>
      <p className='countLike'>{cmtCount>0 ? cmtCount : "" }</p>
      <RepeatIcon fontSize="small" />
      <FavoriteIcon onClick={likeHandler} fontSize="small" className={props.isLiked ? 'favBarActive' : liked ? 'favBarActive' : 'favBar'}/>
      <p className='countLike'>{noLike>0 ? noLike : "" }</p>
      <PollOutlinedIcon></PollOutlinedIcon>
      <PublishIcon fontSize="small" />
      </div> 
    </div>
    {dialog && <FormDialog onOpen={cmtCountHandler} value={props.username}></FormDialog>}
    </div>
  )
  }
)
export default Post;
