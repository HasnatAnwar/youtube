import React from 'react'
import '../css/Shorts.css'
import logo from '../logo.svg'
import ss from '../ss.png'
import dumshort from '../dumshort.mp4';
const Shorts = () => {
    var objects = [...Array(13).keys()]
  return (
    <div className="shorts_box">
        <div className="shorts_internal_box">
        {
            objects.map(function(object,i){
                return(
                    <div className="short_item">
                    <div className="shortbox">
                        {/* <img src={dumshort} alt="" /> */}
                        <video src={dumshort} controls autoPlay>
                            video is here
                        </video>
                        <p className='video_text'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        <div className="profile_part">
                            <img src={logo} alt="" />
                            <p className='channel_name'>Femmespot</p>
                            <p className='subscription_button'>Subscribe</p>
                        </div>
                    </div>
                    <div className="sidebox">
                        <div className="side_icon">
                            <img src={logo} alt="" />
                            <p>22k</p>
                        </div>
                        <div className="side_icon">
                            <img src={logo} alt="" />
                            <p>22k</p>
                        </div>
                        <div className="side_icon">
                            <img src={logo} alt="" />
                            <p>22k</p>
                        </div>
                        <div className="side_icon">
                            <img src={logo} alt="" />
                            <p>22k</p>
                        </div>
                        <div className="side_icon">
                            <img src={logo} alt="" />
                        </div>
                        <div className="side_icon">
                            <img src={logo} alt="" />
                        </div>
    
                    </div>
                </div>
    
                )})}


        </div>
    </div>
  )
}

export default Shorts