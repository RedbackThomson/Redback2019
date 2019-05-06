import * as React from "react";
import classNames from "classnames";

import BaseProject from "./projects/BaseProject";

export interface ProjectDescriptionProps {
    project: BaseProject;
}


export default class ProjectDescription extends React.Component<ProjectDescriptionProps, undefined> {
    render() {
        const {project} = this.props;

        return (
            <>
                <p className="description__body">
                    {project.body}
                </p>
            </>
        );
    }
}
