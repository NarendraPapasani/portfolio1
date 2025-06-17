import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath=""
              isBlog={false}
              title="Victorizz"
              description="Integrated Google Authentication and Google Sheets, enhancing user login security and data management. Enhanced profile section, Added nearby tournaments features, boosting user engagement by 30%. Redesigned the backend with Supabase, optimizing APIs in Node.js and Express for better performance."
              ghLink=""
              demoLink="victorizz.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath=""
              isBlog={false}
              title="E-commerce Platform Development"
              description="Built a eCommerce platform using MERN, featuring authentication, product listings. Developed cart management for seamless checkout and deployed the app on Render and Netlify for scalability. Optimized backend and API performance, enhancing load speed by 40% for a smoother user experience."
              ghLink="https://github.com/NarendraPapasani/ecommerce-website"
              demoLink="ecommified.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath=""
              isBlog={false}
              title="DentaCare- Dental Clinic Management System"
              description="Built a MERN-based dental clinic system, optimizing appointment scheduling and patient management. Integrated role-based authentication and user profiles, boosting security and engagement by 30%. Deployed via Render and Netlify, ensuring seamless scalability and performance."
              ghLink="https://github.com/NarendraPapasani/Dental-care-app"
              demoLink="https://bright-brigadeiros-3d3e91.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
