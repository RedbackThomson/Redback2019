import * as React from "react";

const logo = require("Assets/img/logo-gradient-words.svg");

export default class Footer extends React.Component<any, undefined> {
    renderSocial(type: string, link: string, icon: string) {
        return (
            <a href={link} title={type} className="footer__link" target="_new">
                <i className={icon}></i>
            </a>
        );
    }

    currentYear() {
        return ((new Date()).getFullYear());
    }

    render() {
        return (
            <section id="footer" className="footer">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-lg-4 footer__logo">
                    <img src={logo} />
                  </div>

                  <div className="col-12 col-lg-4 order-last footer__copy">
                    Copyright © RedbackThomson {this.currentYear()}. All rights reserved.
                  </div>

                  <div className="col-12 col-lg-4 order-lg-last footer__social">
                    {this.renderSocial("Github",
                    "https://github.com/RedbackThomson",
                    "fab fa-github-square")}
                    {this.renderSocial("Email",
                        "mailto:redbackthomson@gmail.com",
                        "fas fa-envelope-square")}
                    {this.renderSocial("Twitter",
                        "https://twitter.com/RedbackThomson",
                        "fab fa-twitter-square")}
                  </div>
                </div>
              </div>
            </section>
        );
    }
}
