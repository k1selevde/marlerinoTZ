import React from "react"
import { useHistory } from "react-router-dom"


import { ReactComponent as BackIcon} from "../../assets/Unionback.svg";

const Chat = () => {
    const history = useHistory()


    return (
        <div className="chat__wrapper">
            <div
                className="chat__icon-back"
                onClick={() => history.goBack()}
            >
                <BackIcon />
            </div>
            Chat page
        </div>
    )
}

export default Chat;