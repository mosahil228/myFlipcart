import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'aos/dist/aos.css';

import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";


import sbag1 from "../homeImages/sbag1.jpg";
import sbag2 from "../homeImages/sbag2.jpg";
import hh1 from "../homeImages/hh1.jpg";
import hh2 from "../homeImages/hh2.jpg";
import hh3 from "../homeImages/hh3.jpg";
import hh4 from "../homeImages/hh4.jpg";
import hh5 from "../homeImages/hh5.jpg";
import hh6 from "../homeImages/hh6.jpg";
import jk1 from "../homeImages/jk1.jpg";
import jk2 from "../homeImages/jk2.jpg";
import jk3 from "../homeImages/jk3.jpg";
import jk4 from "../homeImages/jk4.jpg";
import b1 from "../homeImages/b1.jpg";
import b2 from "../homeImages/b2.jpg";
import b3 from "../homeImages/b3.jpg";
import b4 from "../homeImages/b4.jpg";
import b5 from "../homeImages/b5.jpg";
import b6 from "../homeImages/b6.jpg";
import b7 from "../homeImages/b7.jpg";
import b8 from "../homeImages/b8.jpg";
import b9 from "../homeImages/b9.jpg";
import b10 from "../homeImages/b10.jpg";
import gif1 from "../homeImages/gif1.gif";
import gif2 from "../homeImages/gif2.gif";
import HomeAos from "./HomeAos";
import BcTop  from "./BcTop";
import { Sdata2, Sdata3, Sdata4, Sdata5, Sdata6, Sdata7 } from "../Sdata";
import {Homec3,Homec4,Homec6,Homec7,Homec8,Homec9,Homec10} from "../Homecc";;

