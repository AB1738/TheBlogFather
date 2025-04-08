'use client'
import Link from "next/link"
import { Button } from "../ui/button"
import { ModeToggle } from "../ui/theme"
import { Suspense, useCallback, useEffect, useState } from "react"
import { usePathname, useRouter } from 'next/navigation'
import {  loginAction, logoutAction } from "@/app/actions/actions"
import { toast } from "sonner"
import {Menu,SquareX } from 'lucide-react'


export const Navbar = () => {
    const [isMobile,setIsMobile]=useState<boolean|null>(null)
    const [menuIsClosed,setMenuIsClosed]=useState<boolean>(true)
    
    useEffect(() => {
        const handleResize = () => window.innerWidth>=768?setIsMobile(false):setIsMobile(true)
        handleResize()
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []); 
    const router=useRouter()
   const pathname = usePathname()
   console.log(pathname)

    const [isLoggedIn,setIsLoggedIn]=useState<boolean>(false)
    useEffect(()=>{
        const checkAuthStatus=async()=>{
            try{
            const response=await fetch('http://localhost:3000/api/isLoggedIn')
            const status=await response.json()
            console.log(status.message)
            if(status.message==='Missing Authorization Token'){
                setIsLoggedIn(false)
            }else if(status.message==="Logged In"){
                setIsLoggedIn(true)
            }
            }catch(e:unknown){
                if(e instanceof Error){
                    console.log(e)
                }
            }
        }
        checkAuthStatus()
        setMenuIsClosed(true)

    },[pathname])
 
    const handleClick=async()=>{
        const response=await logoutAction()
        if(response?.message){
            toast.success(response.message)
            if(pathname==='/'){
                window.location.reload()
            }else
            router.push('/')
        }else{
            toast.error('Internal Server Error')
        }

    }


  return (

    <nav className=" ">
    <div className="border-b-2 dark:border-zinc-700 border-zinc-300  dark:bg-black">
    <div className="w-full md:px-30 mx-auto items-center flex justify-between p-4">

    <div className="flex   items-center gap-2">
     <Link className="font-bold text-lg  sm:text-2xl md:text-3xl " href='/'>
         The<span className="text-purple-500">BlogFather</span>
     </Link>
     <Link className="  hover:underline text-gray-600 dark:text-gray-300 pb-1  self-end text-[.675rem] sm:text-sm " href='/posts'>
     <p >
         View Posts
     </p>
     </Link>
     </div>
     <div className="flex gap-2 items-center justify-center" >
             <Button asChild className="text-white text-xs sm:text-sm hover:cursor-pointer"  >
                 <ModeToggle />
             </Button>
             <div className="mobile">
             <Menu onClick={()=>setMenuIsClosed(!menuIsClosed)} className={`cursor-pointer ${menuIsClosed?'visible':'hidden'}`}/>
             <SquareX onClick={()=>setMenuIsClosed(!menuIsClosed)} className={`cursor-pointer ${menuIsClosed?'hidden':'visible'}`}/>
             </div>


     <ul className=" flex flex-col sm:flex-row gap-2 items-center desktop">

         {!isLoggedIn?(
             <>
         <li>
         <Button asChild  className=" text-xs sm:text-sm"  >
             <Link href='/auth?login'>Login</Link>  
         </Button>
     </li>
     <li>
     <Button asChild variant={'purple'} className="text-white text-xs sm:text-sm"  >
         <Link href='/auth?signup'>Sign Up</Link>  
     </Button>
     </li>
     </>
         ):(
             <>
             <li>
             <Button onClick={handleClick}  className=" text-xs sm:text-sm cursor-pointer"  >
                 Logout
             </Button>
         </li>

         <li>
         <Button asChild variant={'purple'} className="text-white text-xs sm:text-sm"  >
             <Link href='/dashboard'>Dashboard</Link>  
         </Button>
         </li>

         </>
         )}

     </ul>


     </div>
     </div>
     {(isMobile&&!menuIsClosed)&&(
                      <ul className=" flex flex-col sm:flex-row  items-center py-2 w-full transition-all">

                      {!isLoggedIn?(
                          <>
                      <li className=" w-full p-2">
                      <Button asChild  className=" text-xs sm:text-sm"  size={'full'} >
                          <Link href='/auth?login'>Login</Link>  
                      </Button>
                  </li>
                  <li className=" w-full p-2">
                  <Button asChild variant={'purple'} className="text-white text-xs sm:text-sm" size={'full'}  >
                      <Link href='/auth?signup'>Sign Up</Link>  
                  </Button>
                  </li>
                  </>
                      ):(
                          <>
                          <li className=" w-full p-2">
                          <Button onClick={handleClick}  className=" text-xs sm:text-sm cursor-pointer" size={'full'}  >
                              Logout
                          </Button>
                      </li>
             
                      <li className=" w-full p-2">
                      <Button asChild variant={'purple'} className="text-white text-xs sm:text-sm" size={'full'}  >
                          <Link href='/dashboard'>Dashboard</Link>  
                      </Button>
                      </li>
             
                      </>
                      )}
             
                  </ul>
)}
     </div>
 </nav>

  )
}
