import * as React from "react";
import Scrollspy from 'react-scrollspy';
import {Link, animateScroll} from 'react-scroll';
import classNames from 'classnames';

export interface NavbarProps {
}

export default class Navbar extends React.Component<NavbarProps, any> {
    constructor(props) {
        super(props);

        this.state = {
            items: [
                {
                    name: 'Projects',
                    anchor: 'projects',
                    primary: true
                },
                {
                    name: 'Contact',
                    anchor: 'contact',
                    primary: false
                }
            ],
            isHidden: true
        };
    }

    hideBar = () => {
        const {isHidden} = this.state;

        this.setState({
            isHidden: window.scrollY < (screen.height - 150)
        });
    }

    scrollToTop = () => {
        animateScroll.scrollToTop();
    }

    componentDidMount() {
        window.addEventListener('scroll', this.hideBar);
    }

    componentWillUnmount() {
        window.addEventListener('scroll', this.hideBar);
    }

    render() {
        let {items, isHidden} = this.state;

        let anchors = items.map((item) => item.anchor);
        return (
            <ul className={classNames("rdbk-navbar",
                {"rdbk-navbar--hidden": isHidden})}>

                <a className="rdbk-navbar__item rdbk-navbar__scroll" onClick={this.scrollToTop}>
                    <i className="fas fa-long-arrow-alt-up"></i>
                </a>

                {items.map((item) => 
                    <Link className={classNames("rdbk-navbar__item",
                        "rdbk-navbar__btn"
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
