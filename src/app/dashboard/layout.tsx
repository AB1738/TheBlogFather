import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/customComponents/AppSidebar"

const Layout=({ children }: { children: React.ReactNode }) =>{
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarTrigger  className="cursor-pointer "/>

      <main className=" mx-auto w-full min-h-screen px-4 ">
      {children}
      </main>
    </SidebarProvider>
  )
}
export default Layout







