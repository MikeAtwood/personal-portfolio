import { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from "../assets/img/banner.png";
import TrackVisibility from 'react-on-screen';
import { BrowserRouter as Router } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import 'animate.css';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ "Web Developer", "Web Designer", "UI/UX Designer" ];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
          tick();
        },delta);
    
        return () => { clearInterval(ticker) };
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [text])
    
      const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    
        setText(updatedText);
    
        if (isDeleting) {
          setDelta(prevDelta => prevDelta / 2);
        }
    
        if (!isDeleting && updatedText === fullText) {
          setIsDeleting(true);
          setDelta(period);
        } else if (isDeleting && updatedText === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setDelta(500);
        } 
      }

    return (
        <Router>
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                                    <span className="tagline">Welcome to my Portfolio</span>
                                    <h1>{`Hi! I'm Michael Atwood `} <span className="wrap">Frontend Developer</span></h1>
                                    <p>
                                    I am a web developer with an array of knowledge in many different front end and back end languages, 
                                    responsive frameworks, databases, and best code practices. My objective is simply to be the best web developer 
                                    that I can be and to contribute to the technology industry all that I know and can do. I recently graduated from a software engineering 
                                    bootcamp with the University of Minnesota and look forward to continously perfecting my skills as a junior developer.
                                    Happy Coding!
                                   </p>
                                    <HashLink to='#connect'>
                                        <button onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle size={25} /></button>
                                    </HashLink>
                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                    <img src={headerImg} alt="Header Img" />
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
        </Router>
    )
}