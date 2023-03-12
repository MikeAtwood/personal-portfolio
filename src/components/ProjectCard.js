import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, item }) => {
    return (
    <Col sm={6} md={4}>
        <div className="proj-imgbx">
            <img src={imgUrl} alt="prop" />
            <div className="proj-txtx">
                <h4>{title}</h4>
                <span>{description}</span>
                <p>
                    <a href={item} target='_blank' rel="noreferrer">Click Here</a>
                </p>
            </div>
        </div>
    </Col>
    )
}