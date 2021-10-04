import React, { Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ibag from "../homeImages/ibags.jpeg";
import ihand from "../homeImages/ihand.jpeg";
import ianmi from "../homeImages/ianmi.jpeg";
import ihome from "../homeImages/ihome.jpeg";
import igas from "../homeImages/igas.jpeg";
import ikall from "../homeImages/ikallphone.jpeg";
import istools from "../homeImages/istools.jpeg";
import itool from "../homeImages/itool.jpeg";
const SlickButtonFix = ({ currentSlide, slideCount, children, ...props }) => (
  <span {...props}>{children}</span>
);
export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,

      arrows: true,
      className: "sSlider",
      prevArrow: <SlickButtonFix> <ChevronLeftIcon className="sL"/> </SlickButtonFix>,
        nextArrow:<SlickButtonFix> <ChevronRightIcon className="sR"/> </SlickButtonFix>,
      slidesToShow: 6,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1260,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true
            
          }
        },
        {
          breakpoint: 1075,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true
            
          }
        },
        {
          breakpoint: 650,
          settings: {
            slidesToShow: 3,
           
           
      
          
            slidesToScroll: 1,
            infinite: true
            
          }
        },
        {
          breakpoint: 550,
          settings: {
            slidesToShow: 2,
           
           
      
          
            slidesToScroll: 1,
            infinite: true
            
          }
        },
        {
          breakpoint: 360,
          settings: {
            slidesToShow: 3,
           
           
      
          
            slidesToScroll: 1,
            infinite: true,
            arrows:true
            
          }
        }
        
      ]
    };

    return (
      <>
        <div className="item i3">
         <Slider {...settings}>
            <div>
              <div className="dC">
                <img src={ibag} alt="dealimage" />
                <div className="d1">spy bags</div>
                <div className="d2">flat &#8377; 120 off</div>
                <div className="d3">best deal bags</div>
              </div>
            </div>
            <div>
              <div className="dC">
                <img src={ikall} alt="dealimage" />
                <div className="d1">I kall Mobiles</div>
                <div className="d2">flat &#8377; 100 off</div>
                <div className="d3" >Mobile and More</div>
              </div>
            </div>
            <div>
              <div className="dC">
                <img src={igas} alt="dealimage" />
                <div className="d1">home Gas</div>
                <div className="d2">flat &#8377; 190 off</div>
                <div className="d3">All Home items</div>
              </div>
            </div>
            <div>
              <div className="dC">
                <img src={ianmi} alt="dealimage" />
                <div className="d1">Fashion design</div>
                <div className="d2">flat &#8377; 90 off + gift</div>
                <div className="d3">Best Fashion deal</div>
              </div>
            </div>
            <div>
              <div className="dC">
                <img src={ihome} alt="dealimage" />
                <div className="d1">Best ever items</div>
                <div className="d2">flat &#8377; 90 off + gift</div>
                <div className="d3">Home items</div>
              </div>
            </div>
            <div>
              <div className="dC">
                <img src={ihand} alt="dealimage" />
                <div className="d1">Hand Bags</div>
                <div className="d2">flat &#8377; 110 off</div>
                <div className="d3">Designer bags</div>
              </div>
            </div>
            <div>
              <div className="dC">
                <img src={istools} alt="dealimage" />
                <div className="d1">Stools Items</div>
                <div className="d2">get 10% off +extra bonus</div>
                <div className="d3">Home Furnitures</div>
              </div>
            </div>
            <div>
              <div className="dC">
                <img src={itool} alt="dealimage" />
                <div className="d1">Tool Kids</div>
                <div className="d2">flat &#8377; 160 off + extra bonus</div>
                <div className="d3">Hand Tools</div>
              </div>
            </div>
            
            
            
          </Slider>
        </div>
      </>
    );
  }
}
