import React from "react"

import { ReactComponent as Battery} from "../../assets/battery-status.svg";
import { ReactComponent as Wifi } from "../../assets/wifi.svg";

import "./index.scss"

const TopBillet = () => {
    return (
        <div className="topBillet__wrapper">
            <div className="topBillet__time">
                9.41
            </div>
            <div className="topBillet__block"></div>
            <div className="topBillet__tools">
                <div className="tools">
                    <div>
                        <Battery />
                    </div>
                    <div>
                        <Wifi />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBillet