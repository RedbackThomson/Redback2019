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
                    <p className="contact__body">Lorem ipsum here.</p>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <p className="contact__cta btn cta cta--white">Get in Touch</p>
                  </div>
                </div>
              </div>
            </section>
        );
    }
}