const SlickButtonFix = ({ currentSlide, slideCount, children, ...props }) => (
  <span {...props}>{children}</span>
);
export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: false,

      infinite: true,
      autoplay: false,
      autoplaySpeed: 4000,
      speed: 500,
      arrows: true,
      className: "sSlider",
      prevArrow: <SlickButtonFix> <ChevronLeftIcon className="sL"/> </SlickButtonFix>,
      nextArrow:<SlickButtonFix> <ChevronRightIcon className="sR"/> </SlickButtonFix>,
      slidesToShow: 7,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1160,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 1,
            infinite: true
            
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true
            
          }
        },
        {
          breakpoint: 690,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true
            
          }
        },
        {
          breakpoint: 570,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true
            
          }
        },
        {
          breakpoint: 350,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true
            
          }
        }
        
      ]
    };
    
    
 

    return (
      <>
      <section   className="dealSection">
          <div data-aos="fade-up" className="dContainer2">
            <Homec3 heading="Top fashion styles" />
            <div className="item i2 ">
              <Slider {...settings}>
                {Sdata2.map((val,id) => {
                  return (
                    <Homec4
                    key={id}
                      imgsrc2={val.imgsrc2}
                      d1={val.d1}
                      d2={val.d2}
                      d3={val.d3}
                    />
                  );
                })}
              </Slider>
            </div>
          </div>
        </section>
        <section className="dealSection">
          <div data-aos="fade-up" className="dContainer2">
            <Homec3 heading="Top fashion styles" />
            <div className="item i2 ">
              <Slider {...settings}>
                {Sdata3.map((val,id) => {
                  return (
                    <Homec4 key={id}
                      imgsrc2={val.imgsrc2}
                      d1={val.d1}
                      d2={val.d2}
                      d3={val.d3}
                    />
                  );
                })}
              </Slider>
            </div>
          </div>
        </section>
        <section className="dealSection">
          <div data-aos="fade-up" className="dContainer2">
            <Homec3 heading="All Over Phones" />
            <div className="item i2 ">
              <Slider {...settings}>
                {Sdata4.map((val,id) => {
                  return (
                    <Homec4 key={id}
                      imgsrc2={val.imgsrc2}
                      d1={val.d1}
                      d2={val.d2}
                      d3={val.d3}
                    />
                  );
                })}
              </Slider>
            </div>
          </div>
        </section>
        <section className="dealSection">
          <div data-aos="fade-up" className="dContainer2">
            <Homec3 heading="Get Monsoon In your Hand" />
            <div className="item i2 ">
              <Slider {...settings}>
                {Sdata5.map((val,id) => {
                  return (
                    <Homec4 key={id}
                      imgsrc2={val.imgsrc2}
                      d1={val.d1}
                      d2={val.d2}
                      d3={val.d3}
                    />
                  );
                })}
              </Slider>
            </div>
          </div>
        </section>
        <section  className="dealSection">
          <div data-aos="fade-up" className="categories flex justify-center align-items">
            <h1> Shop Top Categories</h1>
          </div>
        </section>
        <section className="dealSection">
          <div data-aos="fade-up" className="dContainer3">
            <div className="y ">
              <img src={hh1} alt="" />
            </div>
            <div className="y">
              <img src={jk1} alt="" />
            </div>
            <div className="y">
              <img src={hh2} alt="" />
            </div>
            <div className="y">
              <img src={jk2} alt="" />
            </div>
            <div className="y">
              <img src={hh3} alt="" />
            </div>
            <div className="y">
              <img src={jk3} alt="" />
            </div>
          </div>
        </section>
        <section className="dealSection">
          <div data-aos="fade-up" className="dContainer3">
            <div className="y ">
              <img src={hh4} alt="" />
            </div>
            <div className="y">
              <img src={jk4} alt="" />
            </div>
            <div className="y">
              <img src={hh5} alt="" />
            </div>
            <div className="y">
              <img src={jk3} alt="" />
            </div>
            <div className="y">
              <img src={hh6} alt="" />
            </div>
            <div className="y">
              <img src={jk4} alt="" />
            </div>
          </div>
        </section>
        <section className="dealSection">
          <div data-aos="fade-up" className="gifC">
            <img className="gif" src={gif1} alt="gif" />
          </div>
        </section>
        <section className="dealSection">
          <div  data-aos="fade-up" className="gifC">
            <img className="gif" src={gif2} alt="gif" />
          </div>
        </section>
        <section className="dealSection">
          <div data-aos="fade-up" className="categories flex justify-center align-items">
            <h1> Search By brand</h1>
          </div>
        </section>
        <section className="dealSection">
          <div data-aos="fade-up" className="dContainer4">
            <div className="brand1 brand">
              <img src={b1} alt="brand" />
            </div>
            <div className="brand2 brand">
              <img src={b2} alt="brand" />
            </div>
            <div className="brand3 brand">
              <img src={b3} alt="brand" />
            </div>
            <div className="brand4 brand">
              <img src={b4} alt="brand" />
            </div>
            <div className="brand5 brand">
              <img src={b5} alt="brand" />
            </div>
            <div className="brand6 brand">
              <img src={b6} alt="brand" />
            </div>
          </div>
          <div className="brandS">
            <div data-aos="fade-up" className="brandM ">
              <img src={b7} alt="brand" />
            </div>
            <div className="brandM ">
              <img src={b8} alt="brand" />
            </div>
            <div className="brandM ">
              <img src={b9} alt="brand" />
            </div>
            <div className="brandM ">
              <img src={b10} alt="brand" />
            </div>
          </div>
        </section>
        {/* <section  className="dealSection">
          <div className="categories flex justify-center align-items">
            <h1> --Beautiful Gallery Section--</h1>
          </div>
        </section> */}
        <HomeAos/>
        <section className="dealSection">
          <div data-aos="fade-up" className="dContainer5">
            <div className="gd1">
              <Slider {...settings}>
                {Sdata6.map((val,id) => {
                  return (
                    <Homec4 key={id}
                      imgsrc2={val.imgsrc2}
                      d1={val.d1}
                      d2={val.d2}
                      d3={val.d3}
                    />
                  );
                })}
              </Slider>
            </div>
            <Homec6  />
            <Homec7 />
            <Homec8 />
            <div data-aos="slide-left" className="gd5">
              
              <Homec10 
                imgsrc={sbag1}
              />
              <Homec10 
                imgsrc={sbag2}
              />

            
            </div>
            <Homec9 />
            <div data-aos="fade-up"className="gd7">
              <Slider {...settings}>
                {Sdata7.map((val,id) => {
                  return (
                    <Homec4 key={id}
                      imgsrc2={val.imgsrc2}
                      d1={val.d1}
                      d2={val.d2}
                      d3={val.d3}
                    />
                  );
                })}
              </Slider>
            </div>
          </div>
        </section>
        <section className="signS">
        <div data-aos="slide-right"className="signBtn">
        <p>See Personalized Recomendation</p>
        <NavLink className="nvB" to="/login">Sign in</NavLink>
        <h4>New Customer? &nbsp; <span><NavLink className="nvB2" to="/" >Start here.</NavLink></span></h4>

        </div>

        </section>
        <BcTop/>
        
      
        </>
    );
  }
}
