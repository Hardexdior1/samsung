import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Hero.css'
import { FaClock } from 'react-icons/fa';
const Hero1 = () => {
  return (
    <div>

        <section className="heroSection">
            <h1>The future is changing and we are part of it </h1>
            <p>The Tech Platform Than Gives Back to The community. join the lucky winners </p>
            <Link><button>LEARN MORE </button></Link>
        </section>

        {/* <h1>hello</h1> */}
    </div>
  )
}

export default Hero1