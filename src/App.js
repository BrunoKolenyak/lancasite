import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main>
          <Hero />
          <Benefits />
          <Services />
          <Pricing />
          <Testimonials />
          <FAQ />
          <About />
          <Contact />
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;