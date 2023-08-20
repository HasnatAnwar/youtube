import React from 'react'
import ss from '../dumpic.jpg'
import logo from '../logo.svg'
import '../css/Subs.css'
const Subs = () => {
    var objects = [...Array(20).keys()]
    return (
    <div className='subs_box'>
        {
            objects.map(function(object,i){
                return(
                    <div className="video_item">
                    <div className="video_box">
                      <a href="/play">
                      <img className='video_thumbnail' src={ss} alt=""/>
                      </a>
                      <p className='video_duration'>17:00</p>
                    </div>
                    <div className="video_detail">
                      <div className='text_box'>
                        <p className='video_name'>Lorem ipsum dolor sit amet consectetur, adipisicing.</p>
                        <p className='video_channelname'>FemmeSpot</p>
                        <div className="video_time_views">
                          <p className='video_views'><span>1.1M</span> views</p>
                          <p className='video_time'><span>2 years</span> ago</p>
                        </div>
                      </div>
                    </div>
                  </div>          
                )
            })
        }

    </div>
  )
}

export default Subs
