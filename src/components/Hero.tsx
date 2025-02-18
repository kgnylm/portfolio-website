const Hero = () => {
  return (
    <section className="pt-20 lg:pt-[120px] relative z-10 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <div className="hero-content">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Hi, I'm <span className="text-primary">Kağan Yalım</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                Computer Engineer & Full Stack Developer
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="py-3 px-8 bg-primary text-white rounded-lg hover:bg-primary/90 transition duration-300"
                >
                  Get in Touch
                </a>
                <a
                  href="#projects"
                  className="py-3 px-8 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition duration-300"
                >
                  View Projects
                </a>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <div className="hero-image relative z-10 text-center">
              <div className="relative inline-block">
                <img
                  src="/pp.jpg"
                  alt="Kağan Yalım"
                  className="w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] rounded-full object-cover mx-auto"
                />
                <div className="absolute -z-10 top-0 -right-4 w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] border-2 border-primary rounded-full mx-auto"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
