import * as React from "react";
import classNames from "classnames";
import {Link} from "react-router-dom";

const logo = require("Assets/img/logo-gradient.svg");

export interface HeroNavProps {
    inverse?: boolean;
}

export default class HeroNav extends React.Component<HeroNavProps, undefined> {
    render() {
        const {inverse} = this.props;

        return (
            <Link to="/" className="hero-nav__link">
                <div className="hero-nav__container">
                    <div className="hero-nav__row row">
                        <div className="col d-flex flex-row justify-content-center justify-content-md-start align-items-center">
                            <img src={logo} className="hero-nav__logo" />
                            <div className={classNames("hero-nav__username", {
                                "hero-nav__username--inverse": !!inverse
                            })}>
                                RedbackThomson
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        );
    }
}
