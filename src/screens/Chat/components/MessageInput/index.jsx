import React, {useState, useCallback, useRef} from "react"

import { ReactComponent as TopArrow} from "../../../../assets/UnionarrowTop.svg";
import { ReactComponent as ClipIcon} from "../../../../assets/Unionclip.svg";
import "./index.scss"
import Popup from "../Popup";
import useOnClickOutside from "../../../../hooks/useOnClickOutside";

const MessageInput = ({onSendMessage}) => {

    const textRef = useRef()
    const popupRef = useRef();
    const [isOpenPopup, setOpenPopup] = useState(false)


    const closePopupHandler = useCallback(() => {
        setOpenPopup(false)
    })
    const openPopupHandler = useCallback(() => {
        setOpenPopup(true)
    })

    useOnClickOutside(popupRef, () => {
        console.log('outsiddde')
        setOpenPopup(false)
    })




    const sendMessageHandler = () => {
        let text = textRef.current.value;
        let time = `${new Date().getHours()}:${new Date().getMinutes()}`
        onSendMessage(text,time)
        //clear
        textRef.current.value = ""
    }

    const onKeyPress= (e) => {
        if(e.key === 'Enter'){
            let text = textRef.current.value;
            let time = `${new Date().getHours()}:${new Date().getMinutes().padStart(2, "0")}`
            onSendMessage(text,time)
            //clear
            textRef.current.value = ""
        }
    }
    return (
        <div className="messageInput__wrapper">
            {isOpenPopup && (<Popup ref={popupRef} closeHandler={closePopupHandler} />)}
            <div className="inputWrapper">
                <input
                    ref={textRef}
                    type="text"
                    className="messageInput__input"
                    placeholder="Сообщение"
                    onKeyPress={onKeyPress}
                />
                <div onClick={openPopupHandler} className="inputWrapper__icon">
                    <ClipIcon />
                </div>
            </div>

                <button className="messageInput__btn" onClick={sendMessageHandler}>
                    <TopArrow />
                </button>
        </div>
    )
}

export default MessageInput;