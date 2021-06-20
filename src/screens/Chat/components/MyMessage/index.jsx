import React from "react"

import "./index.scss"

const MyMessage = ({message: {text, author, time}}) => {
    return (
        <div className="myMessage__wrapper">
            <div className="myMessage__author">
                {author}
            </div>
            <div className="myMessage__text">
                {text}
            </div>
        </div>
    )
}

export default MyMessage