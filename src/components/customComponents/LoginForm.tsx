import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { loginAction } from "@/app/actions/actions";
import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";


const LoginForm = () => {
  const [state, formAction,isPending] = useActionState(loginAction,undefined);

  const router=useRouter()
  useEffect(() => {
      if (state && state.message === 'Incorrect Credentials') {
        toast.error("Incorrect Email or Password");
        router.push('/auth?login')
      }
     else if (state && state.message === 'Logged In') {
        toast.success("Welcome Back! 🎉");
        router.push('/posts')
      }
    }, [state,router]);
    
  return (
    <Card className="shadow-lg ">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>
          Enter your email and password to sign in
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email</Label>
            <Input type="email" name="email" id="email"   className={`border-2 ${state?.errors?.email?'border-red-600':'border-gray-300'}  ${state?.errors?.email?'dark:border-red-600':'dark:border-input'} `}/>
            {state?.errors?.email &&<p className="text-sm text-red-600 text-center">{state.errors.email}</p>}
            </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="password">Password</Label>
            <Input type="password" name="password" id="password"  className={`border-2 ${state?.errors?.password?'border-red-600':'border-gray-300'}  ${state?.errors?.password?'dark:border-red-600':'dark:border-input'} `} />
            {state?.errors?.password &&<p className="text-sm text-red-600 text-center">{state.errors.password}</p>}

          </div>
          <Button variant={"purple"} className="text-white cursor-pointer" disabled={isPending}>
            {!isPending?'Login':'Logging In'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
