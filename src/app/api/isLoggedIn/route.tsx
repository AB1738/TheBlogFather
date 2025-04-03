import { NextRequest } from "next/server";
import { prisma } from "../../../../lib/prisma";


export async function POST(req: NextRequest) {
    try {
        const {payload} = await req.json() 
        console.log('from api')
        console.log(payload)
        if(!payload){
            return Response.json({message:'Missing access token'})

        }
        const user = await prisma.user.findUnique({
          where: {
            id: payload,
          },
        });
    
        if (!user) {
          console.log("invalid token");
          return Response.json({message:"invalid token"})
        } else {
          console.log(user);
          console.log("logged in");
          return Response.json({user,message:"logged in"})

        }
      } catch (e: unknown) {
        if (e instanceof Error) {
          console.log(e);
        }
      }
  }
