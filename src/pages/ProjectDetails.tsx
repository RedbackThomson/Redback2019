import * as React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import AllProjects from "./components/projects/AllProjects";
import Footer from "./components/Footer";

export default class App extends React.Component<any, any> {
    constructor(props) {
        super(props);

        this.state = {
            projects: AllProjects
        };
    }

    render() {
        let {projects} = this.state;

        return (
        <div className="app">
            <Navbar />
            <Hero />
            <Footer />
        </div>
        );
    }
}
