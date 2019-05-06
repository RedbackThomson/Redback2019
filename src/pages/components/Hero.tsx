import * as React from "react";
import classNames from "classnames";

const logo = require("Assets/img/logo-gradient.svg");

export interface HeroProps {
    children: React.ReactNode;
    inverse?: boolean;
    background?: React.CSSProperties;
}

export default class Hero extends React.Component<HeroProps, undefined> {
    render() {
        const {background, inverse} = this.props;

        return (
            <div className={classNames("hero", {
                "hero--inverse": !!inverse
            })}
                style={background ? background : null}>
                <div className="container h-100">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
