import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard.js";
import projImg1 from "../assets/img/projImg1.jpeg";
import projImg2 from "../assets/img/projImg2.jpeg";
import projImg3 from "../assets/img/projImg3.jpeg";
import projImg4 from "../assets/img/projImg4.png";
import tab1 from "../assets/img/tab1.png";
import tab2 from "../assets/img/tab2.png";
import tab3 from "../assets/img/tab3.png";
import eng from "../assets/img/eng.png";
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
                  <p>
                    Just a few of the projects I've completed since the beginning of my Software Engineering journey.
                    Applications created with modern technology and best practices, coupled with the use of
                    MongoDB, Express.js, React.js, Node.js, and many more.
                  </p>
                </div>}
            </TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first"><img src={tab1} class="" alt="" /></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second"><img src={tab2} alt="" /></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third"><img src={tab3} alt="" /></Nav.Link>
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
                  <div className="tab3"><img src={eng} alt=""></img></div>
                  <p>
                    Gaming has been a passion of mine since as far back as i can remember. During the course of 2023, my brother Kyle Atwood, and I are going
                    to explore the in's and out's of video game development. With Unreal Engine 5 being the latest installment from Epic Games, it's definitely
                    on our list of engines to build off of. 
                    Our plan for 2023 is to start small and develop a series of mobile games, to build up to our dream of becoming indie video game developers.
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  )
}