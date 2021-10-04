import React, { Component } from "react";
import "./Home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sdata,{Sdata8} from "./Sdata";
import HomeSlider from "./smallC/HomeSlider";
import Homecc, { Homec2 } from "./Homecc";
import Alert from "./smallC/Alert";

// ...................

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 4000,
      speed: 500,
      arrows: false,
      slidesToShow: 7,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 715,
          settings: {
            slidesToShow: 8,
            slidesToScroll: 1,
            initialSlide: 0,
          },
        },
        {
          breakpoint: 630,
          settings: {
            slidesToShow: 7,
            slidesToScroll: 1,
            initialSlide: 0,
          },
        },
        {
          breakpoint: 490,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 398,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 310,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <>
       <div className="d-n">
      <Alert/>
      </div>
        <section className="itemDesk" >
          <div className="deskContainer">
            <Slider {...settings}>
              {Sdata.map((val) => {
                return <Homecc key="uniquieid9" imgsrc={val.imgsrc} sname={val.sname} />;
              })}
            </Slider>
          </div>
        </section>
        <section className="itemDesk2 ">
          <div className="deskContainer2">
            <div className="contentItems2">
              {Sdata8.map((val,id) => {
                return <Homec2 key={id} imgsrc={val.imgsrc} sname={val.sname} />;
              })}
            </div>
          </div>
        </section>
        <HomeSlider/>
      
      </>
    );
  }
}
