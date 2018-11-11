import * as React from "react";
import Scrollspy from 'react-scrollspy';

export interface ProjectSelectorProps {
  anchors: string[],
  icons: string[]
}

export default class ProjectSelector extends
    React.Component<ProjectSelectorProps, undefined> {
    render() {
        let {anchors, icons} = this.props;

        return (
            <Scrollspy items={anchors} className="selector"
                currentClassName="selector__item--current">
                {anchors.map((anchor, i) => 
                    <li className="selector__item">
                        <a href={`#${anchor}`}>
                            <img className="selector__icon" src={icons[i]} />
                        </a>
                    </li>
                )}
            </Scrollspy>
        );
    }
}
