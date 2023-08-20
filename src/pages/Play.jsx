import React from 'react';
import '../css/Play.css';
import logo from '../logo.svg';
import video from '../video.mp4';
import dumpic from '../dumpic.jpg';

const Play = () => {
    var objects = [...Array(13).keys()]
    return (
        <div className='play_box'>
            <div className="left_box">
                <div className="video_box">
                    <video src={video} controls >
                        some video
                    </video>
                </div>
                <div className="video_details">
                    <p className="video_title">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui delectus quis
                        doloribus nihil, sint odit, exercitationem eligendi illo, quisquam iure omnis. Aut, perspiciatis suscipit!
                    </p>
                    <div className="sub_details">
                        <img className='channels_logo' src={logo} alt="" />
                        <div className="channel_name">
                            <div>
                                <p>Lorem, ipsum dolor.</p>
                                <img src={logo} alt="" />
                            </div>
                            <p>Subscribe</p>
                        </div>
                        <div className="subscribed">
                            <img src={logo} alt="" />
                            <p>Subscribed</p>
                            <img src={logo} alt="" />
                        </div>
                        <div className='like'>
                            <img src={logo} alt="" />
                            <p>741</p>
                            <img src={logo} alt="" />
                        </div>
                        <div className='share'>
                            <img src={logo} alt="" />
                            <p>Share</p>
                        </div>
                        <div className='download'>
                            <img src={logo} alt="" />
                            <p>Download</p>
                        </div>
                        <div className='download'>
                            <img src={logo} alt="" />
                        </div>
                    </div>
                    <div className='video_desc'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Illo ducimus ex qui dolores perspiciatis, placeat, deleniti distinctio tempore aspernatur modi in. Placeat ex autem natus quos dicta vitae consequatur sapiente sint architecto nesciunt excepturi eveniet, soluta illo. Porro aliquid sed incidunt eaque vitae libero officia accusantium, assumenda corrupti minus exercitationem deserunt sunt commodi corporis sequi dolorum! Aliquam dolor exercitationem obcaecati autem fuga nihil debitis,<br />
                        neque nulla reprehenderit rem odit ex.
                    </div>
                </div>
                <div className="video_comment_box">
                    <div className='video_comment_num'>
                        <p>29 Comments</p>
                        <div>
                            <img src={logo} alt="" />
                            <p>Sort by</p>
                        </div>
                    </div>
                    <div className="profile_icon">
                        <img src={logo} alt="" />
                        <input type="text" name="" placeholder='Add a Comment' id="" />
                    </div>
                    <div className="video_comments">
                        {
                            objects.map(function (object, i) {
                                return (
                                    <div className='video_comment_item'>
                                        <div className="profile">
                                            <img src={logo} alt="" />
                                        </div>
                                        <div className="text">
                                            <h5>Yousaf Siddiqui <span> 1 hour ago</span></h5>
                                            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Facilis ipsum voluptas id est, sunt eaque exercitationem
                                                blanditiis ad dicta repellat officiis soluta pariatur iusto
                                                aut enim, quas iste! Veniam at quam ipsa! Unde cumque aut facilis
                                                cum voluptate amet enim ipsa mollitia necessitatibus possimus.❤️❤️❤️❤️❤️❤️</h6>
                                            <div>
                                                <img src={logo} alt="" />
                                                <p>2</p>
                                                <img src={logo} alt="" />
                                                <p>Reply</p>
                                            </div>
                                        </div>
                                    </div>

                                )
                            })}
                    </div>
                </div>
            </div>
            <div className='right_box'>
                <div className="toptags">
                    <p>All</p>
                    {
                        objects.map(function (object, i) {
                            return (
                                <p>Home</p>
                            )
                        })
                    }
                </div>
                <div className="bottom_videos">
                    {
                        objects.map(function (object, i) {
                            return (
                                <div className="video_item">
                                    <a href="/play">
                                    <img src={dumpic} alt="" />
                                    </a>
                                    <div>
                                        <h4>Lorem ipsum dolor sit
                                            amet consectetur adipisicing elit.
                                        </h4>
                                        <h6>Lorem, ipsum dolor.</h6>
                                        <h6>3M views <span>2 hours ago</span></h6>
                                    </div>
                                </div>

                            )
                        })}
                </div>
            </div>
        </div>
    )
}

export default Play