import * as React from "react";
import BaseProject from "./BaseProject";
import classnames from "classnames";

export interface ProjectProps {
  project: BaseProject,
  right?: boolean
}

export default class Project extends React.Component<ProjectProps, undefined> {
    appBadge = (web: boolean, solid: boolean, appType?: string) =>
        <span className={classnames("project__app-badge", "badge",
            {"project__app-badge--custom": !web,
            "project__app-badge--solid": solid})}>
            {web ? "Web" : appType}
        </span>;
    

    render() {
        let {project, right} = this.props;
        // Normalize booleans
        right = !!right;

        let projectStyle = {
            background: project.backgroundColour.background
        };

        return (
            <div className={classnames("col-12")} id={`#${project.anchor}`}>

                <a className="project__link" href="#">

                    <div className={classnames("project__container")}>

                        <div className={classnames("row", "no-gutters", "project")}
                            style={projectStyle}>

                            {project.featureBackground && <div className={
                                classnames("project__feature-bg", "d-md-block",
                                    "d-none", {
                                    "project__feature-bg--right":
                                        right != !!project.featureBackgroundFlip
                                    }
                                )}>
                                <img src={String(project.featureBackground)} />
                            </div>}

                            {project.backgroundStroke && <div className="project__stroke">
                                <img src={String(project.backgroundStroke)} />
                            </div>}

                            <div className="col-md-6 col-12 project__feature">
                                <img src={String(project.feature)} />
                            </div>

                            <div className={classnames("project__description",
                                    "col-md-6", "col-sm-12", "order-first", {
                                    "order-md-last": !right,
                                    "order-first": right,
                                    "project__description--right": right,
                                    "project__description--inverse": project.dark,
                                })}>
                                <h2 className="project__name">{project.name}</h2>
                                <h3 className="project__subtitle">{project.subtitle}</h3>
                                {this.appBadge(project.web, !!project.dark, project.appType)}
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        );
    }
}
