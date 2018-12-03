import * as React from "react";
import BaseProject from "./BaseProject";
import classnames from "classnames";

export interface SmallProjectProps {
	project: BaseProject,
}

export default class SmallProject extends React.Component<SmallProjectProps, undefined> {
		appBadge = (web: boolean, solid: boolean, appType?: string) =>
            <span className={classnames("project__app-badge", "badge",
                {"project__app-badge--custom": !web,
                "project__app-badge--solid": solid})}>
                {web ? "Web" : appType}
            </span>;
		

		render() {
				let {project} = this.props;
				let projectStyle = {
                    background: project.backgroundColour.background
				};

				return (
                    <div className={classnames("col-md-6", "col-lg-4",
                        "project__col--small")} id={`#${project.anchor}`}>

                        {/* <a className="project__link" href="#"> */}

                            <div className={classnames("project__container", 
                                "project__container--small")}>

                                <div className={classnames("d-flex", "flex-column", "project",
                                    "project--small")} style={projectStyle}>

                                    {project.featureBackground && <div
                                        className="project__feature-bg">
                                        <img src={String(project.featureBackground)} />
                                    </div>}

                                    {project.backgroundStroke && <div className="project__stroke">
                                        <img src={String(project.backgroundStroke)} />
                                    </div>}

                                    <div className="project__feature">
                                        <img src={String(project.feature)} />
                                    </div>

                                    <div className={classnames("project__description", 
                                            "order-first", "project__description--small", {
                                            "project__description--inverse": project.dark,
                                        })}>
                                        <h2 className="project__name">{project.name}</h2>
                                        <h3 className="project__subtitle">{project.subtitle}</h3>
                                        {this.appBadge(project.web, !!project.dark, project.appType)}
                                    </div>
                                </div>
                            </div>
                        {/* </a> */}
                    </div>
				);
		}
}
