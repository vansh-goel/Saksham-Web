import Image from "next/image";
import Link from "next/link";
import ReactTypingEffect from "react-typing-effect";

function MainNav() {
  return (
  <div className="flex flex-row xnm:flex-col xnm:text-center  ">
   
    <div className="flex-grow xsml:mx-2 flex items-center justify-center cursor-pointer">
      <div className="bg-transparent w-fit xsms:h-[5vh] h-[8vh] rounded-full border-1 flex flex-row border-black items-center">
       
        <div className="text-lg xsms:text-base p-2 font-mono xsssm:py-1 xsssm:text-sm  font-medium mlg:text-base">
          <ul className="flex flex-row justify-around">
            <Link href="/home"><li className="px-3"> Home </li></Link>
            <Link href="/schemes"><li className="px-3"> Schemes </li></Link>
           <Link href="/braille/orbitwriter"><li className="px-3"> Orbit-Writer </li></Link> 
           <Link href="https://65818bb9e552d002e5f9d0cd--celadon-smakager-f009c0.netlify.app/"> <li className="px-3"> Playground </li></Link> 
            <Link href="/education">
              <li className="px-3">
                Education
               </li>
            </Link>

          </ul>
         </div>
      </div>
    </div>

  </div>


  );
}

export default MainNav;