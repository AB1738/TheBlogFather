import { MessageSquareMore , Home, NotebookPen,User  } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "My Blogs",
    url: "/dashboard/blogs",
    icon: NotebookPen ,
  },
  {
    title: "Comments",
    url: "/dashboard/comments",
    icon: MessageSquareMore ,
  },
  {
    title: "My Profile",
    url: "/dashboard/profile",
    icon: User  ,
  },

];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="flex justify-between">
            Dashboard
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
