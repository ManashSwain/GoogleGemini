import React, { useState } from 'react';
import './sidebar.css';
import '../../assets/assets';
import { assets } from '../../assets/assets';

const sidebar = () => {

    const [extended,setExtended] = useState(false);
  return (
    <>
    <div className='sidebar'>
      <div className="sidebar-top">
        <img src={assets.menu_icon} className='menu-icon' alt="menu-icon" onClick={()=>setExtended(prev=>!prev)} />
        <div className="new-chart">
            <img src={assets.plus_icon} alt="plus-icon" />
            { extended ? <p>New chat</p> : null}
        </div>
        <div className="recent-container">
            <p>Recent</p>
            <div className="recent-history">
                <img src={assets.message_icon} alt="message-icon" />
                {extended ? <p>What is React ?</p> : null}
            </div>
        </div>
      </div>
      <div className="sidebar-bottom">
          <div className="sidebar-bottom-icons">
            <img src={assets.question_icon} alt="question-icon" />
            { extended ? <p>Help</p> : null}
          </div> 
          <div className="sidebar-bottom-icons">
            <img src={assets.history_icon} alt="history-icon" />
            {extended ? <p>Activity</p> : null}
          </div> 
          <div className="sidebar-bottom-icons">
            <img src={assets.setting_icon} alt="settings-icon" />
            {extended ? <p>Settings</p> : null}
          </div>  
          { extended ? <div className="sidebar-bottom-icons">
            <img src={assets.gemini_icon} alt="settings-icon" />
            <p>Upgrade to Gemini Advanced</p>
          </div> : null } 
      </div>
    </div>

    
    </>
  )
}

export default sidebar
