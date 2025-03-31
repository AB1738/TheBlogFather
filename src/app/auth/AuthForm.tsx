'use client'
import LoginForm from "@/components/customComponents/LoginForm";
import SignUpForm from "@/components/customComponents/SignUpForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSearchParams } from 'next/navigation';



const AuthForm = () => {
    const [temp]=useSearchParams()
  return (
    <Tabs defaultValue={temp[0]==='login'?'login':'signup'} className="w-[400px] mx-auto">
      <TabsList>
        <TabsTrigger value="login" className="cursor-pointer">
          Login
        </TabsTrigger>
        <TabsTrigger value="signup" className="cursor-pointer">
          Sign Up
        </TabsTrigger>
      </TabsList>
      <TabsContent value="login">
        <LoginForm />
      </TabsContent>
      <TabsContent value="signup">
        <SignUpForm />
      </TabsContent>
    </Tabs>
  );
};

export default AuthForm;
