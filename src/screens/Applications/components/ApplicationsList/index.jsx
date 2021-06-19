import React, { useState } from "react"

import ApplicationItem from "../ApplicationItem";

import "./index.scss"

const ApplicationsList = () => {
    const [applications, setApplications] = useState([
        {
            title: "Не работает вентиляция",
            place: "Офис 2109",
            date: "21.02.2021 12:19",
            id: '213'
        },
        {
            title: "Сломалась кнопка на входе",
            place: "Офис 2109",
            date: "21.02.2021 12:19",
            id: '1213'
        },
        {
            title: "Надо заменить розетку",
            place: "Офис 2109",
            date: "21.02.2021 12:19",
            id: '12'
        },
        {
            title: "Не работает интернет",
            place: "Офис 2109",
            date: "21.02.2021 12:19",
            id: '3'
        },
    ]);

    return (
        <div className="appList__items">
            {applications.map((app) => (
                <ApplicationItem application={app} />
            ))}
        </div>
    )
}

export default ApplicationsList