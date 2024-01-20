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
    }, 1000);

    // Clear the timeout to prevent memory leaks
    return () => clearTimeout(timeout);
  }, []);

  return (
    <BrowserRouter>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
          <div className='bg-About-pattern bg-cover bg-no-repeat bg-center'>
            <About />
          </div>
          <div className='bg-About-pattern bg-cover bg-no-repeat bg-center'>
            <Experience />
            <Tech />
          </div>
          <div className='bg-About-pattern bg-cover bg-no-repeat bg-center'>
            <Works />
          </div>
          {/* <Feedbacks /> */}
          <div className='relative z-0'>
            <Contact />
            <StarsCanvas />
          </div>
        </>
      )}
    </BrowserRouter>
  );
};

export default App;
