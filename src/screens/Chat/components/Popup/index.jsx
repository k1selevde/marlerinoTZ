import React from "react"

import useOnClickOutside from "../../../../hooks/useOnClickOutside";

import { ReactComponent as Close} from "../../../../assets/Unionclose.svg";

import { ReactComponent as CameraIcon } from "../../../../assets/Subtractcamera.svg";
import { ReactComponent as DialogIcon } from "../../../../assets/Subtractdialog.svg";

import "./index.scss"


const popupItems = [
    {
        title: "Фото или видео",
        item: <CameraIcon />
    },
    {
        title: "Заявку",
        item: <DialogIcon />
    }
]

const PopupItem = ({children, text}) => {
    return (
        <div className="popupItem">
            <div>{text}</div>
            <div>
                {children}
            </div>
        </div>
    )
}



const Popup = ({ref, closeHandler}) => {


    return (
        <div  className="popup">
            <div
                ref={ref}
                className="popup__wrapper"
            >
                <div className="popup__header">
                    <h3 className="popup__title">Прикрепить</h3>
                    <div className="popup__close" onClick={closeHandler}>
                        <Close />
                    </div>
                </div>

                <div className="popup__btns">
                    {popupItems.map(({item, title}) => (
                        <PopupItem text={title}>
                            {item}
                        </PopupItem>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Popup;