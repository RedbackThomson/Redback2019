import * as React from "react";
import classnames from "classnames";
import BaseProject from "./projects/BaseProject";

export interface ProjectHeroProps {
    project: BaseProject;
}

export default class ProjectHero extends React.Component<ProjectHeroProps, undefined> {
    render() {
        const {project} = this.props;

        return (
            <div className="row h-100">
                <div className="col-lg-8 d-flex flex-column justify-content-center">
                    <div className={classnames("hero__title", "text-left", {
                        "hero__title--inverse": project.dark
                    })}>
                        {project.name}
                    </div>
                    <div className={classnames("hero__subtitle", "text-left", {
                        "hero__subtitle--inverse": project.dark || project.darkSubtitle
                    })}>
                        {project.subtitle}
                    </div>
                </div>
                <div className="col-lg-4 d-flex flex-column justify-content-center">

                </div>
            </div>
        );
    }
}
