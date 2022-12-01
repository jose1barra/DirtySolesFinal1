import App from "../App";
// npm install react-icons --save to use icons
//  npm install @emailjs/browser --save to use email js
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';
import { FaCcMastercard } from 'react-icons/fa';
import { FaCcDiscover } from 'react-icons/fa';
import { FaCcApplePay } from 'react-icons/fa';
import { FaCcPaypal } from 'react-icons/fa';
import { FaCcVisa } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import "./BottomNav.css";

const BottomNav = () => {
    
    const form = useRef();
    const sendEmail = (e) => {

    e.preventDefault();

    emailjs.sendForm('service_gou06pv', 'template_bvq3ysz', form.current, '36rruiJjj07_NtJUv')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
    };

    return (
        <div className="main-BottomNav">
            <section className="top-footer">
            </section>
            <section className="subscription">
                <p className="subscription-heading">
                    Sign up for news and special offers
                </p>
                <div className="input-areas">
                    <form  ref={form} onSubmit={sendEmail}>
                        <input type="email" name="user_email" placeholder="Email adress" className="sub-input" />
                        <button className="sign-button">Sign Up</button>
                    </form>
                </div>
                <p className="subscription-text">By providing your email, you agree to the Terms of Use and Privacy Policy.
                </p>
            </section>
            <hr />
            <section className="payment">
                <p className="payment-heading">
                    Accepted Payment Methods
                </p>
                <div className="pay-row">
                <div className="pay-icons">
                    <li>
                    <FaCcMastercard />
                    </li>
                </div>
                <div className="pay-icons">
                    <li>
                        <FaCcDiscover />
                    </li>
                </div>
                <div className="pay-icons">
                    <li>
                        <FaCcApplePay />
                    </li>
                </div>
                <div className="pay-icons">
                    <li>
                        <FaCcPaypal />
                    </li>
                </div>
                <div className="pay-icons">
                    <li>
                        <FaCcVisa />
                    </li>
                </div>
                </div>
            </section>
            <hr />
                    <div className="row2">
                        <p className="col-sm">
                            &copy; {new Date().getFullYear()} Dirty Soles
                        </p>
                    </div>

        </div>
    )
}

export default BottomNav;