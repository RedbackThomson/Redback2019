import * as React from "react";
import classnames from "classnames";
import BaseProject from "./projects/BaseProject";

export interface ProjectHeroBackgroundProps {
    project: BaseProject;
}

export default class ProjectHeroBackground extends React.Component<ProjectHeroBackgroundProps, undefined> {
    render() {
        const {project} = this.props;

        return (
            <>
                {project.featureBackground && <div className={
                    classnames("hero__feature-bg", "d-md-block",
                        "d-none", {
                        "hero__feature-bg--right": !!project.featureBackgroundFlip
                        }
                    )}>
                    <img src={String(project.featureBackground)} />
                </div>}

                {project.backgroundStroke && <div className="project__stroke">
                    <img src={String(project.backgroundStroke)} />
                </div>}
            </>
        );
    }
}


