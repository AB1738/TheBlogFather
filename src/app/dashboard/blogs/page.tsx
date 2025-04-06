import { fetchUserSession } from "@/app/actions/actions";
import { prisma } from "../../../../lib/prisma";
import BlogPosts from "@/components/customComponents/BlogPosts";

const page = async() => {
    
   const user=await fetchUserSession()
  const posts = await prisma.blogPost.findMany({
    where:{
        authorId:user?.id
    },
    include: {
        author: {
          select: {
            username: true, 
          },
        },
      },
      orderBy: {
        createdAt: 'desc', 
      },
  });

  return (
  <>
  <h1 className="text-3xl font-bold text-center pt-4">My Blogs</h1>
    <BlogPosts posts={posts} dashboard={true} />
    </>
    
  )
}

export default page