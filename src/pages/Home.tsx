import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import avatar from '../assets/avatar-of.png';
import cartoon from '../assets/cartoon.png';
import Header from '../components/NavBar';
import MiniSidebar from '../components/MiniSidebar';
import Intro from '../components/intro'
import About from '../components/about'
import Projects from '../components/projects'

export default function HomePage() {
  return (
 
   

<body className="min-h-screen bg-[#e6e8fa]   text-[#555555]  overflow-auto ">

  <Header />
  <MiniSidebar />
  <section className=" height-[100%] h-dvh content-center z-2">
    <Intro /> 
  </section>
      <div class="divider font-[Electrolize] text-xl md:text-3xl lg:text-5xl text-[#080808] ml-10 mr-10 md:ml-20 md:mr-20 lg:ml-30 lg:mr-30">About Me</div> 

 <section className=" height-[100%] h-dvh content-center z-2">

    <About />
</section>
      <div class="divider font-[Electrolize] text-xl md:text-3xl lg:text-5xl text-[#080808] ml-10 mr-10 md:ml-20 md:mr-20 lg:ml-30 lg:mr-30">Projects</div> 

<section className=" height-[100%] h-dvh content-center z-2">
  <Projects />
</section>
</body>

  );
}