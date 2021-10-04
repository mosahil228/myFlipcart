import React, { Component } from "react";
import "../Home.css";
import HomeDeal from "./HomeDeal";
import HomeFsec from "./HomeFsec";
import HomeSlider from "./HomeTime";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import phone from "../homeImages/phone.jpg";
import nn from "../homeImages/nn.jpg";
import mm from "../homeImages/mm.jpg";
import zeb from "../homeImages/zeb.jpeg";
import p8 from "../homeImages/p8.jpg";
import offerphone from "../homeImages/offerphone.jpg";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import gif1 from "../homeImages/gif1.gif";
import gif2 from "../homeImages/gif2.gif";
import gif3 from "../homeImages/gif3.gif";
import uu1 from "../homeImages/uu1.jpg";
import uu2 from "../homeImages/uu2.jpg";
import uu3 from "../homeImages/uu3.jpg";
import uu4 from "../homeImages/uu4.jpg";
import uu5 from "../homeImages/uu5.jpg";
import uu7 from "../homeImages/uu7.jpg";


const SlickButtonFix = ({ currentSlide, slideCount, children, ...props }) => (
  <span {...props}>{children}</span>
);



export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: false,

      infinite: true,
      autoplay: true,
      autoplaySpeed: 4000,
      speed: 500,
      arrows: true,
      className: "sSlider",
      prevArrow: <SlickButtonFix> <ChevronLeftIcon className="sL"/> </SlickButtonFix>,
      nextArrow:<SlickButtonFix> <ChevronRightIcon className="sR"/> </SlickButtonFix>,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1060,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            arrows: false,
            dots: true
          }
        }
        
      ]
    };
    

    return (
      <>
     
        <section className="offerDesk i-bm">
          <div className="HContainer">
            <Slider {...settings}>
            <img src={gif2} alt="slideI" />
              <img src={zeb} alt="slideI" />
              <img src={gif1} alt="slideI" />
              <img src={gif3} alt="slideI" />
             
              <img src={phone} alt="slideI" />
              <img src={offerphone} alt="slideI" />
              <img src={mm} alt="slideI" />
              <img src={nn} alt="slideI" />
            </Slider>
          </div>
        </section>
        <section className="offerDesk i-bn">
          <div className="HContainer">
            <Slider {...settings}>
              <img  src={uu1} alt="slideI" />
              <img  src={uu2} alt="slideI" />
              <img  src={uu3} alt="slideI" />
              <img  src={uu4} alt="slideI" />
              <img  src={uu5} alt="slideI" />
             
              <img  src={uu7} alt="slideI" />
            </Slider>
          </div>
        </section>
        <section className="dealSection">
          <div className="dContainer">
            <HomeSlider />
            <div className=" i2">
                <img className ="pic" src={p8} alt="fgfg"/>
            </div>
            
            <HomeDeal/>
            </div>
        </section>
        <HomeFsec/>
        
      </>
    );
  }
}
