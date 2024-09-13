import React from 'react'
import "./Voice.css"

function Voice() {
  return (
    <>
    <div className="voice-container-main">
        <div className="sub-component">
            <div className="voice-playcomp">
                <span><i class="fa-solid fa-microphone"></i></span>
                <span>Click Here For Speak</span>
            </div>
            <div className="voice-submit-comp">
                <div className="voice-submit-btn1"><button class="button-80">Submit</button></div>
                <div className="voice-submit-btn2">Print</div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Voice