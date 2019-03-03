import * as React from "react";
import {Link} from "react-scroll";

const logo = require("Assets/img/logo-gradient.svg");

export interface HeroProps {
    children: React.ReactNode;
}

export default class Hero extends React.Component<HeroProps, undefined> {
    render() {
        return (
            <div className="hero">
                <div className="container h-100">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
