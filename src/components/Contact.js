import { Container, Row, Col } from "react-bootstrap";
import controllerImg from "../assets/img/controller.png";
import 'animate.css';

export const Contact = () => {

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={controllerImg} alt="Contact Us" />
                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <form name="contact" method="post" netlify>
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
                    </Col>
                </Row>
            </Container>
        </section>
    )
}