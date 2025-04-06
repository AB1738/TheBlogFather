import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/customComponents/AppSidebar"

const Layout=({ children }: { children: React.ReactNode }) =>{
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarTrigger  className="cursor-pointer "/>

      <main className=" bg-amber-700 mx-auto w-full min-h-screen ">
      {children}
      </main>
    </SidebarProvider>
  )
}
export default Layout







