const About = () => {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Python",
    "Java",
    "SQL",
    "MongoDB",
    "Docker",
    "AWS",
    "Git",
    "REST API",
    "Microservice Architecture",
    "WebSocket",
    "Vue.js",
    "Express.js",
    "Nest.js",
    "Flask",
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 mb-8">
            As a computer engineering graduate, I am a passionate developer
            focused on modern web technologies and software development. I
            prioritize user experience while developing scalable and sustainable
            solutions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            Technical Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white rounded-full shadow-sm border border-gray-200 text-gray-700 hover:border-primary hover:text-primary transition duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
