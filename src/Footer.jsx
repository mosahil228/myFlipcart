import "./Footer.css";
import { NavLink } from "react-router-dom";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import StarsIcon from "@material-ui/icons/Stars";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import ft from "./homeImages/ft.svg";



const Footer = () => {
    
  return (
    <>
     
      <footer>
        <div className="fContainer ">
          <div className="rowItem ">
            <div className="fHeading">
              <div>ABOUT</div>
            </div>
            <div className="rowLinks flex">
              <NavLink to="/">Contact Us</NavLink>
              <NavLink to="/">About Us</NavLink>
              <NavLink to="/">Careers</NavLink>
              <NavLink to="/">Flipkart Stories</NavLink>
              <NavLink to="/">Flipkart Sales</NavLink>
              <NavLink to="/">Press</NavLink>
              <NavLink to="/">Corporate Infomation</NavLink>
            </div>
          </div>
          <div className="rowItem ">
            <div className="fHeading">
              <div>HELP</div>
            </div>
            <div className="rowLinks flex">
              <NavLink to="/">Payments</NavLink>
              <NavLink to="/">Shipping</NavLink>
              <NavLink to="/">Cancelations & Returns</NavLink>
              <NavLink to="/">FAQ</NavLink>
              <NavLink to="/">Report Infringement</NavLink>
            </div>
          </div>
          <div className="rowItem ">
            <div className="fHeading">
              <div>POLICY</div>
            </div>
            <div className="rowLinks flex">
              <NavLink to="/">Return Policy </NavLink>
              <NavLink to="/">Term Of Use</NavLink>
              <NavLink to="/">Security</NavLink>
              <NavLink to="/">Privacy</NavLink>
              <NavLink to="/">Road Map</NavLink>
              <NavLink to="/">Epr Compliance</NavLink>
            </div>
          </div>
          <div className="rowItem ">
            <div className="fHeading">
              <div>SOCIAL</div>
            </div>
            <div className="rowLinks flex">
              <NavLink to="/">
                {" "}
                <InstagramIcon className="i1" /> Instagram{" "}
              </NavLink>
              <NavLink to="/">
                {" "}
                <FacebookIcon className="i2" /> Facebook
              </NavLink>
              <NavLink to="/">
                {" "}
                <YouTubeIcon className="i3" /> YouTube
              </NavLink>
            </div>
          </div>
          <div className="rowItem d2n">
            <div className="fHeading p-l">
              <div>MAIL US:</div>
            </div>
            <div className="rowLinks p-l b-left flex ">
              <p>mosahil228@gmail.com</p>
              <p>Million dollar private Limited,</p>
              <p> 11/270 Gwaltoli,Souterganj</p>
              <p>Kanpur,Uttar Pradesh</p>
              <p>India</p>
            </div>
          </div>
          <div className="rowItem d2n">
            <div className="fHeading">
              <div>Registerd Office</div>
            </div>
            <div className="rowLinks flex ">
              <p>mosahil228@gmail.com</p>
              <p>+916391691999</p>
              <p>Million dollar private Limited,</p>
              <p> 11/270 Gwaltoli,Souterganj</p>
              <p>Kanpur,Uttar Pradesh</p>
              <p>India</p>
            </div>
          </div>
        </div>
      </footer>
      <footer className="bFooter ">
        <div className="bCont flex">
       
          <div className="Bft">
            <LocalMallIcon className="bb" />
            <NavLink to="/">Sell On FlipKart</NavLink>
          </div>
          <div className="Bft">
            <StarsIcon className="bb" />
            <NavLink to="/">Advertice</NavLink>
          </div>
          <div className="Bft">
            <CardGiftcardIcon className="bb" />
            <NavLink to="/">Gift Cards</NavLink>
          </div>
          <div className="Bft">
            <HelpOutlineIcon className="bb" />
            <NavLink to="#">Help Centre</NavLink>
          </div>
          <div className="Bft">
            <span> &copy;2021 FlipKart.com </span>
          </div>
          <div className="Bft">
            <img src={ft} alt="ft" />
          </div>
         
        </div>
        
      </footer>
    </>
  );
};

export default Footer;
