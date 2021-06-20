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


            <div className="someoneMessage__auxiliary">
                <div className="someoneMessage__date">{time}</div>
                <div className="someoneMessage__right-icon">
                    <Right />
                </div>
            </div>

        </div>
    )
}

export default SomeoneMessage