import { Link } from 'react-router-dom';
import avatar from '../assets/IMG_3974_v1.jpeg';
import invertocatwhite from '../assets/github-mark.svg'
import email from '../assets/email-svgrepo-com.svg'
import { projects } from '../data/projects'

export default function HomePage() {
  return (
      <body className="min-h-screen bg-[#E7EBDE] text-[#453a44] flex items-center justify-center p-6">
     <main className="flex flex-col items-center space-y-12">
   
     <div className="grid grid-cols-1 md:grid-cols-2  p-6">
  <div className="flex flex-col items-center  space-y-4">

  {/* Left: Photo */}

    <img
      src={avatar}
      alt="Melissa's avatar"
      className="aspect-auto w-80 h-110 object-cover drop-shadow-md rounded-full  content-center mt-10 ml-20"
    />

     {/* Contact Links */}
  <div className="mt-5 ml-20 space-y-4 text-sm text-gray-700">
    <a
      href="https://github.com/Mel1441"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center space-x-1 hover:text-[#453a44]"
    >
      {/* GitHub Icon */}
      <img
    src={invertocatwhite}
    alt="GitHub icon"
    className="w-5 h-5"
  />

      <span className="text-[#453a44]">Mel1441</span>
    </a>

    <a
      href="mailto:masonlm68@gmail.com"
      className="inline-flex items-center space-x-0.5 hover:text-[#453a44] ml-2"
    >
      {/* Email Icon */}
         <img
    src={email}
    alt="Email icon"
    className="w-5 h-5"
  />
      <span className="text-[#453a44]">masonlm68@gmail.com</span>
    </a>
     

  </div>
 </div>



  {/* Right: Title + Intro */}
  <div className="flex flex-col ">
               <div className="mt-20 items-center">
    <h1 className=" text-3xl font-bold text-[#786577] text-center ">Melissa Mason</h1>
    <h2 className="text-2xl text-[#786577] text-center ">Data Engineer</h2></div>
        <p className="mt-5 mr-20 text-lg text-[#786577] text-center">
      Welcome! I'm a data engineer with over nine years of experience designing, building and maintaining data pipelines and infrastructure.    
    </p>
 <section className="mt-10 px-6 py-10 bg-[#E7EBDE]" data-zone="projects.section">
      <h2 className="text-3xl font-bold text-[#786577] mb-6 text-center">
        Projects
      </h2>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-[#E9D1D1] rounded-lg shadow-md hover:shadow-xs transition p-5 "
            data-zone={`project.card.${project.id}`}
          >
            <h3 className="text-lg font-semibold text-[#786577]">
              {project.title}
            </h3>
            <p className="mt-2 text-sm text-[#786577]">
              {project.description}
            </p>
          </a>
        ))}
      </div>
    </section>


 
  </div>
</div>   
</main>
    </body>
  );
}