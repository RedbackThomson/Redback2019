import * as React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import AllProjects from "./components/projects/AllProjects";
import Footer from "./components/Footer";
import BaseProject from "./components/projects/BaseProject";
import ProjectHero from "./components/ProjectHero";
import HeroNav from "./components/HeroNav";

export interface ProjectDetailsProps {
    match: {
        params: {
            projectAlias: String
        }
    };
}

export interface ProjectDetailsState {
    project: BaseProject;
}

export default class ProjectDetails extends React.Component<ProjectDetailsProps, ProjectDetailsState> {
    constructor(props) {
        super(props);

        this.state = {
            project: AllProjects.find(project => project.anchor ===
                props.match.params.projectAlias)
        };
    }

    render() {
        let {project} = this.state;

        return (
            <div className="app">
                <Navbar />
                <Hero inverse={project.dark} background={project.backgroundColour}>
                    <div className="d-flex flex-column h-100">
                        <HeroNav inverse={project.dark} />
                        <ProjectHero project={project} />
                    </div>
                </Hero>
                <Footer />
            </div>
        );
    }
}
