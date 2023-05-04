import React from 'react'
import './Widgets.css';
import SearchIcon from '@mui/icons-material/Search';

import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
}from "react-twitter-embed";
function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchicon"/>
        <input placeholder='Search Twitter' type="text"/>
      </div>
      <div className='widgets__widgetContainer'>
        <h2>Whats Hapenning</h2>
        <TwitterTweetEmbed tweetId={"1650383234511908865"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="imVkohli"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://facebook.com/cleverprogrammer"}
          options={{ text: "#reactjs is awesome", via: "cleverqazi" }}
        />
      </div>
    </div>
  )
}

export default Widgets;
