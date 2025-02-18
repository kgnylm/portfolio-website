import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Background from "../components/Background";

const Home = () => {
  return (
    <>
      <Background />
      <main className="relative">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  );
};

export default Home;
