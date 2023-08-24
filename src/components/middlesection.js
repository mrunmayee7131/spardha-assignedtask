import React from 'react'
import './middlesection.css'


function App() {
  return (
    <div>
     
      <div className="container">
        <div className="left-box">
          <h1 className="heading1"><strong><b><i>SPARDHA 2023<br />NEVER GIVE UP</i></b></strong></h1>
          <p className="description">Annual sports festival of IIT (BHU) under the Games and Sports Council.</p>

          <div className="button-container">
            <div className="button1">
              <button type="button" className="btn btn-danger btn-lg">REGISTER</button>
            </div>
            <div className="button2">
              <button type="button"className="btn btn-outline-light btn-lg">MATCHES</button>
            </div>
          </div>
        </div>
        <div className="right-box">
          <div className="card-wrapper">
            <div className="card">
              <div className="card-body">
                <div><h1 className="days"><strong><i>12</i></strong></h1></div>
                <p className="card-text">Days Remaining</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App