import * as React from "react";

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
                    <a href="#" className="btn hero__cta">
                        See Projects
                    </a>
                    <a href="#" className="btn hero__cta hero__cta--secondary">
                        Contact
                    </a>
                </div>
            </div>
        );
    }
}
