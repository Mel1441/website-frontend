import invertocatwhite from '../assets/github-mark-white.svg'
import email from '../assets/email-white.svg'

export default function MiniSidebar() {
  return (
<ul class="menu bg-[#1b1b1b] box  rounded-r-md fixed mt-80 z-30 pt-2 pb-2 md:pt-3 md:pb-3 lg:pt-4 lg:pb-4 shadow-xl">
  <li>
    <a class="tooltip tooltip-right" data-tip="Home">
        <a
      href="https://github.com/Mel1441"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center hover:text-[#453a44]"
    >
      {/* GitHub Icon */}
      <img
    src={invertocatwhite}
    alt="GitHub icon"
    className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"
  />
  </a>
    </a>
  </li>
  <li>
    <a class="tooltip tooltip-right" data-tip="Email">
     <a
      href="mailto:masonlm68@gmail.com"
      className="inline-flex items-center  hover:text-[#555555] "
    >
      {/* Email Icon */}
         <img
    src={email}
    alt="Email icon"
    className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 mt-1 md:mt-2 lg:mt-3"
  />
  </a>
    </a>
  </li>
 
</ul>
  )
}