import MainChart from "@/components/customComponents/MainChart";
import PostsChart from "@/components/customComponents/PostsChart";
import { Metadata } from "next";
import { prisma } from "../../../lib/prisma";
import { fetchUserSession } from "../actions/actions";

export const metadata: Metadata = {
    title: 'Dashboard',
  };
const page = async() => {
       const user=await fetchUserSession() 
      const posts = await prisma.blogPost.findMany({
        where:{
            authorId:user?.id
        },
      });
      console.log(posts)
    
  return (
    <div>
        <h1 className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-purple-600 py-4">My Dashboard</h1>
        <MainChart posts={posts}/>
        {/* <div className="flex gap-2 ">
            <PostsChart/>
            <PostsChart/>
        </div> */}
    </div>
  )
}

export default page