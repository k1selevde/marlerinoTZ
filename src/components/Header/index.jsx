import React from "react"

import { ReactComponent as Burger} from "../../assets/Unionburger.svg";

import "./index.scss"

const Header = () => {
    return (
        <div
            className="header__wrapper"
        >
            <div
                className="header__burger"
            >
                <Burger />
            </div>
            <div className="header__welcomeBlock">
                <div className="header__avatar"></div>
                <div className="header__appeal">
                    <span className="header__welcome">Здравствуйте,</span>
                    <span className="header__name">Константин</span>
                </div>
            </div>
        </div>
    )
}

export default Header