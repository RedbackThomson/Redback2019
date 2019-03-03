import * as React from "react";
import classNames from "classnames";
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
                    <div className={classNames("hero__title", "text-left", {
                        "hero__title--inverse": project.dark
                    })}>
                        {project.name}
                    </div>
                    <div className={classNames("hero__subtitle", "text-left", {
                        "hero__subtitle--inverse": project.dark
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
