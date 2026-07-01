import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import healthDash from "../../Assets/Projects/healthDash.png";
import machineMantian from "../../Assets/Projects/machineMantian.png";
import coachFeed from "../../Assets/Projects/coachFeed.png";
import taskBuddy from "../../Assets/Projects/taskBuddy.png";
import makeEvent from "../../Assets/Projects/MakeEvent.png";
import homeCare from "../../Assets/Projects/homeCare.png";


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
              imgPath={homeCare}
              isBlog={false}
              title="Home-Care"
              description="Developed a HomeCare web application using the MERN stack, enabling users to register, book healthcare services, manage appointments, and providing administrators with service management capabilities."
              ghLink="https://github.com/AkshayBakkayi/HomeCare"
              demoLink="https://home-care-sigma.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={makeEvent}
              isBlog={false}
              title="Make Event"
              description="The Event Management System is a full‑stack web application designed to simplify the process of planning, organizing, and managing events. It provides separate roles for Guests, Users, and Admins, ensuring smooth communication and control across the platform."
              ghLink="https://github.com/AkshayBakkayi/MakeEvent"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={taskBuddy}
              isBlog={false}
              title="TaskBuddy"
              description="TaskBuddy is a productivity and task management web application designed to help individuals and teams organize their work efficiently. It provides a clean interface, smart reminders, and collaborative features to ensure nothing slips through the cracks."
              ghLink="https://github.com/AkshayBakkayi/OCTA1_TaskBuddy_App"
              demoLink="https://octa-1-task-buddy-app.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={coachFeed}
              isBlog={false}
              title="Coach Feed"
              description="A real-time coaching platform built with React, Node.js, Express, MongoDB, and Socket.IO. Features include live coaching feeds, course management, notes sharing, and separate admin and user dashboards."
              ghLink="https://github.com/AkshayBakkayi/coach_feed_frontend"
              demoLink="https://coach-feed-frontend.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={machineMantian}
              isBlog={false}
              title="Machine Maintenance"
              description="A web-based machine maintenance management system that helps track equipment, schedule maintenance, manage service records, and monitor machine status efficiently."
              ghLink="https://github.com/AkshayBakkayi/machine-maintenance"
              demoLink="https://machine-maintenance-six.vercel.app/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={healthDash}
              isBlog={false}
              title="Health Dashboard"
              description="A modern healthcare dashboard developed using React.js that provides real-time insights into patient data, appointment scheduling, medical records, and healthcare analytics through an intuitive and responsive user interface."
              ghLink="https://github.com/AkshayBakkayi/HelthcareDashboard"
              demoLink="https://helthcare-dashboard.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
