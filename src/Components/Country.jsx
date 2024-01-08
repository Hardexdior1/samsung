import React from "react";
import "../Styles/Country.css";
import usa from "../images/1.png";
import AUSTRALIA from "../images/2.png";
import newZealand from "../images/3.png";
import AFRICA from "../images/4.png";
import BAHAMAS from "../images/5.png";
import ROMANIA from "../images/6.png";

import mama from "../images/2-1.png";
import man from "../images/1-1.png";

import max from "../images/maxresdefault.jpg";

import { FaClock, FaComment, FaQuoteRight, FaRecordVinyl, FaSpeakap, FaVoicemail } from "react-icons/fa";
import carbon from "../images/note.jpg";
import { FaThumbsUp } from "react-icons/fa";

const Country = () => {
  return (
    <div>
      <div className="countryOverAllWrap">
        <div className="beneficiariesWrap">
          <h2>Our Lucky Beneficiaries World Wide</h2>
        </div>

        <div className="countriesWrap">
          <div className="countriesGrid">
            <div>
              <h2>USA</h2>
              <div>
                <img src={usa} alt="usa-img" />
              </div>
              <button>CLICK HERE </button>
            </div>

            <div>
              <h2>AUSTRALIA</h2>
              <div>
                <img src={AUSTRALIA} alt="AUSTRALIA-img" />
              </div>
              <button>CLICK HERE </button>
            </div>

            <div>
              <h2>NEW ZEALAND </h2>
              <div>
                <img src={newZealand} alt="newZealand-img" />
              </div>
              <button>CLICK HERE </button>
            </div>
          </div>

          <div className="countriesGrid">
            <div>
              <h2>SOUTH AFRICA</h2>
              <div>
                <img src={AFRICA} alt="south-africa-img" />
              </div>
              <button>CLICK HERE </button>
            </div>

            <div>
              <h2>BAHAMAS</h2>
              <div>
                <img src={BAHAMAS} alt="BAHAMAS-img" />
              </div>
              <button>CLICK HERE </button>
            </div>

            <div>
              <h2>ROMANIA</h2>
              <div>
                <img src={ROMANIA} alt="ROMANIA-img" />
              </div>
              <button>CLICK HERE </button>
            </div>
          </div>

          <div className="countriesGrid">
            <div>
              <img src={max} alt="video-img" />
            </div>
          </div>

          <div className="reviewsWrap">
            <div className="flexReview">
              <div className="pad">
                <FaQuoteRight className="quote" />
                <div className="para">
                  <p>
                    I never did believe stuffs like this is real until I was
                    called by the bank about a huge amount of three million
                    dollar that was deposited into my accout. Thanks Samsung
                  </p>
                </div>
                <div>
                  <i>Kathrine Tessa</i>
                  <h4>US</h4>
                </div>
              </div>

              <div>
                <img src={mama} alt="woman-img" />
              </div>
            </div>

            <div className="flexReview">
              <div className="pad">
                <FaQuoteRight className="quote" />
                <div className="para">
                  <p>
                    Becoming a lucky millionaire was all a dream until March
                    this year I was luckily selected and the shocking part was I
                    have no one working in samsung who could have selected me.
                    Today I can afford to buy my dream home and my dream car.
                  </p>
                </div>
                <div>
                  <i>Bruce Wayne</i>
                  <h4>AUSTRALIA</h4>
                </div>
              </div>

              <div>
                <img src={man} alt="man-img" />
              </div>
            </div>
          </div>

          <div className="carbonWRap">
            <div className="imgWrap">
              <div>
                <img src={carbon} alt="carbon-img" />
              </div>
            </div>
            <div className="timeWrap">
              <p>UNCATEGORIZED</p>
              <h4>
                samsung electronics signs net zero home cooperation partnershipt
                with solarEdge
              </h4>

              <div className="flexIconTIme">
                <FaClock className="clock" /> <small>JUNE 16, 2023</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="getAnswersWrap">
        <div className="center">
          <h1>Get Answers</h1>
          <p>
            Professional support answers by trained answering machine with
            advanced alien technology to answer all your questions
          </p>
        </div>

        <div className="flexQuestion">
          <div className="flexEnq">
            <div>
              <FaComment className="icon3" />
            </div>

            <div>
              <h4>General Enquires</h4>
              <p>Bots will solve any common questions you may have</p>
            </div>
          </div>
          <div className="flexEnq">
            <div>
              <FaThumbsUp className="icon3" />
            </div>

            <div>
              <h4>Help and Support</h4>
              <p>Support and guide you all throught out the claim process</p>
            </div>
          </div>
          <div className="flexEnq">
            <div>
              <FaRecordVinyl className="icon3" />
            </div>

            <div>
              <h4>Tech</h4>
              <p>Visit our online store</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
