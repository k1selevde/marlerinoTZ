import React from "react"
import { Switch, Route } from "react-router-dom"

import Applications from "./screens/Applications";
import Chat from "./screens/Chat"

import TopBillet from "./components/TopBillet";

import "./App.scss"

function App() {
  return (
    <div className="wrapper">
        <div className="window-wrap">
            <div
                className="window"
            >
                <TopBillet />
                <div className="content">
                    <Switch>
                        <Route path="/" exact component={Applications} />
                        <Route path="/chat/:id" component={Chat} />
                    </Switch>
                </div>

                <div className="bottom-billet"></div>
            </div>
        </div>
    </div>
  );
}

export default App;
