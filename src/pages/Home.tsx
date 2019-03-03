import * as React from "react";
import Hero from "./components/Hero";
import NavHero from "./components/NavHero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import AllProjects from "./components/projects/AllProjects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default class Home extends React.Component<any, any> {
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
                <Hero>
                    <NavHero />
                </Hero>
                <Projects projects={projects} />
                <Contact />
                <Footer />
            </div>
        );
    }
}
