import { Container, Row, Col } from "react-bootstrap";
import controllerImg from "../assets/img/controller.png";
import 'animate.css';

export const Contact = () => {
  
    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={controllerImg} alt="Contact Us"/>
                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <form name="contact" method="POST" data-netlify="true" onSubmit="submit">
                            <p>
                                <label>Name <input type="text" name="name"/>Name</label>
                            </p>
                            <p>
                                <label>Email <input type="email" name="email"/>Email</label>
                            </p>
                            <p>
                                <button type="submit">Send</button>
                            </p>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}