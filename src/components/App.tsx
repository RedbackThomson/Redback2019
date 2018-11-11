import * as React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Projects from "./Projects";
import ProjectSelector from "./ProjectSelector";
import AllProjects from "./projects/AllProjects";

export default class App extends React.Component<any, any> {
    constructor(props) {
        super(props);

        this.state = {
            projects: AllProjects
        };
    }

    render() {
        let {projects} = this.state;

        let anchors = projects.map((project) => project.anchor);
        let thumbnails = projects.map((project) => project.thumbnail);
        return (
            <div className="app">
                <Navbar />
                <Hero />
                <Projects projects={projects} />
                {/* <ProjectSelector anchors={anchors} icons={thumbnails} /> */}
            </div>
        );
    }
}
