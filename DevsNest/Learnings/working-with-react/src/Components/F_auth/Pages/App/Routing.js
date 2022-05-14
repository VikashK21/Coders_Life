import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import React from 'react'
import Home from "../Home";
import Signup from "../Signup"
import Login from "../Login";


function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
            </Switch>
        </Router>

    )
}

export default Routes;