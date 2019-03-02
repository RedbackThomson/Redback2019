import * as React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";

export default class AppRouter extends React.Component<any, any> {

    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/:projectAlias" component={ProjectDetails} />
                </Switch>
            </Router>
        );
    }
}
