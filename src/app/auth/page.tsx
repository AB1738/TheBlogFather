import { Suspense } from "react"
import AuthForm from "./AuthForm"
import Loading from "./loading"

const authPage = () => {
  return (
    <Suspense fallback={<Loading/>}>
    <AuthForm/>
    </Suspense>
  )
}

export default authPage