import * as React from "react";

const logo = require("./../assets/img/logo.svg");

export default class Footer extends React.Component<undefined, undefined> {
    renderSocial(type: string, link: string, icon: string) {
        return (
            <a href={link} title={type} className="footer__link">
                <i className={icon}></i>
            </a>
        );
    }

    currentYear() {
        return ((new Date()).getFullYear);
    }

    render() {
        return (
            <section id="footer" className="footer">
              <div className="container">
                <div className="row">
                  <div className="col footer__logo">
                    <img src={logo} />
                  </div>

                  <div className="col footer__social">
                    Copyright &copy; RedbackThomson {this.currentYear()}. All rights reserved.
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
