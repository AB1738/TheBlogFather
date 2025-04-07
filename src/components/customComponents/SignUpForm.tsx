import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input"; 
import { Button } from "../ui/button"; 
import { signupAction } from "@/app/actions/actions";
import { useActionState, useEffect } from "react";
import { toast } from "sonner"
import { useRouter } from "next/navigation";



const SignUpForm = () => {
    const [state,formAction,isPending]=useActionState(signupAction,undefined)
    const router=useRouter()
    useEffect(() => {
        if (state && state.message === 'ok') {
          toast.success("Account Successfully Created 🎉");
          router.push('/auth?login')
        }
      }, [state,router]);
  return (
    <Card className="shadow-lg ">
      <CardHeader>
        <CardTitle >Sign Up</CardTitle>
        <CardDescription className="text-xs sm:text-sm text-left">
          Enter your email and password to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="username">Username</Label>
            <Input type="text" name="username" id="username"   className={`border-2 ${state?.errors?.username?'border-red-600':'border-gray-300'}  ${state?.errors?.username?'dark:border-red-600':'dark:border-input'} `}/>
            {state?.errors?.username &&<p className="text-sm text-red-600 text-center">{state.errors.username}</p>}

          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email</Label>
            <Input type="email" name="email" id="email"   className={`border-2 ${state?.errors?.email?'border-red-600':'border-gray-300'}  ${state?.errors?.email?'dark:border-red-600':'dark:border-input'} `}/>
            {state?.errors?.email &&<p className="text-sm text-red-600 text-center">{state.errors.email}</p>}

          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="password">Password</Label>
            <Input type="password" name="password" id="password"  className={`border-2 ${state?.errors?.password?'border-red-600':'border-gray-300'}  ${state?.errors?.password?'dark:border-red-600':'dark:border-input'} `}/>
            {state?.errors?.password &&<p className="text-sm text-red-600 text-center">{state.errors.password}</p>}

          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input type="password" name="confirmPassword" id="confirmPassword"   className={`border-2 ${state?.errors?.password?'border-red-600':'border-gray-300'}  ${state?.errors?.password?'dark:border-red-600':'dark:border-input'} `}/>
            {state?.errors?.password &&<p className="text-sm text-red-600 text-center">{state.errors.password}</p>}

          </div>
          <Button variant={"purple"} className="text-white cursor-pointer" disabled={isPending}>
            {!isPending?'Sign Up':'Signing Up'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default SignUpForm;
