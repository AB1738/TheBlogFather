import LoginForm from "@/components/customComponents/LoginForm";
import SignUpForm from "@/components/customComponents/SignUpForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const authPage = async({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) => {
  const query=await searchParams
  return (
    <Tabs defaultValue={Object.keys(query)[0]==='signup'?'signup':'login'} className="w-[400px] mx-auto">
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

export default authPage;
