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

const SignUpForm = () => {
  return (
    <Card className="shadow-lg ">
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
        <CardDescription>
          Enter your email and password to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={signupAction} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="username">Username</Label>
            <Input type="text" name="username" id="username" required  className="border-2 border-gray-300 dark:border-input"/>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email</Label>
            <Input type="email" name="email" id="email" required  className="border-2 border-gray-300 dark:border-input"/>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="password">Password</Label>
            <Input type="password" name="password" id="password" required className="border-2 border-gray-300 dark:border-input"/>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input type="password" name="confirmPassword" id="confirmPassword" required  className="border-2 border-gray-300 dark:border-input"/>
          </div>
          <Button variant={"purple"} className="text-white cursor-pointer">
            Sign Up
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default SignUpForm;
