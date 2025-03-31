import Link from "next/link"
import { Button } from "../ui/button"
import { ModeToggle } from "../ui/theme"
export const Navbar = () => {

  return (
    <nav className="w-full sm:px-30 mx-auto items-center flex justify-between p-5 border-b-2 dark:border-zinc-700 border-zinc-300 bg-white dark:bg-black ">
       <div className="flex items-center gap-2">
        <Link className="font-bold text-xl sm:text-2xl md:text-3xl " href='/'>
            The<span className="text-purple-500">BlogFather</span>
        </Link>
        <Link className="  hover:underline text-gray-600 self-end " href='/posts'>
        <p >
            View Posts
        </p>
        </Link>
        </div>
        <ul className=" flex gap-2 items-center">
            <li className='hover:cursor-pointer'>
                <Button asChild >
                    <ModeToggle />
                </Button>
            </li>
            <li>
                <Button asChild  className="size-sm">
                    <Link href='/auth?login'>Login</Link>  
                </Button>
            </li>
            <li>
            <Button asChild variant={'purple'} className="text-white" >
                <Link href='/auth?signup'>Sign Up</Link>  
            </Button>
            </li>
        </ul>
    </nav>
  )
}
