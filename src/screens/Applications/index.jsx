import React from "react"

import ApplicationsList from "./components/ApplicationsList"

import Header from "../../components/Header"

import "./index.scss"

const Applications = () => {

    return (
        <div className="applications__wrapper">
            <Header/>
            <ApplicationsList />
        </div>
    )
}

export default Applications