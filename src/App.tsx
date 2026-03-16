import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Products from "./components/Products";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`${
        darkMode ? "dark" : ""
      } min-h-screen bg-background text-foreground transition-colors duration-300`}
    >
      {/* Dark mode toggle for demo */}
      <button
        className="fixed top-4 right-4 z-50 px-4 py-2 rounded-lg bg-gray-800 text-white dark:bg-gray-200 dark:text-gray-900 shadow-lg"
        onClick={() => setDarkMode((d) => !d)}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <Header activeSection={activeSection} onNavigate={scrollToSection} />
      <main>
        <section id="home" className="section-spacing">
          <Hero />
        </section>
        <section id="services" className="section-spacing">
          <Services />
        </section>
        <section id="about" className="section-spacing">
          <About />
        </section>
        <section id="gallery" className="section-spacing">
          <Gallery />
        </section>
        <section id="products" className="section-spacing">
          <Products />
        </section>
        <section id="testimonials" className="section-spacing">
          <Testimonials />
        </section>
        <section id="faq" className="section-spacing">
          <FAQ />
        </section>
        <section id="contact" className="section-spacing">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
