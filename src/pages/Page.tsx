import * as React from "react";
import {Helmet} from "react-helmet";

export interface PageState {
    title: string;
    themeColor: string;
}

export default class Page<P, S extends PageState> extends React.Component<P, S> {
    render() {
        return (
            <Helmet>
                <title>{this.state.title}</title>
                <meta name="theme-color" content={this.state.themeColor} />
            </Helmet>
        );
    }
}