import * as React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";
import ScrollToTop from "./ScrollToTop";

export default class AppRouter extends React.Component<any, any> {
    render() {
        return (
            <Router>
                <ScrollToTop>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/:projectAlias" component={ProjectDetails} />
                    </Switch>
                </ScrollToTop>
            </Router>
        );
    }
}
