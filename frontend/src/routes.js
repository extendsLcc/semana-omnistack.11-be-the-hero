import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Logon from './view/pages/Logon'
import Register from './view/pages/Register'
import Profile from "./view/pages/Profile";
import NewIncident from "./view/pages/NewIncident";

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon}/>
                <Route path="/register" component={Register} />
                <Route path="/profile" component={Profile} />
                <Route path="/incidents/new" component={NewIncident} />
            </Switch>
        </BrowserRouter>
    )
}