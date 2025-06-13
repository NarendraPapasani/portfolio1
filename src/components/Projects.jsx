import React from "react";
import Project1 from "../assets/Project1.png";
import image from "../assets/image1.png";
import image1 from "../assets/image.png";
const projects = [
  {
    title: "Ecommerce Website",
    description:
      "A fully functional ecommerce platform with product listings, shopping cart, and payment integration.",
    image: Project1,
    link: "https://ecommified.netlify.app/",
  },
  {
    title: "Dental Care app",
    description:
      "DentaCare is a comprehensive dental clinic management system designed to streamline appointment scheduling, patient record management, and document handling for dental practices. The application features a user-friendly interface for both patients and clinic staff, enhancing the overall experience of dental care management.",
    image: image,
    link: "https://bright-brigadeiros-3d3e91.netlify.app/",
  },
  {
    title: "Veggie Bulk",
    description:
      "Veggie Bulk is a platform designed for purchasing vegetables in bulk, catering to businesses and individuals who require large quantities of fresh produce. The application features an intuitive interface for browsing, selecting, and ordering bulk vegetables with ease.",
    image: image1,
    link: "https://grand-cendol-1d0537.netlify.app/",
  },
];

const Projects = () => {
  return (
    <section className="py-16 bg-white">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="text-center bg-gray-100 p-6 rounded-lg shadow-lg"
          >
            <img
              src={project.image}
              alt={project.title}
              className="mx-auto w-full max-w-xs rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              {project.title}
            </h3>
            <p className="text-lg text-gray-600 mb-4">{project.description}</p>
            <a
              href={project.link}
              className="px-6 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
