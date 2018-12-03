import * as React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Projects from "./Projects";
import AllProjects from "./projects/AllProjects";
import Contact from "./Contact";
import Footer from "./Footer";

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
                <Projects projects={projects} />
                <Contact />
                <Footer />
            </div>
        );
    }
}
