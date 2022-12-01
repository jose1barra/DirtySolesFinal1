import styled from "styled-components";
import { Container } from "react-bootstrap";
import './about-form.css'
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';

const Wrap = styled.div`
  width: 100%;
  padding: 78px 0px;
  background-color: #161616;
  img {
    height: auto;
    width: 490px;
  }
`;

const Main = styled.div`
  width: 1130px;
  max-width: 95%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const AboutText = styled.div`
  width: 550px;

  h1 {
    color: rgb(255, 255, 255);
    font-size: 80px;
    text-transform: capitalize;
    margin-bottom: 20px;
    font-family: "Times New Roman", Times, serif;
  }
  h5 {
    color: rgb(150, 40, 40);
    font-size: 25px;
    text-transform: capitalize;
    margin-bottom: 25px;
    letter-spacing: 2px;
    font-family: "Times New Roman", Times, serif;
  }
  p {
    color: rgb(255, 255, 255);
    letter-spacing: 1px;
    line-height: 28px;
    font-size: 18px;
    margin-bottom: 45px;
  }
`;

export const About = () => {
  const form = useRef();
    const sendFeedback = (e) => {

    e.preventDefault();

    emailjs.sendForm('service_gou06pv', 'template_d20yv9v', form.current, '36rruiJjj07_NtJUv')
      .then((result) => {
        alert("email sent");
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
    };
  return (
    <Container className="mb-4">
    <Wrap>
      <Main>
        <img src={require("../images/about.jpg")} />
        <AboutText>
          <h1>Dirty Soles</h1>
          <h5>Our mission</h5>
          <p>
            Our mission is to provide access to the world’s most coveted shoes
            in the smartest way possible. Buy the hottest sneakers now!
            Negotiating, Trades, and Purchase can be done in store.
          </p>
        </AboutText>
      </Main>
    </Wrap>
    <div class="contain" style={{marginTop:100}}>
<div class="wrapper">

  <div class="form">
    <h4>GET IN TOUCH</h4>
    <h2 class="form-headline">Send us a message</h2>
    <form ref={form} onSubmit={sendFeedback} id="submit-form" action="">
      <p>
        <input  name="userName" class="form-input" type="text" placeholder="Your Name*"/>
        <small class="name-error"></small>
      </p>
      <p>
        <input name="feedbackEmail" class="form-input" type="email" placeholder="Your Email*"/>
        <small class="name-error"></small>
      </p>
      <p class="full-width">
        <textarea  minlength="20" name="feedbackMessage" cols="30" rows="7" placeholder="Your Message*" required></textarea>
        <small></small>
      </p>
      <p class="full-width">
        <input type="submit" class="submit-btn" value="Submit" onclick="checkValidations()"/>
        <button class="reset-btn" onclick="reset()">Reset</button>
      </p>
    </form>
  </div>

  <div class="contacts contact-wrapper">
    <ul>
      <span class="highlight-text-grey">
      </span>
      <span class="hightlight-contact-info">
      </span>
    </ul>
  </div>
</div>
</div>
<br/>
    </Container>
  );
};
