import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard.js";
import projImg1 from "../assets/img/projImg1.jpeg";
import projImg2 from "../assets/img/projImg2.jpeg";
import projImg3 from "../assets/img/projImg3.jpeg";
import projImg4 from "../assets/img/projImg4.png";
import TrackVisibility from 'react-on-screen';
import 'animate.css';

export const Projects = () => {

  const projects = [
    {
      title: "Kyle's Portfolio",
      description: "Game Development",
      imgUrl: projImg4,
      view: "https://kyleatwood.netlify.app/",
    },
    {
      title: "ExamCram",
      description: "Flash Cards",
      imgUrl: projImg1,
    },
    {
      title: "Take A Hike",
      description: "Find New Trails",
      imgUrl: projImg2,
    },
    {
      title: "Get Facts & Find Cats",
      description: "Cat Adoption",
      imgUrl: projImg3,
    },
  ];


  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                  <h2>Projects</h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>}
            </TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Quick View</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Game Development</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Coming Soon!</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {
                      projects.map((project, index) => {
                        return (
                          <ProjectCard
                            key={index}
                            {...project}
                          />
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                <a href="https://kyleatwood.netlify.app/"><img src={projImg4} alt="" /></a>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  )
}