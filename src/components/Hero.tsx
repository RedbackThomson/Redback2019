import * as React from "react";

export interface HeroProps {
}

export default class Hero extends React.Component<HeroProps, undefined> {
    render() {
        return (
            <div className="container-fluid d-flex flex-column align-items-center justify-content-center hero">
                <div className="hero__username">
                  RedbackThomson
                </div>
            </div>
        );
    }
}
