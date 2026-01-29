import resumePDF from '../assets/mm-resume.pdf'

export default function Header() {
  return (
        <nav className="z-10000 fixed  bg-[#1b1b1b] h-22  inset-x-0 top-0 items-center text-center place-content-center shadow-md">
     <div className="absolute flex ml-3 mb-4"><h1 className="text-l text-[#FFFFFF] font-[Electrolize]">Melissa Mason <br></br>
      Data Engineer
     </h1>
     </div> 
      <div className=" flex flex-row-reverse space-x-6 items-center ">
         <a href={resumePDF} target="_blank" rel="noopener noreferrer" className="text-2xl text-[#FFFFFF] font-[Electrolize] ">Resume</a>
          <a href="#" className="text-2xl text-[#FFFFFF] font-[Electrolize] ">Projects</a>
          <a href="#"className="text-2xl  text-[#FFFFFF] font-[Electrolize]">Blog</a>
    
          <a href="#" className="text-2xl  text-[#FFFFFF] font-[Electrolize] mr-6">Home</a> 
        </div> 
  
    </nav>
  )
}