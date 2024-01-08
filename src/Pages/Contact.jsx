import React from "react";
import "../Styles/Hero.css";
import { Link } from "react-router-dom";
import "../Styles/Contact.css";
import email from '../images/emailBlue.PNG'
const Contact = () => {
  return (
    <div>
      <section className="heroSection">
        <h1>Need our help ? Call us </h1>
        <p>
          The Tech Platform That Gives Back To The Community. Join the Lucky
          Winners
        </p>
        <Link>
          <button>LEARN MORE </button>
        </Link>
      </section>
      <div className="admin">
        <Link>Admin</Link>
      </div>

      <div className="ContactWrap">
      <div className="reach">
            <h4>Reach out to us</h4>
            <p>
              Don't be shy, Just tell us what the problem is or ask us any
              question. Don't like Filling up forms ? Mail us then{" "}
              <Link>email@example.com</Link>
            </p>
          </div>
      <div className="formAndTextWrap">
        <div>
          
          <form action="">
       
              <input type="text" placeholder="Name" required />
          

            <div>
              <input type="text" placeholder="Company" required />
            </div>

            <div>
              <input type="email" placeholder="Email" required />
            </div>

            <div>
              <input type="tel" placeholder="Phone" required/>
            </div>

            <div>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Message" required></textarea>
            </div>

            <div className="sub">
            <button>SUBMIT</button>
            </div>
          </form>
        </div>

        <div className="flexEmail">
          <img src={email} alt="email-img" />

          <div>
            <li><b>Email Us </b></li>
            <small>thenemail@example.com</small>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Contact;
