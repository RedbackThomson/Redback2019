import * as React from "react";
import {Link} from 'react-scroll';

export interface HeroProps {
}

export default class Hero extends React.Component<HeroProps, undefined> {
    render() {
        return (
            <div className="container-fluid d-flex flex-column align-items-center justify-content-center hero">
                <div className="hero__overlay"></div>
                <div className="hero__username">
                    RedbackThomson
                </div>
                <div className="hero__navigation">
                    <Link to="projects" smooth={true} className="btn cta">
                        Projects
                    </Link>
                    <Link to="#" className="btn cta cta--secondary">
                        Contact
                    </Link>
                </div>
            </div>
        );
    }
}
