import React, { useEffect } from "react";
import "../Styles/Hero.css";
import { Link } from "react-router-dom";
import man1 from "../images/man1.png";
import man2 from "../images/man2.png";
import man3 from "../images/man3.png";
import man4 from "../images/man4.png";


import woman1 from "../images/woman1.png";


const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <section className="heroSection">
        <h1>Our Management Team </h1>
        <p>
          The Tech Platform That Gives Back To The Community. Join the Lucky
          Winners
        </p>
        <Link>
          <button>LEARN MORE </button>
        </Link>
      </section>

      <div className="teamsWrap">
        <div className="flexTeamImgAndText">
          <div>
            <img src={man1} alt="man-img" />
          </div>
          <div>
            <p>PRESIDENT & CEO - 2022 - PRESENT</p>
            <h4>Kyung, Kye Hyun</h4>
            <p>
              CEO of #SamsungSemiconductor, the industry leader in
              semiconductor, memory and storage innovations. I aim to be a
              helpful leader, not a controlling one.
            </p>
          </div>
        </div>

        <div className="flexTeamImgAndText2">
        <div>
            <p>VICE CHAIRMAN & CEO(2022 - PRESENT)</p>
            <h4>Han, Jong Hee</h4>
            <p>
              We’re unlocking community knowledge in a new way. Experts add
              insights directly into each article, started with the help of AI.
            </p>
          </div>
          <div>
            <img src={man2} alt="man-img" />
          </div>
          
        </div>
        <div className="flexTeamImgAndText">
          <div>
            <img src={woman1} alt="woman-img" />
          </div>
          <div>
            <p>SNR SAMSUNG PEOMOTION</p>
            <h4>Mrs. Heather Mcguigan</h4>
           
          </div>
        </div>
        <div className="flexTeamImgAndText2">
        <div>
            <p>APPOINTED VICE-PRESIDENT OF SAMSUNG ELECTRONICS ROMANIA AND BULGARIA</p>
            <h4>Victor Armaselu</h4>
           
          </div>
          <div>
            <img src={man3} alt="man-img" />
          </div>
          
        </div>

        <div className="flexTeamImgAndText">
          <div>
            <img src={man4} alt="man4-img" />
          </div>
          <div>
            <p>SNR SAMSUNG MANAGER 2023</p>
            <h4>Steve Edward</h4>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
