"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Plus } from "lucide-react";

const CreatePostBtn = () => {
  const pathname = usePathname();
  console.log(pathname);

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/isLoggedIn");
        const status = await response.json();
        console.log(status.message);
        if (status.message === "Missing Authorization Token") {
          setIsLoggedIn(false);
        } else if (status.message === "Logged In") {
          setIsLoggedIn(true);
        }
      } catch (e: unknown) {
        if (e instanceof Error) {
          console.log(e);
        }
      }
    };
    checkAuthStatus();
  }, [pathname]);
  return (
    isLoggedIn && (
      <Button asChild className="hover:scale-101">
        <Link href="/posts/create-post">
        <Plus />  Create New Post 
        </Link>
      </Button>
    )
  );
};

export default CreatePostBtn;
