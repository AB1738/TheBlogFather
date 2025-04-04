'use client'

import { useRouter } from "next/navigation"
import { Button } from "../ui/button"

const BackButton = () => {
   const router= useRouter()
  return (
    <Button onClick={()=>router.back()} variant={'ghost'} className="cursor-pointer hover:scale-102">
        Back To Posts
    </Button>
  )
}

export default BackButton