'use client'
import Link from "next/link"
import { Button } from "../ui/button"
import { ModeToggle } from "../ui/theme"
import { useEffect, useState } from "react"
export const Navbar = () => {
    // const [screenWidth,setScreenWidth]=useState<number>(window.innerWidth)
    // useEffect(() => {
    //     const handleResize = () => {
    //       setScreenWidth(window.innerWidth);
    //     };
    
    //     window.addEventListener('resize', handleResize);
    
    //     return () => {
    //       window.removeEventListener('resize', handleResize);
    //     };
    //   }, []); 
    


  return (
    <nav className="w-full md:px-30 mx-auto items-center flex justify-between p-4 border-b-2 dark:border-zinc-700 border-zinc-300  dark:bg-black ">
       <div className="flex items-center gap-2">
        <Link className="font-bold text-md sm:text-2xl md:text-3xl " href='/'>
            The<span className="text-purple-500">BlogFather</span>
        </Link>
        {/* <Link className="  hover:underline text-gray-600 self-end text-[.675rem] sm:text-sm " href='/posts'>
        <p >
            View Posts
        </p>
        </Link> */}
        {/* size={screenWidth<640?'xs':'default'} */}
        </div>
        <ul className=" flex gap-2 items-center">
            <li className='hover:cursor-pointer'>
                <Button asChild className="text-white text-xs sm:text-sm"  >
                    <ModeToggle />
                </Button>
            </li>
            <li>
                <Button asChild  className=" text-xs sm:text-sm" >
                    <Link href='/auth?login'>Login</Link>  
                </Button>
            </li>
            <li>
            <Button asChild variant={'purple'} className="text-white text-xs sm:text-sm" >
                <Link href='/auth?signup'>Sign Up</Link>  
            </Button>
            </li>
        </ul>
    </nav>
  )
}
