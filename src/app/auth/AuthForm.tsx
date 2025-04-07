"use client";
import LoginForm from "@/components/customComponents/LoginForm";
import SignUpForm from "@/components/customComponents/SignUpForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSearchParams } from "next/navigation";
import {  useState } from "react";

const AuthForm = () => {
  const [temp] = useSearchParams();
  console.log(temp);
  const [formValue,setFormValue]=useState<string>(temp&&(temp[0]))
//   console.log(formValue)
console.log(setFormValue)
  

//     const onTabChange = () => {
//      setFormValue(temp[0])  
//     }

  return (
    <Tabs
      defaultValue={formValue??'signup'}
      className="sm:w-[400px] px-0.5 mx-auto"
    //   onValueChange={onTabChange}
    >
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
