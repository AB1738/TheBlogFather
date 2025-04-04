'use client'

import { useRouter } from "next/navigation"
import { Button } from "../ui/button"
import {ArrowLeft} from 'lucide-react'

const BackButton = () => {
   const router= useRouter()
  return (
    <Button onClick={()=>router.back()} variant={'ghost'} className="cursor-pointer hover:scale-102">
        <ArrowLeft />
        Back To Posts
    </Button>
  )
}

export default BackButton