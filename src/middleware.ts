import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import * as jose from 'jose'

 
export async function middleware(request: NextRequest) {
  const publicRoutes = ['/auth'];
  const protectedRoutes = ['/dashboard'];

  const authToken=request.cookies.get('authToken')

  if (protectedRoutes.includes(request.nextUrl.pathname)&&!authToken) {
    return NextResponse.redirect(new URL("/auth?login", request.url));
  }
  if (publicRoutes.includes(request.nextUrl.pathname) && authToken) {
    return NextResponse.redirect(new URL("/", request.url));  
  }
  return NextResponse.next();

  // if(!authToken){
  //   //redirect to login page
  //   console.log('not logged in')
  //   // return NextResponse.redirect(new URL('/auth?login', request.url))

  // }else{
  // const secret = new TextEncoder().encode(
  //   process.env.SECRET!,
  // )
  // const { payload } = await jose.jwtVerify(authToken.value, secret)

  // console.log(payload.id)
  // const response=await fetch('http://localhost:3000/api/isLoggedIn',{
  //   method:'POST',
  //   headers:{
  //     "Content-Type":'application/json'
  //   },
  //   body:JSON.stringify({payload:payload.id})
  // })
  // const data=await response.json()
  // console.log(data)
  // if(data.message==='logged in'){
  //   return NextResponse.redirect(new URL('/posts', request.url))

  // }

  // }
}   

// export const config = {
//   matcher: '/auth',
// }
 
