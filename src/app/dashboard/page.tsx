import MainChart from "@/components/customComponents/MainChart";
import { Metadata } from "next";
import { prisma } from "../../../lib/prisma";
import { fetchUserSession } from "../actions/actions";
import { Card } from "@/components/ui/card";
import TotalPostsComponent from "@/components/customComponents/TotalPostsComponent";
import TotalViewsComponent from "@/components/customComponents/TotalViewsComponent";

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
    
  return (
    <div>
        <h1 className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-purple-600 py-4">My Blog Dashboard</h1>
        <Card className="bg-purple-600/5 dark:bg-purple-500/60">
        <MainChart posts={posts}/>
        </Card>
        <div className="flex flex-col sm:flex-row gap-2 pt-4 pb-1 ">
            <TotalPostsComponent posts={posts}/>
            <TotalViewsComponent posts={posts}/>
        </div>
    </div>
  )
}

export default page