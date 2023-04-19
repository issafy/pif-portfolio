import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern_light dark:bg-hero-pattern_dark bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <div className="bg-primary dark:bg-primary_dark">
          <About />
          <Experience />
          {/* <Tech /> */}
          <Works />
          <Feedbacks />
        </div>
        
        <div className='bg-primary dark:bg-primary_dark relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
