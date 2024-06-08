// About.js
import React from 'react';
import Navbar from '../navbar';
import Herosection from '../herosection';
import Services from '../services';
import Bestpart from '../bestpart';
import Photgraphy from '../photography';
import Needit from '../needit';
import Discover from '../discoverhome';
import Testimonials from '../testiminials';




function Home() {
  return (
    <>

      <Navbar />
      <Herosection />
      <Services />
      <Bestpart />
      <Needit />
      <Discover />
      <Photgraphy />
      <Testimonials/>


    </>
  );
}

export default Home;
