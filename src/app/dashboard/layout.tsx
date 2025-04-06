import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/customComponents/AppSidebar"

const Layout=({ children }: { children: React.ReactNode }) =>{
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarTrigger  className="cursor-pointer "/>
      <div className="bg-red-400  min-h-screen w-full">
        {children}
      </div>
    </SidebarProvider>
  )
}
export default Layout







