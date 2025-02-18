const Experience = () => {
  const experiences = [
    {
      title: "Software Developer",
      company: "Patrion Advanced Technologies",
      period: "July 2024 - January 2025",
      description:
        "Developed industrial automation software solutions and real-time monitoring systems. Implemented data collection and visualization systems for manufacturing processes.",
      technologies: ["Flask", "MongoDB", "AWS", "OPC Router", "WebSocket"],
    },
    {
      title: "Full Stack Developer Intern",
      company: "KivaCRM",
      period: "July 2023 - August 2023",
      description:
        "Developed full stack web applications, implemented new features and improved existing functionalities. Worked on customer relationship management systems.",
      technologies: ["Vue.js", "Supabase", "Tailwind CSS", "PostgreSQL"],
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gray-200"></div>

          <div className="space-y-8 md:space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                } justify-start`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white z-10"></div>

                {/* Content Box */}
                <div
                  className={`w-[calc(100%-4rem)] md:w-5/12 group transition-all duration-300 hover:scale-105 ${
                    index % 2 === 0
                      ? "ml-16 md:ml-0 md:pr-12"
                      : "ml-16 md:ml-0 md:pl-12"
                  }`}
                >
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 group-hover:shadow-lg transition-all duration-300">
                    <span className="text-primary text-sm font-medium mb-2 block">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-medium mb-3">
                      {exp.company}
                    </p>
                    <p className="text-gray-600 mb-4 text-sm md:text-base">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 text-xs md:text-sm bg-gray-100 text-gray-600 rounded-full group-hover:bg-primary/10 group-hover:text-primary transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
