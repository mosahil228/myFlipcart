import React from "react";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import bf1 from "./homeImages/bf1.gif";
import bf2 from "./homeImages/bf2.gif";
import bf4 from "./homeImages/bf4.gif";
import bf5 from "./homeImages/bf5.gif";
import bc1 from "./homeImages/bc1.gif";
import bc2 from "./homeImages/bc2.gif";
import bc4 from "./homeImages/bc4.gif";
import bc3 from "./homeImages/bc3.gif";
import bv1 from "./homeImages/bv1.jpg";
import bv2 from "./homeImages/bv2.jpg";
import bv4 from "./homeImages/bv4.jpg";
import bv3 from "./homeImages/bv3.jpg";
import bh1 from "./homeImages/bh1.jpg";
import bh2 from "./homeImages/bh2.jpg";
import bh3 from "./homeImages/bh3.jpg";
import bh4 from "./homeImages/bh4.jpg";
import bh5 from "./homeImages/bh5.jpg";
import bh6 from "./homeImages/bh6.jpg";
import StarIcon from "@material-ui/icons/Star";

const Homecc = (props) => {
  return (
    <>
      <div>
        <NavLink className="contentImg " to="/">
          <img src={props.imgsrc} alt="appliances" />
          <span>{props.sname}</span>
        </NavLink>
      </div>
    </>
  );
};
const Homec2 = (props) => {
  return (
    <>
      <NavLink className="contentImg2 " to="/">
        <img src={props.imgsrc} alt="appliances" />
        <span>{props.sname}</span>
      </NavLink>
    </>
  );
};

const Homec3 = (props) => {
  return (
    <>
      <div className="item i1">
        <div className="i1Style">
          <h1>{props.heading}</h1>
        </div>
        <Button>View All</Button>
      </div>
    </>
  );
};
const Homec4 = (props) => {
  return (
    <>
      <div>
              <div className="dC ">
                <img src={props.imgsrc2} alt="dealimage" />
                <div className="d1" key="uniqueId1">{props.d1}</div>
                <div className="d2" key="uniqueId2">{props.d2}</div>
                <div className="d3" key="uniqueId3">{props.d3}</div>
              </div>
            </div>
    </>
  );
};
const Homec5 = (props) => {
  return (
    <>
      <div>
              <div className="dC ">
                <img src={props.imgsrc2} alt="dealimage" />
                <div className="d1" key="uniqueId4">{props.d1}</div>
                <div className="d2" key="uniqueId5">{props.d2}</div>
                <div className="d3" key="uniqueId6">{props.d3}</div>
              </div>
            </div>
    </>
  );
};
const Homec6 = () => {
  return (
    <>
     <div className="gd2">
              <div>
                <img src={bf1} alt="gif45"/>
              </div>
              <div>
                <img src={bf2} alt="gif45"/>
              </div>
              <div>
                <img src={bf4} alt="gif45"/>
              </div>
              <div>
                <img src={bf5} alt="gif45"/>
              </div>
            </div>
    </>
  );
};
const Homec7 = () => {
  return (
    <>
     <div className="gd3 gd8">
              <div>
                <img src={bc1} alt="gif45"/>
              </div>
              <div>
                <img src={bc2} alt="gif45"/>
              </div>
              <div>
                <img src={bc4} alt="gif45"/>
              </div>
              <div>
                <img src={bc3} alt="gif45"/>
              </div>
            </div>
    </>
  );
};
const Homec8 = () => {
  return (
    <>
     <div className="gd4 gd9">
              <div>
                <img src={bv1} alt="gif45"/>
              </div>
              <div>
                <img src={bv2} alt="gif45"/>
              </div>
              <div>
                <img src={bv4} alt="gif45"/>
              </div>
              <div>
                <img src={bv3} alt="gif45"/>
              </div>
            </div>
    </>
  );
};
const Homec9 = () => {
  return (
    <>
     <div className="gd6">
              <div className="gc">
                <img src={bh1} alt="df"/>
              </div>
              <div className="gc">
                <img src={bh2} alt="df"/>
              </div>
              <div className="gc">
                <img src={bh3} alt="df"/>
              </div>
              <div className="gc">
                <img src={bh4} alt="df"/>
              </div>
              <div className="gc">
                <img src={bh5} alt="df"/>
              </div>
              <div className="gc">
                <img src={bh6} alt="df"/>
              </div>
            </div>
    </>
  );
};
const Homec10 = (props) => {
  return (
    <>
     <div className="sG1">
                <img src={props.imgsrc} key="uniqueId7" alt="sbag" />
                <div className="gRate">
                  <StarIcon className="star" />
                  <StarIcon className="star" />
                  <StarIcon className="star" />
                  <StarIcon className="star" />
                  <StarIcon className="star" />
                
                 
                </div>
                <div className="n1 flex justify-center">American Unique Bag</div>
                <div className="n2 flex justify-center"> flat &#8377; 120 off </div>
                <Button className="nB flex justify-center">Add To Cart</Button>
            
              </div>
    </>
  );
};
export default Homecc;
export { Homec2 ,Homec3,Homec4,Homec5,Homec6,Homec7,Homec8,Homec9,Homec10};
