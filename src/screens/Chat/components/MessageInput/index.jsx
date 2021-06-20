import React from "react"

import { ReactComponent as TopArrow} from "../../../../assets/UnionarrowTop.svg";

import "./index.scss"

const MessageInput = () => {
    return (
        <div className="messageInput__wrapper">
                <input
                    type="text"
                    className="messageInput__input"
                    placeholder="Сообщение"
                />
                <div className="messageInput__btn">
                    <TopArrow />
                </div>
        </div>
    )
}

export default MessageInput;