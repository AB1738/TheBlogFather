import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
// import * as jose from 'jose'

 
export async function middleware(request: NextRequest) {
  const publicRoutes = ['/auth'];
  const protectedRoutes = ['/dashboard','/dashboard/profile','/dashboard/blogs','/posts/create-post'];
  const authToken=request.cookies.get('authToken')

  if (protectedRoutes.includes(request.nextUrl.pathname)&&!authToken) {
    return NextResponse.redirect(new URL("/auth?login", request.url));
  }
  if (publicRoutes.includes(request.nextUrl.pathname) && authToken) {
    return NextResponse.redirect(new URL("/", request.url));  
  }
  return NextResponse.next();

}   


