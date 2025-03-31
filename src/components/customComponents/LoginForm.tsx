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

const LoginForm = () => {
  return (
    <Card className="shadow-lg ">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>
          Enter your email and password to sign in
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={loginAction} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email</Label>
            <Input type="email" name="email" id="email" required className="border-2 border-gray-300 dark:border-input"/>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="password">Password</Label>
            <Input type="password" name="password" id="password" required className="border-2 border-gray-300 dark:border-input" />
          </div>
          <Button variant={"purple"} className="text-white cursor-pointer">
            Login
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
