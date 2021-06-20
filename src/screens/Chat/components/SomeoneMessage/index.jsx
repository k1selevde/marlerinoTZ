import React from "react"

import { ReactComponent as Right} from "../../../../assets/Unionright.svg";

import "./index.scss"

const SomeoneMessage = ({message: {text, author, time}}) => {
    return (
        <div className="someoneMessage__wrapper">
            <div>
                <div className="someoneMessage__author">
                    {author}
                </div>
                <div className="someoneMessage__text">
                    {text}
                </div>
            </div>
            <div className="someoneMessage__time">{time}</div>
        </div>
    )
}

export default SomeoneMessage