import * as React from "react";
import classNames from "classnames";

import BaseProject from "./projects/BaseProject";

export interface ProjectSidebarProps {
    project: BaseProject;
}

const headerClassName = classNames("sidebar__header");
const bodyClassName = classNames("sidebar__body");

export default class ProjectSidebar extends React.Component<ProjectSidebarProps, undefined> {
    renderLinks = () => {
        const {project} = this.props;

        const buttonStyle = {
            backgroundColor: project.colour,
            borderColor: project.colour
        };
        const buttonClass = classNames("btn", "sidebar__link");

        if (!project.url && !project.source) {
            return <></>;
        }

        return (
            <>
                <h3 className={headerClassName}>
                    Links
                </h3>
                <div className={bodyClassName}>
                    {!!project.url && <a href={project.url}
                        className={buttonClass}
                        style={buttonStyle}>
                        Visit
                    </a>}
                    {!!project.source && <a href={project.source}
                        className={buttonClass}
                        style={buttonStyle}>
                        Source
                    </a>}
                </div>
            </>
        );
    }

    render() {
        const {project} = this.props;

        return (
            <>
                <h3 className={headerClassName}>
                    App Type
                </h3>
                <p className={bodyClassName}>
                    {project.web ? "Website" : project.appType}
                </p>
                <h3 className={headerClassName}>
                    Services
                </h3>
                <p className={bodyClassName}>
                    {project.services}
                </p>
                {this.renderLinks()}
                <h3 className={headerClassName}>
                    Tools
                </h3>
                <p className={bodyClassName}>
                    {project.languages.join(", ")}
                </p>
            </>
        );
    }
}
