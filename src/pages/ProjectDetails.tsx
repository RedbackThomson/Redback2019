import * as React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import AllProjects from "./components/projects/AllProjects";
import Footer from "./components/Footer";
import BaseProject from "./components/projects/BaseProject";
import ProjectHero from "./components/ProjectHero";
import HeroNav from "./components/HeroNav";
import ProjectHeroBackground from "./components/ProjectHeroBackgound";
import ProjectSidebar from "./components/ProjectSidebar";

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

const getMatchingProject = (props: ProjectDetailsProps) =>
    AllProjects.find(project => project.anchor
        === props.match.params.projectAlias);

export default class ProjectDetails extends React.Component<ProjectDetailsProps, ProjectDetailsState> {
    state: Readonly<ProjectDetailsState> = {
        project: getMatchingProject(this.props)
    };

    render() {
        let {project} = this.state;

        return (
            <div className="app">
                <Navbar />
                <Hero inverse={project.dark} background={project.backgroundColour}>
                    <ProjectHeroBackground project={project} />
                    <div className="d-flex flex-column h-100">
                        <HeroNav inverse={project.dark} />
                        <ProjectHero project={project} />
                    </div>
                </Hero>

                <div className="container">
                    <div className="row">
                        <div className="col col-lg-4">
                            <ProjectSidebar project={project} />
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        );
    }
}
