import React from 'react'
import '../css/SubsHead.css'
import logo from '../logo.svg'
const SubsHead = () => {
  return (
    <div className='subs_head'>
        <p >Today</p>
        <p >Manage</p>
        <img  src={logo} alt="" />
        <img src={logo} alt="" />
    </div>
  )
}

export default SubsHead