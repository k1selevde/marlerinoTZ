import React from 'react'
import { NavLink } from "react-router-dom";

import "./index.scss"

const ApplicationItem = ({application: {place, date, title, id}}) => {
    return (
        <NavLink
            styles={{textDecoration: 'none'}}
            key={id}
            to={`/chat/${id}`}
        >
            <div className="appItem__wrapper">
                <div className="appItem__title">
                    {title}
                </div>
                <div className="appItem__details">
                    <div className="appItem__place">{place}</div>
                    <div className="appItem__date">{date}</div>
                </div>
            </div>
        </NavLink>

    )
}

export default ApplicationItem