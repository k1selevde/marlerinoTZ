import React, { useState } from "react"

import { chats } from "../../../../store/data";

import ApplicationItem from "../ApplicationItem";



import "./index.scss"

const ApplicationsList = () => {
    const [applications, setApplications] = useState(chats);

    return (
        <div className="appList__items">
            {applications.map((app) => (
                <ApplicationItem application={app} />
            ))}
        </div>
    )
}

export default ApplicationsList