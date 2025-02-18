import { useState, useEffect, useRef } from "react";

const Projects = () => {
  const projects = [
    {
      title: "NBA Player Generator",
      description:
        "A web application that randomly presents NBA players from various eras. Users can discover players with a single click and explore their Wikipedia pages for detailed career information. Features 922 players in the database.",
      technologies: ["Vue.js", "Supabase", "HTML", "JavaScript"],
      github: "https://github.com/kgnylm/nba-player-generator",
      demo: "https://nba-generator.vercel.app",
    },
    {
      title: "NeighboorFood",
      description:
        "A platform that facilitates food sharing between neighbors. Users can share their excess food or discover shared meals in their vicinity.",
      technologies: ["Node.js", "React", "MongoDB", "Express.js", "Vercel"],
      github: "https://github.com/kgnylm/NeighboorFood",
      demo: "https://neighboorfood.vercel.app",
    },
    {
      title: "ISCES",
      description:
        "A web application developed for IZTECH to manage the selection of department representatives. Features separate panels for students and administrators to facilitate the election process.",
      technologies: ["Node.js", "React", "MongoDB", "Express.js", "Vercel"],
      github: "https://github.com/kgnylm/ISCES",
      demo: null,
    },
    {
      title: "Multi-Process Chat App",
      description:
        "A real-time chat application built with Socket.IO and Python, featuring multi-process architecture for improved performance and scalability. Implements worker processes for message handling and queue management.",
      technologies: [
        "Python",
        "Socket.IO",
        "Flask",
        "WebSocket",
        "Multi-Processing",
      ],
      github: "https://github.com/kgnylm/socketio-multiprocces-chat-app",
      demo: null,
    },
    {
      title: "Toggl Track App",
      description:
        "An internship project that helps users track their time and manage tasks efficiently. Features include task creation, time tracking, and detailed activity logs. Built with Vue.js and Supabase for a seamless user experience.",
      technologies: ["Vue.js", "Supabase", "JavaScript", "HTML", "CSS"],
      github: "https://github.com/kgnylm/Toggl-Track-App",
      demo: null,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragDistance, setDragDistance] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const currentX = e.pageX;
    const distance = currentX - startX;
    setDragDistance(distance);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const currentX = e.touches[0].pageX;
    const distance = currentX - startX;
    setDragDistance(distance);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;

    const threshold = 100; // Minimum sürükleme mesafesi
    if (Math.abs(dragDistance) > threshold) {
      if (dragDistance > 0 && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      } else if (dragDistance < 0 && currentIndex < projects.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    }

    setIsDragging(false);
    setDragDistance(0);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      } else if (e.key === "ArrowRight" && currentIndex < projects.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  const getTransformStyle = () => {
    if (isDragging) {
      return `translateX(${dragDistance}px)`;
    }
    return "translateX(0)";
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Project Cards */}
          <div
            ref={sliderRef}
            className="bg-white rounded-xl shadow-lg p-8 cursor-grab active:cursor-grabbing select-none"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleDragEnd}
          >
            <div
              className="transition-transform duration-300 ease-out"
              style={{ transform: getTransformStyle() }}
            >
              {projects.map(
                (project, index) =>
                  index === currentIndex && (
                    <div
                      key={index}
                      className="h-full flex flex-col justify-between"
                    >
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 mb-6">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition duration-300"
                        >
                          GitHub
                        </a>
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition duration-300"
                          >
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  )
              )}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={() =>
              currentIndex > 0 && setCurrentIndex(currentIndex - 1)
            }
            className={`absolute left-0 top-[45%] transform -translate-y-1/2 -translate-x-4 md:-translate-x-12 p-2 rounded-full bg-white shadow-lg text-primary hover:bg-primary hover:text-white transition-all duration-300 ${
              currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={currentIndex === 0}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={() =>
              currentIndex < projects.length - 1 &&
              setCurrentIndex(currentIndex + 1)
            }
            className={`absolute right-0 top-[45%] transform -translate-y-1/2 translate-x-4 md:translate-x-12 p-2 rounded-full bg-white shadow-lg text-primary hover:bg-primary hover:text-white transition-all duration-300 ${
              currentIndex === projects.length - 1
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
            disabled={currentIndex === projects.length - 1}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary scale-125"
                    : "bg-gray-300 hover:bg-primary/50"
                }`}
              />
            ))}
          </div>

          {/* More Projects Section */}
          <div className="mt-16 text-center">
            <a
              href="https://github.com/kgnylm"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex flex-col items-center gap-4 transition-all duration-300 hover:scale-105"
            >
              <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center group-hover:shadow-xl transition-all duration-300">
                <svg
                  className="w-8 h-8 text-gray-700 group-hover:text-primary transition-colors duration-300"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-lg font-semibold text-gray-900">
                  More Projects
                </span>
                <span className="text-sm text-gray-600">
                  Visit My GitHub Profile
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
