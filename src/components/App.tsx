import * as React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";

export interface AppProps {
}

export default class App extends React.Component<AppProps, undefined> {
    render() {
        return (
            <div className="app">
                {/* <Navbar /> */}
                <Hero />
            </div>
        );
    }
}
