import * as React from "react";
import classNames from "classnames";

import BaseProject from "./projects/BaseProject";

export interface ProjectSidebarProps {
    project: BaseProject;
}

interface SidebarButtonProps {
    children: React.ReactNode;
    colour: string;
    url: string;
}

interface SidebarButtonState {
    hovered: boolean;
}

const headerClassName = classNames("sidebar__header");
const bodyClassName = classNames("sidebar__body");

class SidebarButton extends React.Component<any, SidebarButtonState> {
    state: Readonly<SidebarButtonState> = {
        hovered: false
    };

    render() {
        const buttonClass = classNames("btn", "sidebar__link");
        const {colour, url, children} = this.props;
        const {hovered} = this.state;

        const hoveredStyle = {
            borderColor: colour,
            backgroundColor: colour,
        };

        const unhoveredStyle = {
            borderColor: colour,
            color: colour
        };

        return (
            <a href={url}
                className={buttonClass}
                style={!!hovered ? hoveredStyle : unhoveredStyle}
                onMouseEnter={() => this.setState({hovered: true})}
                onMouseLeave={() => this.setState({hovered: false})}>
                {children}
            </a>
        );
    };
};

export default class ProjectSidebar extends React.Component<ProjectSidebarProps, undefined> {
    renderLinks = () => {
        const {project} = this.props;

        if (!project.url && !project.source) {
            return <></>;
        }

        return (
            <>
                <h3 className={headerClassName}>
                    Links
                </h3>
                <div className={bodyClassName}>
                    {!!project.url && <SidebarButton colour={project.colour}
                        url={project.url}>
                        Visit
                        </SidebarButton>
                    }
                    {!!project.source && <SidebarButton colour={project.colour}
                        url={project.source}>
                        Source
                        </SidebarButton>
                    }
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
