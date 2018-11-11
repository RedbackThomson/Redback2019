import * as React from "react";
import classnames from "classnames";
import Project from "./projects/Project";
import BaseProject from "./projects/BaseProject";

export interface ProjectsProps {
    projects: BaseProject[]
}

export default class Projects extends React.Component<ProjectsProps, undefined> {
    render() {
        let {projects} = this.props;

        let largeProjects = projects.filter((proj) => !proj.small);
        let smallProjects = projects.filter((proj) => !!proj.small);

        return (
            <section className="container projects" id="projects">
                {largeProjects.map((project, i) => 
                    <div className="row projects__row">
                        <Project project={project} right={i%2 == 1} />
                    </div>
                )}
                {/* <div className="row projects__row">
                    {smallProjects.map((project, i) => 
                        <Project project={project} small />
                    )}
                </div> */}
            </section>
        );
    }
}
