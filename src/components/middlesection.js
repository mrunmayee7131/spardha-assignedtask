import React from 'react'
import './middlesection.css'

import Date1 from './date';
function Mid() {
  return (
    <div>

      <div className="container">
        <div className="left-box">
          <div className="heading1">SPARDHA 2023 <br />NEVER GIVE UP</div>
          <div className="description">Annual sports festival of IIT (BHU) under the Games and Sports Council.</div>

          <div className="button-container">

            <button className="btn1">REGISTER</button>


            <button className="btn2">MATCHES</button>

          </div>
        </div>
        <div className="right-box">
          <div className='card'>
            <div className='cdate'>{Date1()}</div>
            <div className='ctext'>Days Remaining</div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Mid;