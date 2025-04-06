"use client";
import Link from "next/link";
import { Trash, SquarePen } from "lucide-react";
import { deleteBlogPost } from "@/app/actions/actions";
import { toast } from "sonner";

interface BlogButtonsPropType {
  id: string;
}
const BlogButtons = ({ id }: BlogButtonsPropType) => {
    const handleClick=async(e: React.MouseEvent<SVGSVGElement>)=>{
        e.preventDefault()
       const response=await deleteBlogPost(id)
       if(response?.message==='ok'){
        toast.success('Blog Post Successfully Deleted 🎉')
       }else{
        toast.error(response?.message)
       }
    }
  return (
    <div className="flex gap-2 absolute right-0">
      <Link href={`/posts/edit/${id}`}>
        <SquarePen size={16} />
      </Link>
      <Trash size={16} color="red" onClick={handleClick} />
    </div>
  );
};

export default BlogButtons;
