import React from "react";
import "../Styles/Footer.css";
import { Link } from "react-router-dom";
import { IoMdHeadset } from 'react-icons/io';
import { FaTwitter, FaLinkedin, FaInstagram, FaGoogle,FaEnvelope, FaHeadset, FaMapMarkerAlt } from 'react-icons/fa'; // Importing specific icons from react-icons
const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="samsungContactFlex">
          <div>
            <p className="express">
              Expressing our gratitude towards the Samsung community and users,
              we aim to find more effective ways of acknowledging their support
              and loyalty.
            </p>
          </div>
          <div>
            <h4>Contact</h4>

            <div className="webLinksWrap">
             

              <div className="iconsWrap">
              <IoMdHeadset className="icon2" />

              <p>8900093033</p>

                
              </div>
              <div className="iconsWrap">
              <FaEnvelope  className="icon2"/>
              <p>email@example.com</p>
             
              </div>
              <div className="iconsWrap">
              < FaMapMarkerAlt  className="icon2"/>
              <p>South Korea</p>
              
              </div>
            </div>
          </div>
        </div>
        <div className="samsungContactFlex2">
          <div>
            <h4>Pages</h4>

            <div className="webLinksWrap">
              <li>
                {" "}
                <Link to="/About">About</Link>
              </li>
              <li>
                <Link to="/About">Management</Link>
              </li>

              {/* <p>email@example.com</p> */}
            </div>
          </div>

          <div>
            <h4>Resources</h4>

            <div className="webLinksWrap">
              <li></li>
              <Link to="/About">Careers</Link>
            </div>
          </div>

          <div>
            <h4>Legal</h4>

            <div className="webLinksWrap">
              <li>
                {" "}
                <Link to="/About">About</Link>
              </li>
              <li>
                {" "}
                <Link to="/About">Privacy Policy</Link>
              </li>
              <li>
                {" "}
                <Link to="/About">Terms And Conditions </Link>
              </li>

              {/* <p>email@example.com</p> */}
            </div>
          </div>
        </div>

        <div className="flexFooterIcons">
            <div><p>Copyright © 2019-2023 Samsung. All Rights Reserved</p></div>
           
            <div className="iconsWrap">
                < FaTwitter className="icon"/>

                <FaLinkedin className="icon" />

                <FaInstagram className="icon"/>
                <FaGoogle className="icon"/>

            </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
