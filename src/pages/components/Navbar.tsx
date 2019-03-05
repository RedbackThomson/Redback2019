import * as React from "react";
import {Link, animateScroll} from "react-scroll";
import classNames from "classnames";

const logo = require("Assets/img/logo-gradient.svg");

export interface NavbarProps {
}

export interface NavbarState {
    items: {
        name: String;
        anchor: String;
        primary: boolean;
    }[];
    isHidden: boolean;
}

export default class Navbar extends React.Component<NavbarProps, NavbarState> {
    state: Readonly<NavbarState> = {
        items: [
            {
                name: "Projects",
                anchor: "projects",
                primary: true
            },
            {
                name: "Contact",
                anchor: "contact",
                primary: false
            }
        ],
        isHidden: true
    };

    hideBar = () => {
        this.setState({
            isHidden: window.scrollY < (25 * parseFloat(getComputedStyle(document.documentElement).fontSize))
        });
    }

    scrollToTop = () => {
        animateScroll.scrollToTop();
    }

    componentDidMount() {
        window.addEventListener("scroll", this.hideBar);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.hideBar);
    }

    render() {
        let {items, isHidden} = this.state;

        return (
            <ul className={classNames("rdbk-navbar",
                {"rdbk-navbar--hidden": isHidden})}>

                <li className="rdbk-navbar__item">
                    <img className="rdbk-navbar__logo" src={logo} />
                </li>

                <a className="rdbk-navbar__item rdbk-navbar__scroll" onClick={this.scrollToTop}>
                    <i className="fas fa-long-arrow-alt-up"></i>
                </a>

                {items.map((item) =>
                    <Link className={classNames("rdbk-navbar__item",
                        "rdbk-navbar__btn",
                        {"rdbk-navbar__btn--secondary": !item.primary})}
                        activeClass="rdbk-navbar__btn--active"
                        spy={true} smooth={true} to={item.anchor}
                        key={item.anchor}>
                        <li>
                            {item.name}
                        </li>
                    </Link>
                )}
            </ul>
        );
    }
}
