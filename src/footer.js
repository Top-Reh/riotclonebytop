import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footerfirst'>
        <svg width="38" height="40" dataname="Layer 1" viewBox="0 0 185.47 163.51"><path class="cls-1" d="M98.77 0L0 45.74l24.61 93.66 18.73-2.3-5.15-58.89 6.15-2.74 10.62 60.2 32.01-3.93-5.69-65 6.09-2.71 11.68 66.23 32.38-3.98-6.23-71.25 6.16-2.74 12.77 72.43 32.01-3.93V19.38L98.77 0zm2.32 142.05l1.63 9.22 73.42 12.24v-30.68l-75.01 9.21-.04.01zM176.17.71V0h3.64v.71zm1.41 3.94V.4h.81v4.25zm3 0V0h.8v4.65zm2.21 0L180.73 0h.83L183 3.41 184.44 0h.84l-2.06 4.65zm1.83 0V0h.81v4.65z"></path></svg>
        <div className='thecompanies'>
            <ul>
                <li><a>PESS</a></li>
                <li><a>SECURITY</a></li>
                <li><a>LEGAL</a></li>
                <li><a>LEADERSHIP</a></li>
                <li><a>CANDIDATE PRIVACY</a></li>
                <li><a>CANDIDATE PRIVACY</a></li>
                <li><a>CANDIDATE PRIVACY</a></li>
                <li><a>TERMS OF SERVICE</a></li>
                <li><a>PRIVACY NOTICE</a></li>
                <li><a>PLAYER SUPPORT</a></li>
                <li><a>EVERIFY</a></li>
                <li><a>ACCESSICLITY</a></li>
                <li><a>ANNUAL REPORTS</a></li>
            </ul>
        </div>
        <div className='thesocialicons'>
            <i className="bi bi-twitter-x"></i>
            <i className="bi bi-instagram"></i>
            <i className="bi bi-tiktok"></i>
            <i className="bi bi-linkedin"></i>
            <i className="bi bi-facebook"></i>
            <i className="bi bi-youtube"></i>
        </div>
      </div>
      <div className='footersec'>
        <h6>Cookie Preferences</h6>
        <h6>©2024 Riot Games,Inc.All Rights Reserved.</h6>
      </div>
    </div>
  )
}

export default Footer
