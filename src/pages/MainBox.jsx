import React from 'react';
import '../css/MainBox.css';
import dumpic from '../dumpic.jpg';
import logo from '../logo.svg';

const MainBox = () => {
  var objects = [...Array(13).keys()]
  
  return (
    <div className="box">
      <div className='internal_box'>
        {
          objects.map(function (object, i) {
            return (
              <div className="video_item">
                <div className="video_box">
                  <a href="/youtube/play">
                    <img className='video_thumbnail' src={dumpic} alt="" />
                  </a>
                  <p className='video_duration'>17:00</p>
                </div>
                <div className="video_detail">
                  <div className="logo_icon">
                    <img src={logo} alt="" />
                  </div>
                  <div className='text_box'>
                    <p className='video_name'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    <p className='video_channelname'>Lorem, ipsum.</p>
                    <div className="video_time_views">
                      <p className='video_views'><span>1.1M</span> views</p>
                      <p className='video_time'><span>2 years</span>ago</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default MainBox
