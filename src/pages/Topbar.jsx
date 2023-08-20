import React from 'react'
import logo from '../logo.svg'
import '../css/Topbar.css'
import youtubeicons from '../icons/youtubeicons.png'
import youtubeicon from '../icons/youtubeicon.png'
import videoplus from '../icons/videoplus.png'
import noti from '../icons/noti.png'
import mic from '../icons/mic.png'


const Topbar = () => {
  return (
    <div className='topbar'>
      <div className='basic_icon_box'>
        <img className='menu_icon' src={youtubeicons} alt="" />
        <img className='youtube_icon' src={youtubeicon} alt="" />
      </div>
      <div className='search_bar_box'>
        <div className="search_bar">
          <input type="search" name="" id="" className='search_tab' placeholder='Search' />
          <img src={logo} alt="" className="search_icon" />
        </div>
        <img className='mice_icon' src={mic} alt="" />
      </div>
      <div className="profile_icon_box">
        <img className='plus_video_icon' src={videoplus} alt="" />
        <img className='noti_icon' src={noti} alt="" />
        <img src={logo} alt="" className="profile_icon" />
      </div>
    </div>
  )
}

export default Topbar