import React, { useEffect } from "react";
import "../Styles/Career.css";
import { Link } from "react-router-dom";
import money from "../images/money.PNG";
import workSpace from "../images/workSpace.PNG";
import coffe from "../images/coffe.PNG";

import challenge from "../images/challenge.PNG";
import health from "../images/health.PNG";
import lunch from "../images/lunch.PNG";

const Career = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="careerWrap">
      <div>
        <p className="firstCareerP">
          We are expanding rapidly and are working on several cutting
          technologies in the field of A.I and machine learning. we have some
          the best in the industry working for us and are looking for young and
          bright minds to join us
        </p>
      </div>

      <div className="flexJobs">
        <div className="borderDiv">
          <h4>Product Management Specialist </h4>
          <p>Exp -1 to 4 years </p>

          <div>
            <Link>APPLY NOW </Link>
          </div>
        </div>

        <div className="borderDiv">
          <h4>Promotion Marketing Manager </h4>
          <p>Exp -2 to 4 years </p>

          <p>
            Creative person who can lead a team to work on a cutting edge
            project{" "}
          </p>

          <div>
            <Link>APPLY NOW </Link>
          </div>
        </div>

        <div className="borderDiv">
          <h4>Assistant Manager, Performance Marketing {"(E-Store)"} </h4>
          <p>Exp -2 years </p>

          <p>
            identify digital touch points for product and brand promotion and
            set effective digital channel operation strategy
          </p>

          <div>
            <Link>APPLY NOW </Link>
          </div>
        </div>
      </div>

      <div>
        <p className="firstCareerP">
          if you cannot find what you are looking for, worry not, as we are
          constantly searching for execeptional talent if you have a strong
          passion for our work and wish to be part of it, kindly send an email
          to <Link>email@example.com</Link>
        </p>
      </div>

      <center>
        <h3>Why you would love to work with us </h3>
      </center>

      <div className="workWrap">
        <div className="workGrid">
          <div>
            <div>
              <img src={money} alt="money-img" />
            </div>
            <b>Great pay </b>

            <div>
              <p>
                {" "}
                Samsung offers highly rewarding career opportunities with
                attractive pay packages that are designed to recognize and
                appreciate employees’ contributions. Visit our website at
                samsunghelp.co to explore the possibilities of embarking on a
                fulfilling career journey with us.
              </p>
            </div>
          </div>

          <div>
            <div>
              <img src={workSpace} alt="workSpace-img" />
            </div>
            <b>Premium Office Space </b>

            <div>
              <p>
                At, we understand the importance of a conducive work environment
                in promoting innovation and productivity. Our premium office
                spaces, equipped with state-of-the-art facilities and
                cutting-edge technology, are designed to inspire and support our
                employees in achieving their goals. To learn more about our
                office spaces, please visit samsunghelp.co.
              </p>
            </div>
          </div>

          <div>
            <div>
              <img src={coffe} alt="coffe-img" />
            </div>
            <b>Unlimited Coffee </b>

            <div>
              <p>
                Samsung Company believes in taking care of its employees’
                wellness and work-life balance. As such, we offer unlimited
                coffee to our workforce, ensuring that they can stay energized
                and refreshed throughout the day. Such benefits demonstrate our
                commitment to creating a positive and comfortable work
                environment for our employees.
              </p>
            </div>
          </div>
        </div>

        <div className="workGrid">
          <div>
            <div>
              <img src={challenge} alt="challenge-img" />
            </div>
            <b>Challenging Work </b>

            <div>
              <p>
                At Samsung Company, we offer challenging work that is both
                stimulating and rewarding, providing our employees with the
                opportunity to hone their skills and reach their full potential.
                We pride ourselves on promoting a culture of innovation and
                creativity that inspires our employees to think outside the box
                and achieve extraordinary results.
              </p>
            </div>
          </div>

          <div>
            <div>
              <img src={health} alt="health-img" />
            </div>
            <b>Health Insurance </b>

            <div>
              <p>
                At Samsung Company, we value the well-being of our employees and
                recognize that having access to quality healthcare is essential.
                This is why we offer comprehensive health insurance packages
                that provide our employees and their families with the peace of
                mind that they are covered in case of any unforeseen medical
                emergencies.
              </p>
            </div>
          </div>

          <div>
            <div>
              <img src={lunch} alt="lunch-img" />
            </div>
            <b>Free Lunch </b>

            <div>
              <p>
                To further enhance the work-life balance of our employees,
                Samsung Company provides free lunches that are both nutritious
                and delicious. Our free lunch program is just one of the many
                ways we show our appreciation for our employees and their hard
                work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
