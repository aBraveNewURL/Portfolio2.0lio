import React from 'react';
import Navbar from '../components/Navbar';
import HeroImg2 from '../components/HeroImg2';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';



const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="PROJECTS" text="Some of my most recent work"/>
      <ProjectCard />
      <Footer />
    </div>
  )
};

export default Project;