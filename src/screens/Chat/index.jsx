import React, {useEffect, useRef, useState, useCallback} from "react"
import { useHistory, useParams } from "react-router-dom"


import {chats} from "../../store/data"

import MyMessage from "./components/MyMessage";
import SomeoneMessage from "./components/SomeoneMessage";
import MessageInput from "./components/MessageInput";



import { ReactComponent as BackIcon} from "../../assets/Unionback.svg";

import "./index.scss"




const Chat = () => {
    const history = useHistory()
    const params = useParams()

    const currentChat = chats.find((ch) => ch.id === params.id)


    const [messages, setMessages] = useState(currentChat.messages)


    const messagesRef = useRef()

    const onSendMessage = (text, time) => {
        let new_message = {text, time }
        setMessages((prev) => [...prev, new_message])
    }



    useEffect(() => {
        messagesRef.current.scrollTo(0, 99999);
    }, [messages]);

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
                    <div className="chat-header__title">{currentChat.title}</div>
                    <div className="chat-header__place">{currentChat.place}</div>
                </div>
            </div>

            <div className="chat__messages-wrap" ref={messagesRef}>
                {messages.map( (message) => (
                    message.author
                        ? <SomeoneMessage message={message}/>
                        : <MyMessage message={message} />
                ))}
            </div>
            <MessageInput onSendMessage={onSendMessage}/>
        </div>
    )
}

export default Chat;