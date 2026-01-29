import { projects } from '../data/projects';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

export default function Projects() {
  return (
     <div className="mx-auto grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  ml-25 mr-25 md:ml-25 md:mr-25 lg:ml-30 lg:mr-30">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target=""
            rel="noopener noreferrer"
            className="block bg-[#f0f8ff] rounded-lg shadow-md hover:shadow-s transition pb-5 pt-5 pr-2 pl-2 md:pb-10 md:pr-5 md:pl-5 md:pt-10 md:ml-5 md:mr-5 lg:pb-20 lg:pt-20 lg:pl-10 lg:pr-10"
            data-zone={`project.card.${project.id}`}
          >
            <h3 className="text-lg md:text-lg lg:text-2xl font-semibold text-[#080808] font-[Electrolize] text-center mb-5 subpixel-antialiased">
              {project.title}
            </h3>
            <p className="mt-2 text-md md:text-md lg:text-xl text-[#080808] font-[Electrolize] text-center text-wrap subpixel-antialiased">
              {project.description}
            </p>
          </a>
        ))}
      </div>
  )
}