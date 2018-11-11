import * as React from "react";
import BaseProject from "./projects/BaseProject";

export interface ProjectsProps {
    projects: BaseProject[]
}

export default class Projects extends React.Component<ProjectsProps, undefined> {
    render() {
        let {projects} = this.props;

        return (
            <section className="container" id="projects">
                {projects.map((project) => 
                    <div className="row project" id={project.anchor}
                        key={project.anchor}>
                        <h1>{project.name}</h1>
                    </div>
                )}
            </section>
        );
    }
}
