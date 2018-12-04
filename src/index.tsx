import * as React from "react";
import {render} from "react-dom";
import {AppContainer} from "react-hot-loader";
import Favicon from "react-favicon";
import ReactGA from "react-ga";

import App from "./components/App";

import "./assets/scss/App.scss";

const rootEl = document.getElementById("root");
const favicon = require("./assets/img/favicon.png");

ReactGA.initialize('UA-50560855-5');

render(
    <AppContainer>
        <>
            <Favicon url={favicon} />
            <App/>
        </>
    </AppContainer>,
    rootEl
);

// Hot Module Replacement API
declare let module: { hot: any };

if (module.hot) {
    module.hot.accept("./components/App", () => {
        render(
            <AppContainer>
                <>
                    <Favicon url={favicon} />
                    <App/>
                </>
            </AppContainer>,
            rootEl
        );
    });
}
