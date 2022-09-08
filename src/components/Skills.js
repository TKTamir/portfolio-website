/* eslint-disable jsx-a11y/img-redundant-alt */
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container, Col, Row } from 'react-bootstrap';
import logoHtml from '../assets/img/logohtml.png';
import logoCss3 from '../assets/img/logocss3.png';
import logoJs from '../assets/img/logojs.png';
import logoReact from '../assets/img/logoReact.png';
import logoAngular from '../assets/img/logoangular.png';
import logoNodejs from '../assets/img/logoNodejs.png';
import logoBootstrap from '../assets/img/logoBootstrap.png';

import colorSharp from '../assets/img/color-sharp.png';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={logoHtml} alt="Image" className="skill-logo" />
                  <h5>HTML5</h5>
                </div>
                <div className="item">
                  <img src={logoCss3} alt="Image" className="skill-logo" />
                  <h5>CSS3</h5>
                </div>
                <div className="item">
                  <img src={logoJs} alt="Image" className="skill-logo" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={logoNodejs} alt="Image" className="skill-logo" />
                  <h5>Node.js</h5>
                </div>
                <div className="item">
                  <img src={logoReact} alt="Image" className="skill-logo" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={logoAngular} alt="Image" className="skill-logo" />
                  <h5>Angular</h5>
                </div>
                <div className="item">
                  <img src={logoBootstrap} alt="Image" className="skill-logo" />
                  <h5>Bootstrap</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="background-image" />
    </section>
  );
};
