import cartoon from '../assets/cartoon.png';

export default function Intro() {
  return (
       <div className=" justify-center  z-300">
        
    
  
          <h1 className="text-2xl md:text-4xl lg:text-5xl text-[#080808]  font-[Electrolize] text-center mb-2">Hi, I'm Melissa </h1>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-[#080808]  font-[Electrolize] text-center mb-2">Data Engineer </h1>
   
        
      

                    <div className="flex justify-center">
    <img
      src={cartoon}
      alt="Melissa's avatar"
      className="aspect-auto w-80 md:w-100 lg:w-130 h-55 md:h-70 lg:h-90 object-cover shadow-xl  mt-5 mb-5"
    />
    </div>
        <p className="text-lg md:text-2xl lg:text-3xl text-[#080808] text-pretty font-[Electrolize] text-center mt-2 ">
          Thanks for checking out my website!  
          </p>
               {/*   </div> */}
      </div>
  )
}