import { NextRequest } from "next/server";
// import { prisma } from "../../../../lib/prisma";
import * as jose from "jose";

export async function GET(request: NextRequest) {
  try {
    const authToken = request.cookies.get("authToken");
    const secret = new TextEncoder().encode(process.env.SECRET!);
    if(!authToken){
        return Response.json({message:"Missing Authorization Token"})
    }
    const { payload } = await jose.jwtVerify(authToken.value, secret);
    if(payload){
        return Response.json({message:'Logged In',payload:payload.id})

    }

    //     const {payload} = await req.json()
    //     console.log('from api')
    //     console.log(payload)
    //     if(!payload){
    //         return Response.json({message:'Missing access token'})

    //     }
    //     const user = await prisma.user.findUnique({
    //       where: {
    //         id: payload,
    //       },
    //     });

    //     if (!user) {
    //       console.log("invalid token");
    //       return Response.json({message:"invalid token"})
    //     } else {
    //       console.log(user);
    //       console.log("logged in");
    //       return Response.json({user,message:"logged in"})

    //     }
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.log(e);
    }
  }
}

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
