import React from "react"

import "./index.scss"

const MyMessage = ({message: {text, time}}) => {
    return (
        <div className="myMessage__wrapper">
            <div className="myMessage__text">
                {text}
            </div>
            <div className="myMessage__time">
                {time}
            </div>
        </div>
    )
}

export default MyMessage