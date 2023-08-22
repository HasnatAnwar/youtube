import React from 'react'
import '../css/Sidebar.css';
import logo from '../logo.svg'
import home from '../icons/home.png'
import shorts from '../icons/shorts.png'
import subs from '../icons/subs.png'
import watch from '../icons/watch.png'
import your from '../icons/your.png'
import history from '../icons/history.png'
import clips from '../icons/clips.png'
import library from '../icons/library.png'
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className='uper_tabs'>
        <a className='tab_elem' href="/youtube/">
          <img src={home} alt="" className="tab_icon" />
          <p className="tab_text">Home</p>
        </a>
        <a className='tab_elem' href="/youtube/shorts">
          <img src={shorts} alt="" className="tab_icon" />
          <p className="tab_text">Shorts</p>
        </a>
        <a className='tab_elem' href="/youtube/subscription">
          <img src={subs} alt="" className="tab_icon" />
          <p className="tab_text">Subscription</p>
        </a>
      </div>
      <div className='sidebar_line'>
      </div>
      <div className='uper_tabs'>
        <a className='tab_elem' href="">
          <img src={library} alt="" className="tab_icon" />
          <p className="tab_text">Library</p>
        </a>
        <a className='tab_elem' href="">
          <img src={history} alt="" className="tab_icon" />
          <p className="tab_text">History</p>
        </a>
        <a className='tab_elem' href="">
          <img src={your} alt="" className="tab_icon" />
          <p className="tab_text">Your Videos</p>
        </a>
        <a className='tab_elem' href="">
          <img src={watch} alt="" className="tab_icon" />
          <p className="tab_text">Watch later</p>
        </a>
        <a className='tab_elem' href="">
          <img src={clips} alt="" className="tab_icon" />
          <p className="tab_text">Your Clips</p>
        </a>
        <a className='tab_elem' href="">
          <img src={logo} alt="" className="tab_icon" />
          <p className="tab_text">Show more</p>
        </a>
      </div>
      <div className='sidebar_line'>
      </div>
      <div className='uper_tabs'>
        <p className="subscription_text">
          Subscription
        </p>
        <a className='tab_elem' href="">
          <img src={logo} alt="" className="tab_icon" />
          <p className="tab_text">Lorem, ipsum.</p>
          <img className='subscription_icon' src={logo} alt="" />
        </a>
        <a className='tab_elem' href="">
          <img src={logo} alt="" className="tab_icon" />
          <p className="tab_text">Lorem, ipsum.</p>
          <img className='subscription_icon' src={logo} alt="" />
        </a>
        <a className='tab_elem' href="">
          <img src={logo} alt="" className="tab_icon" />
          <p className="tab_text">Lorem, ipsum.</p>
          <img className='subscription_icon' src={logo} alt="" />
        </a>
        <a className='tab_elem' href="">
          <img src={logo} alt="" className="tab_icon" />
          <p className="tab_text">Lorem, ipsum.</p>
          <img className='subscription_icon' src={logo} alt="" />
        </a>
    </div>
    </div>
  )
}

export default Sidebar
