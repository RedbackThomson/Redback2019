import * as React from "react";
import {Link} from 'react-scroll';

export interface ContactProps {
}

export default class Contact extends React.Component<ContactProps, undefined> {
    render() {
        return (
            <section id="contact" className="contact">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <h2 className="contact__title">Let's Work Together</h2>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <p className="contact__body">Interested in collaborating on a project or even just talking about new tech?</p>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <a href="mailto:redbackthomson@gmail.com" className="contact__cta btn cta cta--white">Get in Touch</a>
                  </div>
                </div>
              </div>
            </section>
        );
    }
}
