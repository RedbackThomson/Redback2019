import * as React from "react";
import Hero from "./components/Hero";
import MainHero from "./components/MainHero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import AllProjects from "./components/projects/AllProjects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BaseProject from "./components/projects/BaseProject";

export interface HomeState {
    projects: BaseProject[];
}

export default class Home extends React.Component<any, HomeState> {
    state: Readonly<HomeState> = {
        projects: AllProjects
    };

    render() {
        let {projects} = this.state;

        return (
            <div className="app d-flex flex-column h-100">
                <div className="flex-shrink-0">
                    <Navbar />
                    <Hero>
                        <MainHero />
                    </Hero>
                    <Projects projects={projects} />
                    <Contact />
                </div>
                <Footer />
            </div>
        );
    }
}
