import * as React from "react";
import {Link} from "react-router-dom";

const logo = require("Assets/img/logo-gradient.svg");

export default class HeroNav extends React.Component<any, undefined> {
    render() {
        return (
            <Link to="/" className="hero-nav__link">
                <div className="hero-nav__container">
                    <div className="hero-nav__row row">
                        <div className="col d-flex flex-row justify-content-center justify-content-md-start align-items-center">
                            <img src={logo} className="hero-nav__logo" />
                            <div className="hero-nav__username">
                                RedbackThomson
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        );
    }
}