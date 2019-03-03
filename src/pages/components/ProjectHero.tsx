import * as React from "react";
import BaseProject from "./projects/BaseProject";

export interface ProjectHeroProps {
    project: BaseProject;
};

export default class ProjectHero extends React.Component<ProjectHeroProps, undefined> {
    render() {
        const {project} = this.props;

        return (
            <div className="row h-100">
                <div className="col-lg-8 d-flex flex-column justify-content-center">
                    <img src={project.thumbnail} className="hero__logo" />
                    <div className="hero__username text-center">
                        {project.name}
                    </div>
                </div>
                <div className="col-lg-4 d-flex flex-column justify-content-center">

                </div>
            </div>
        );
    }
}
