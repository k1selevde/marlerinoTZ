import React, {useEffect, useRef, useState} from "react"
import { useHistory, useParams } from "react-router-dom"

import MyMessage from "./components/MyMessage";
import SomeoneMessage from "./components/SomeoneMessage";
import MessageInput from "./components/MessageInput";
import Popup from "./components/Popup"


import { ReactComponent as BackIcon} from "../../assets/Unionback.svg";

import "./index.scss"
import useOnClickOutside from "../../hooks/useOnClickOutside";

const data = {
    title: 'Не работает вентиляция',
    place: "Офис 2109"
}

const messages = [
    {
        text: "Здравствуйте, чем помочь?",
        time: "12.12",
    },
    {
        author: "Наталья",
        text: "Здравствуйте, чем помочь?",
        time: "12.12"
    },
    {
        author: "Наталья",
        text: "Здравствуйте, чем помочь?",
        time: "12.12"
    },
    {
        author: "Наталья",
        text: "Здравствуйте, чем помочь?",
        time: "12.12"
    },
    {
        text: "Здравствуйте, чем помочь?",
        time: "12.12"
    },
    {
        author: "Наталья",
        text: "Здравствуйте, чем помочь?",
        time: "12.12"
    },
    {
        text: "Здравствуйте, чем помочь?",
        time: "12.12"
    },
    {
        author: "Наталья",
        text: "Здравствуйте, чем помочь?",
        time: "12.12"
    },
]

const Chat = () => {
    const history = useHistory()
    const params = useParams()
    const [isOpenPopup, setOpenPopup] = useState(true)
    const ref = useRef();




    const closePopupHandler = () => {
        setOpenPopup(false)
    }


    useOnClickOutside(ref, () => {
        console.log('outsiddde')
        setOpenPopup(false)
    })

    return (
        <div className="chat__wrapper">
            <div className="chat__header chat-header">
                <div
                    className="chat-header__icon-back"
                    onClick={() => history.goBack()}
                >
                    <BackIcon />
                </div>
                <div className="chat-header__details">
                    <div className="chat-header__title">{data.title}</div>
                    <div className="chat-header__place">{data.place}</div>
                </div>
            </div>

            <div className="chat__messages-wrap">
                {messages.map( (message) => (
                    message.author
                        ? <SomeoneMessage message={message}/>
                        : <MyMessage message={message} />
                ))}
            </div>
            {isOpenPopup && (<Popup ref={ref} closeHandler={closePopupHandler} />)}
            <MessageInput />
        </div>
    )
}

export default Chat;