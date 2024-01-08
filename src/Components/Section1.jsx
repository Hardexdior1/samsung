import React from "react";
import "../Styles/Section1.css";
import video1 from '../videos/Trinh.-2.mp4'
import {
  FaGlobe,
  FaStopwatch,
  FaStopwatch20,
  FaWatchmanMonitoring,
} from "react-icons/fa";
import { IoKeyOutline } from "react-icons/io5";
import { IoWatchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
const Section1 = () => {
  return (
    <div  className="section1OverAllWrap">
        <div className="artificialWrap">
          <h1>ARTIFICIAL INTELLIGENCE (AI)</h1>
          <p>Our AI Makes the selection and Monitor the Claim Process</p>
        </div>
      <section className="section1Wrap">
        

        <div className="stepsWrap">
          <div className="flexSteps">
            <div className="flexIconText">
              <div>
                <FaGlobe className="stepIcon" />
              </div>
              <div>
                <b className="black">Get Choosen </b>
                <p>
                  Get Choosen Randomly By a computerized Programmable network to
                  be among Samsung lucky beneficiaries.
                </p>
              </div>
            </div>

            <div className="flexIconText">
              <div>
                <FaStopwatch20 className="stepIcon" />
              </div>
              <div>
                <b className="black">BDC CODE </b>
                <p>
                Get a random BDC code for verification.
                </p>
              </div>
            </div>

            <div className="flexIconText">
              <div>
                <IoKeyOutline className="stepIcon" />
              </div>
              <div>
                <b className="black">Claim Winnings </b>
                <p>
                After Generating a BDC Code. fill the claim winnings form
                </p>
              </div>
            </div>
          </div>

          <div className="samsungWrap">
            <div className="samsungWrapFlex">
              <h1>SAMSUNG PROMOTION AND AWARD PLATFORM</h1>

              <p>
                Please read these Promotion terms and conditions carefully.
                Participation in this Promotion will constitute your agreement
                to comply with these Terms and Conditions. If you do not agree
                with these Terms and Conditions, please do not participate in
                this Promotion.
              </p>

              <Link><button>LEARN MORE </button></Link>
            </div>

           <div> <div>
                <h4>Cutting Edge</h4>
                <p>Join Over Hundreds of Lucky Beneficairy Saying Thank You to Samsung</p>
            </div>

            <div>
                <h4>Futuristic</h4>
                <p>With a strong A.I Program we are sure of smooth Selection and process</p>
                <Link><button>ABOUT US </button></Link>

            </div></div>


            <div>
                <video  src={video1} controls ></video>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Section1;
