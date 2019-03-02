import * as React from "react";
import {render} from "react-dom";
import {AppContainer} from "react-hot-loader";
import Favicon from "react-favicon";
import ReactGA from "react-ga";

import Home from "./pages/Home";

import "Assets/scss/App.scss";

const rootEl = document.getElementById("root");
const favicon = require("Assets/img/favicon.png");

ReactGA.initialize("UA-50560855-5");

render(
    <AppContainer>
        <>
            <Favicon url={favicon} />
            <Home/>
        </>
    </AppContainer>,
    rootEl
);

// Hot Module Replacement API
declare let module: { hot: any };

if (module.hot) {
    module.hot.accept("./components/Home", () => {
        render(
            <AppContainer>
                <>
                    <Favicon url={favicon} />
                    <Home/>
                </>
            </AppContainer>,
            rootEl
        );
    });
}
