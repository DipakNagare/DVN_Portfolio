import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import LoadingSpinner from "./components/LoadingSpinner";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a 3-second loading delay
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 10000);

    // Clear the timeout to prevent memory leaks
    return () => clearTimeout(timeout);
  }, []);

  return (
    <BrowserRouter>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className='relative z-0 bg-primary'>
          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Navbar />
            <Hero />
          </div>
          <div className='bg-About-pattern bg-cover bg-no-repeat bg-center'>
            <About />
          </div>
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
          <div className='relative z-0'>
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      )}
    </BrowserRouter>
  );
};

export default App;
