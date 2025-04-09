import { Suspense } from "react"
import AuthForm from "./AuthForm"
import Loading from "./loading"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Sign In or Sign Up',
  };

const authPage = () => {
  return (
    <Suspense fallback={<Loading/>}>
    <AuthForm/>
    </Suspense>
  )
}

export default authPage