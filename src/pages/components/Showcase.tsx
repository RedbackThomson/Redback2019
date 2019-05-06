import * as React from "react";
import Swiper from "react-id-swiper";
import { Pagination, Navigation } from "swiper/dist/js/swiper.esm";

export interface ShowcaseProps {
    images: HTMLImageElement[];
    colour: string;
}


export default class Showcase extends React.Component<ShowcaseProps, undefined> {
    getChevronColour = () => ({
        color: this.props.colour,
    })

    renderNextButton = () => {
        const chevronColour = this.getChevronColour();

        return (
            <div className="showcase__nav showcase__nav--next">
                <i className="fas fa-chevron-right" style={chevronColour}></i>
            </div>
        );
    }

    renderPrevButton = () => {
        const chevronColour = this.getChevronColour();

        return (
            <div className="showcase__nav showcase__nav--prev">
                <i className="fas fa-chevron-left" style={chevronColour}></i>
            </div>
        );
    }

    render() {
        const {images} = this.props;

        const params = {
            modules: [Navigation],
            slidesPerView: "auto",
            spaceBetween: 20,
            centeredSlides: true,
            grabCursor: true,
            rtl: "rtl",
            navigation: {
                nextEl: ".showcase__nav--next",
                prevEl: ".showcase__nav--prev"
            },
          };

          return(
            <div className="showcase">
                <div className="container showcase__nav-container">
                    {this.renderNextButton()}
                    {this.renderPrevButton()}
                </div>
                <Swiper {...params}>
                    {images.map(image => (
                        <div key={image.name} className="showcase__img-container">
                            <img src={String(image)} className="showcase__img" />
                        </div>
                    ))}
                </Swiper>
            </div>
          );
    }
}
