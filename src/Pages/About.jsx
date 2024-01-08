import React, { useEffect } from "react";
import "../Styles/Hero.css";
import { Link } from "react-router-dom";
import woman from "../images/woman.png";
import family from "../images/family.png";
import couples from "../images/couples.png";
import blur from '../images/blur.png'
import max from '../images/maxresdefault2.jpg'


const About = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <div>
      <section className="heroSection">
        <h1>How we got started </h1>
        <p>
          From a tiny garage to a multi-million dollar company, we innovated our
          way to the top.{" "}
        </p>
        <Link>
          <button>LEARN MORE </button>
        </Link>
      </section>

      <section className="makingWrap">
        <div className="makingSection">
          <h4>MAKING THE WORLD A BETTER PLACE</h4>
          <p>
            Samsung a renowned South Korean company and one of the world’s
            largest producers of electronic devices. The company specializes in
            the production of a wide range of consumer and industrial
            electronics, including digital media devices, appliances, memory
            chips, semiconductors, and integrated systems. With its exceptional
            technological advancements, Samsung has become a well-known name in
            the industry and accounts for approximately one fifth of South
            Korea’s total exports.
          </p>
        </div>

        <div className="samsungCompanyWrap">
          <div><img src={max} alt="video-img" /></div>
          <div className="ourStoryFlex">
            <div>
              <h4 className="story">Our Story </h4>
              <p>
                Samsung Electronics constantly reinvents the future. We explore
                the unknown to discover technologies to help people all over the
                world lead happier, healthier lives.
              </p>

              <div className="flexJoin">
                <button>JOIN OUR TEAM </button>
              </div>
            </div> 

           {/* <div className="gridImages">
              <div >
                <img  className="woman" src={woman} alt="woman-img" />
              </div>
              <div>
                <div>
                  <img src={family} alt="family-img" />
                </div>
                <div>
                  <img src={couples} alt="couples-img" />
                </div>
              </div>
            </div> */}
          </div>

           <div>
            <h1 className="centerH1">ABOUT SAMSUNG PROMOTION </h1>
            <p>
              Samsung Promotion and Award is a unique initiative launched by
              Samsung and its partners to give back to the community. Every
              month, Samsung conducts a Lucky Draw with the assistance of ten
              reputable brands such as Google LLC, Oakland Bank, and Nestle. The
              selection of winners is completely random, based on an AI system
              that operates across various social media platforms including
              Facebook and Instagram. Lucky beneficiaries stand a chance to
              receive attractive rewards such as cash prizes, Samsung mobile
              phones, TVs, and other exciting gifts. This program is also known
              as Samsung Lottery, Samsung Competition Winners, Samsung Lottery
              International, Samsung Promo Winners 2023, Samsung Lottery Awards
              2023, Samsung Promotions, and Samsung Contest 2023. Once
              announced, the winners are required to follow the process to claim
              their awards.
            </p>
          </div> 

          <div>
            <h1 className="centerH1">HOW SAMSUNG PROMOTION WORKS</h1>
            <p>
              Samsung Electronics is excited to announce the launch of its 2023
              Lucky Beneficiaries program, which offers the opportunity for
              selected participants to receive special rewards and benefits. To
              be considered for this program, participants are required to sign
              up on Samsung’s website and provide their basic personal
              information. The selection process will be conducted using a
              computerized programmable AI network, which will randomly select
              the lucky beneficiaries from the pool of eligible participants.
            </p>
            <p>
              To ensure your eligibility, please make sure to provide accurate
              and up-to-date information during the sign-up process. Please note
              that incomplete or incorrect information may result in
              disqualification from the program. All selected participants will
              be contacted by email or phone, so please ensure that you provide
              valid contact information during the sign-up process.
            </p>
            <p>
              We are thrilled to offer this exciting opportunity to our valued
              customers, and we look forward to rewarding our lucky
              beneficiaries with amazing prizes and benefits. Thank you for your
              continued support of Samsung Electronics, and we wish you the best
              of luck in the selection process.
            </p>
            <p>
              To obtain a random BDC code for verification by the Samsung
              promotion manager, the selected individual needs to follow a few
              simple steps. First, please visit Samsung’s website 
              and provide accurate and complete
              information while working with the online publicist agent, Amelia
              Bradman.
            </p>

            <p>
              To contact Amelia, please click the following link:{" "}
              <Link>email@example.com</Link> .
            </p>

            <p>
              Once you have provided all necessary information and worked with
              Amelia to verify your eligibility, you will be Directed on how to
              generate an Automated BDC code that will be used to claim your
              prize. We appreciate your cooperation and look forward to hearing
              from you soon.
            </p>
          </div> 
        </div>

        

      </section>
       <div className="undefinedImgAndTextWrap">
        <div>
        
          <p>With great A.I Power comes great responsibility, in the field of technology</p>

          <div>
            <i>Tony Stark,</i>
            <h4>STARK INDUSTRIES</h4>
          </div>
        </div>

        <div>
          <img src={ blur} alt="blur-img" />
        </div>

      </div> 
    </div>
  );
};

export default About;
