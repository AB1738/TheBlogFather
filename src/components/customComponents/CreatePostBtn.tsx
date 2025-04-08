"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Plus } from "lucide-react";
import { useStore } from "zustand";
import { UserAuthStore } from "@/store";

const CreatePostBtn = () => {
  const pathname = usePathname();
      const { user, fetchUser } = useStore(UserAuthStore);
      
      useEffect(() => {
        fetchUser(); 
      }, [pathname]);
      

  return (
    user!==undefined && (
      <Button asChild className="hover:scale-101">
        <Link href="/posts/create-post">
        <Plus />  Create New Post 
        </Link>
      </Button>
    )
  );
};

export default CreatePostBtn;
