/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/img/header-img.svg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ['Full-Stack Web Developer', 'Full-Stack Web Developer'];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi I'm a `}
                    <span className="wrap">{text}</span>
                  </h1>
                  <p className="banner-paragraph">
                    Hi, I’m Tamir. I’m a developer that previously worked as a Customer Success
                    Manager and Account Manager for PayPal Berlin, both roles were concentrated on
                    assisting and guiding the company’s high ranking merchants. My role included
                    solving issues, providing guidance and organizing data about our merchant’s
                    businesses. After finishing the Full-Stack developer course with CareerFoundry,
                    I now wish to expand my knowledge and improve my skills as a developer by taking
                    on new challenges in the tech-industry.
                  </p>
                  <a href="#contact" className="contact-btn">
                    Let's Connect
                    <ArrowRightCircle size={25} className="arrowRightCircle" />
                  </a>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header IMG" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
