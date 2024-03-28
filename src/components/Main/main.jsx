import React from 'react';
import './main.css'
import { assets } from '../../assets/assets';

const main = () => {
  return (
    <>
    <div className="main">
        <div className="navbar">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="user-icon" />
        </div>
        <div className="main-container">
            <div className="greetings">
                <p><span>Hello, People.</span></p>
                <p>How can i help you today?</p>
            </div>
            <div className="cards">
                <div className="card-container">
                    <p>Suggest beautiful places to see on an upcoming road trip</p>
                    <img src={assets.compass_icon} alt="compass-icon" />
                </div>
                <div className="card-container">
                    <p>Breifly summarize this concept : urban planning</p>
                    <img src={assets.bulb_icon} alt="bulb-icon" />
                </div>
                <div className="card-container">
                    <p>Brainstrom team bonding activities for our work retreat</p>
                    <img src={assets.message_icon} alt="message-icon" />
                </div>
                <div className="card-container">
                    <p>Improve the readability of the following code</p>
                    <img src={assets.code_icon} alt="code-icon" />
                </div>
            </div>
            <div className="main-bottom">
              <div className="search-box">
                <input type="text"  placeholder='Enter a prompt here'/>
                <div>
                    <img src={assets.gallery_icon} alt="gallery_icon" />
                    <img src={assets.mic_icon} alt="mic_icon" />
                    <img src={assets.send_icon} alt="send_icon" />
                </div>
              </div>
              <p className="footer">
            Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
            </p>
            </div>
        </div>
    </div> 
    </>
  )
}

export default main
