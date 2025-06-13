import React from "react";

const About = () => {
  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold mb-6 text-gray-800">About Me</h2>
      <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
        Hi, I'm John Doe, a passionate web developer with expertise in creating
        interactive and visually appealing websites. I love solving problems and
        bringing ideas to life through code.
      </p>
      <img
        src="/assets/profile.jpg"
        alt="Profile Picture"
        className="mx-auto rounded-full w-40 h-40 shadow-lg"
      />
    </section>
  );
};

export default About;
