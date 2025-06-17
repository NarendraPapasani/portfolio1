import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Narendra Papasani </span>
            from <span className="purple"> Guntur, India.</span>
            <br />
            I am a passionate Full Stack Developer specializing in the MERN
            stack.
            <br />
            I have expertise in React.js, Node.js, MongoDB, and Express.js.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring New Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Building Scalable Applications
            </li>
            <li className="about-activity">
              <ImPointRight /> Sharing Knowledge through Blogs
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
