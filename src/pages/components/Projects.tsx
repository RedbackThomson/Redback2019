import * as React from "react";
import Project from "./projects/Project";
import BaseProject from "./projects/BaseProject";
import SmallProject from "./projects/SmallProject";

export interface ProjectsProps {
    projects: BaseProject[];
}

export default class Projects extends React.Component<ProjectsProps, undefined> {
    render() {
        let {projects} = this.props;

        let largeProjects = projects.filter((proj) => !proj.small);
        let smallProjects = projects.filter((proj) => !!proj.small);

        return (
            <section className="container projects" id="projects">
                {largeProjects.map((project, i) =>
                    <div className="row no-gutters projects__row"
                        key={project.anchor}>
                        <Project project={project} right={i % 2 === 1} />
                    </div>
                )}
                <div className="row no-gutters projects__row">
                    {smallProjects.map(project => (
                        <SmallProject key={project.anchor} project={project} />
                    ))}
                </div>
            </section>
        );
    }
}
