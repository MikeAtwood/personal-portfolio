import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import meter1 from "../assets/img/html.png";
import meter2 from "../assets/img/javascript.png";
import meter3 from "../assets/img/css.png";
import meter4 from "../assets/img/node.png";
import meter5 from "../assets/img/mongodb.png";
import meter6 from "../assets/img/graphql.png";
import meter7 from "../assets/img/react.png";
import meter8 from "../assets/img/express.png";

export const Skills = () => {
    const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };

    return (
        <section className='skill' id='skills'>
            <Container>
                <Row>
                    <Col>
                        <div className='skill-bx'>
                            <h2>
                                Skills
                            </h2>
                            <p>Using today's best methods and practices.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                            <Carousel responsive={responsive} Infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={meter1} alt="html" /> 
                                    <h5>HTML5</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="javas" />
                                    <h5>JavaScript</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="css" />
                                    <h5>CSS3</h5>
                                </div>
                                <div className="item">
                                    <img src={meter4} alt="node" />
                                    <h5>Node.js</h5>
                                </div>
                                <div className="item">
                                    <img src={meter5} alt="mongo" />
                                    <h5>MongoDB</h5>
                                </div>
                                <div className="item">
                                    <img src={meter6} alt="graphql" />
                                    <h5>GraphQL</h5>
                                </div>
                                <div className="item">
                                    <img src={meter7} alt="react" />
                                    <h5>React</h5>
                                </div>
                                <div className="item">
                                    <img src={meter8} alt="express" />
                                    <h5>Express.js</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}