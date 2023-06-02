import { Container, Row, Col } from "react-bootstrap";
import controllerImg from "../assets/img/controller.JPG";
import 'animate.css';
import TrackVisibility from "react-on-screen";

export const Contact = () => {

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}> 
                        <img src={controllerImg} class="rounded-circle img-fluid" alt="Contact Us" />
                    </Col>
                    <Col md={6}>
                        <TrackVisibility>
                        {({ isVisible }) =>
                        <div>
                        <h2>Get In Touch</h2>
                        <form name="contact" method="post" netlify netlify-honeypot="bot-field">
                        <input type="hidden" name="form-name" value="contact" />
                            <p>
                                <label htmlFor="name">Name</label> <br />
                                <input type="text" id="name" name="name" required />
                            </p>
                            <p>
                                <label htmlFor="email">Email</label> <br />
                                <input type="email" id="email" name="email" required />
                            </p>
                            <p>
                                <label htmlFor="message">Message</label> <br />
                                <textarea id="message" name="message" required></textarea>
                            </p>
                            <p>
                                <input type="submit" value="Submit message" />
                            </p>
                        </form>
                        </div>}
                        </TrackVisibility>
                        </Col>
                   
                </Row>
            </Container>
        </section>
    )
}