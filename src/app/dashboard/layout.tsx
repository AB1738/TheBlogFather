import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/customComponents/AppSidebar"

const Layout=({ children }: { children: React.ReactNode }) =>{
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarTrigger  className="cursor-pointer "/>

      <main className=" mx-auto w-full min-h-screen px-4 pb-2 border-l-2 border-zinc-300 dark:border-zinc-800">
      {children}
      </main>
    </SidebarProvider>
  )
}
export default Layout







