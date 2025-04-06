import { fetchUserSession } from "@/app/actions/actions"
import { User } from "lucide-react"

const page = async() => {
       const user=await fetchUserSession()
       console.log(user)
    
  return (
    <>
    <h1 className="text-3xl text auto my-10 font-bold text-center">My Profile</h1>
    <div className="mx-auto w-fit sm:w-[500px] h-[400px] flex flex-col gap-2  rounded justify-around shadow-lg border-2 bg-white dark:bg-black p-10 items-center mt-20">
    <User size={64} color="#9C27B0" />
    <h1 ><span className="font-bold">Email:</span> {user?.email}</h1>
    <h2 ><span className="font-bold">Username:</span> {user?.username}</h2>
    </div>
    </>
  )
}

export default page