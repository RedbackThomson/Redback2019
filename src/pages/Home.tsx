import * as React from "react";
import Hero from "./components/Hero";
import MainHero from "./components/MainHero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import AllProjects from "./components/projects/AllProjects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BaseProject from "./components/projects/BaseProject";
import Page, { PageState } from "./Page";

export interface HomeState extends PageState {
    projects: BaseProject[];
}

export default class Home extends Page<any, HomeState> {
    state: Readonly<HomeState> = {
        projects: AllProjects,
        title: "RedbackThomson",
        themeColor: "#3b343b"
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
                {super.render()}
            </div>
        );
    }
}
