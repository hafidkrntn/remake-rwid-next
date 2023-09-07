import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { animateScroll as scroll, } from 'react-scroll'
import { useState } from "react";
import Link from "next/link";

function Navbar() {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  const handleClose =()=> setNav(!nav)

return (
  <div className='w-screen h-[80px] z-10'>
    <div className='px-2 flex justify-between items-center w-full h-full'>
      <div className='flex items-center'>
      <img 
            src="https://res.cloudinary.com/hafidkrntn/image/upload/v1664882363/rwid/image_2_wo7dq8.png"
            width={200}
            height={200}
            className="cursor-pointer object-contain"
          />
        <ul className='hidden md:flex'>
        <li><Link href="home">Home</Link></li>
        <li><Link href="course">Course</Link></li>
        <li><Link href="bootcamp">Bootcamp</Link></li>
        <li><Link href="jobs">Jobs</Link></li>
        <li><Link href="podcast">Podcast</Link></li>
        </ul>
      </div>
      <div className='hidden md:flex pr-20'>
        <button className='buttonHeader text-black mr-20 border-solid border-2'>
          Sign In
        </button>
        <button className='buttonHeader bg-black text-white'>Sign Up</button>
      </div>
      <div className='md:hidden mr-4' onClick={handleClick}>
          {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}
        
      </div>
    </div>

    <ul className={!nav ? 'hidden' : 'absolute w-full px-8'}>
        <li className='w-full bg-[#87CC17] border-2'><Link onClick={handleClose} href="home">Home</Link></li>
        <li className='w-full bg-[#87CC17] border-2'><Link onClick={handleClose} href="course">Course</Link></li>
        <li className='w-full bg-[#87CC17] border-2'><Link onClick={handleClose} href="bootcamp">Bootcamp</Link></li>
        <li className='w-full bg-[#87CC17] border-2'><Link onClick={handleClose} href="jobs">Jobs</Link></li>
        <li className='w-full bg-[#87CC17] border-2'><Link onClick={handleClose} href="podcast">Podcast</Link></li>

        <div className='flex flex-col my-4'>
          <Link href="/login">
            <button className='bg-[#87CC17] text-white rounded-full px-8 py-3 mb-4'>Sign In</button>
          </Link>
          <Link href="/">
            <button className='bg-[#87CC17] text-white rounded-full px-8 py-3'>Sign Up</button>
          </Link>
        </div>
    </ul>
  </div>
);
};

export default Navbar;
